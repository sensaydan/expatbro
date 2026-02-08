#!/usr/bin/env npx tsx

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { generateAllTopics } from "./blog-topics";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const GENERATED_LOG = path.join(process.cwd(), "scripts/generated.json");

// Ensure directories exist
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Load already generated slugs
function getGeneratedSlugs(): Set<string> {
  if (fs.existsSync(GENERATED_LOG)) {
    const data = JSON.parse(fs.readFileSync(GENERATED_LOG, "utf-8"));
    return new Set(data.slugs || []);
  }
  return new Set();
}

function saveGeneratedSlug(slug: string) {
  const generated = getGeneratedSlugs();
  generated.add(slug);
  fs.writeFileSync(GENERATED_LOG, JSON.stringify({ slugs: Array.from(generated) }, null, 2));
}

// Check if post already exists
function postExists(slug: string): boolean {
  return fs.existsSync(path.join(BLOG_DIR, `${slug}.mdx`));
}

// Generate blog post content
async function generatePost(topic: {
  title: string;
  country: string;
  city?: string;
  category: string;
  slug: string;
}): Promise<string> {
  const client = new Anthropic();

  const prompt = `Write a blog post for an expat website about: "${topic.title}"

Context:
- This is for expatbro.co, a site helping people move to Latin America
- The author is Dan Thomson, who has lived abroad for 6 years, visited 110 countries, speaks English/Spanish/Portuguese/French
- The tone should be direct, no-BS, conversational but informative
- Include real, practical advice - not generic travel blog fluff
- Country: ${topic.country}
${topic.city ? `- City: ${topic.city}` : ""}
- Category: ${topic.category}

Requirements:
- Write 1200-1800 words
- Use markdown formatting (## for h2, ### for h3, **bold**, etc.)
- Include specific names, prices, locations when relevant
- Add 2-3 personal anecdotes or observations
- Be honest about downsides, not just positive spin
- End with a brief actionable summary

Write only the markdown content (no frontmatter - I'll add that). Start directly with the first paragraph.`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  const content = response.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type");
  }

  return content.text;
}

// Create MDX file
function createMdxFile(
  topic: {
    title: string;
    country: string;
    city?: string;
    category: string;
    slug: string;
  },
  content: string
) {
  const today = new Date().toISOString().split("T")[0];

  // Generate description from first paragraph
  const firstPara = content.split("\n\n")[0].replace(/[#*_]/g, "").slice(0, 155);
  const description = firstPara.endsWith(".") ? firstPara : firstPara + "...";

  // Generate tags
  const tags = [topic.country.toLowerCase()];
  if (topic.city) tags.push(topic.city.toLowerCase().replace(/\s+/g, "-"));
  tags.push(topic.category);

  const frontmatter = `---
title: "${topic.title}"
description: "${description.replace(/"/g, '\\"')}"
date: "${today}"
author: "Dan Thomson"
country: "${topic.country}"
${topic.city ? `city: "${topic.city}"` : ""}
category: "${topic.category}"
tags: [${tags.map((t) => `"${t}"`).join(", ")}]
---

`;

  const fullContent = frontmatter + content;
  const filePath = path.join(BLOG_DIR, `${topic.slug}.mdx`);

  fs.writeFileSync(filePath, fullContent);
  console.log(`✅ Created: ${topic.slug}.mdx`);
}

// Main function
async function main() {
  const args = process.argv.slice(2);
  const count = parseInt(args[0]) || 5; // Default to 5 posts

  console.log(`Generating ${count} blog posts...`);

  const allTopics = generateAllTopics();
  const generated = getGeneratedSlugs();

  // Filter to ungenerated topics
  const available = allTopics.filter((t) => !generated.has(t.slug) && !postExists(t.slug));

  if (available.length === 0) {
    console.log("No more topics to generate!");
    return;
  }

  // Shuffle and take requested count
  const shuffled = available.sort(() => Math.random() - 0.5);
  const toGenerate = shuffled.slice(0, Math.min(count, available.length));

  console.log(`Selected ${toGenerate.length} topics to generate`);
  console.log(`${available.length} topics remaining after this batch\n`);

  for (const topic of toGenerate) {
    try {
      console.log(`📝 Generating: ${topic.title}`);
      const content = await generatePost(topic);
      createMdxFile(topic, content);
      saveGeneratedSlug(topic.slug);

      // Small delay to avoid rate limits
      await new Promise((r) => setTimeout(r, 1000));
    } catch (error) {
      console.error(`❌ Failed: ${topic.title}`, error);
    }
  }

  console.log("\n✅ Done!");
  console.log(`Total posts: ${getGeneratedSlugs().size}`);
}

main().catch(console.error);
