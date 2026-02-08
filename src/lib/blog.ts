import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  country: string;
  city?: string;
  category: string;
  tags: string[];
  image?: string;
  content: string;
  readingTime: number;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  country: string;
  city?: string;
  category: string;
  tags: string[];
  readingTime: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      country: data.country || "",
      city: data.city || undefined,
      category: data.category || "general",
      tags: data.tags || [],
      readingTime: calculateReadingTime(content),
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByCountry(country: string): BlogMeta[] {
  return getAllPosts().filter((post) => post.country.toLowerCase() === country.toLowerCase());
}

export function getPostsByCity(country: string, city: string): BlogMeta[] {
  return getAllPosts().filter(
    (post) =>
      post.country.toLowerCase() === country.toLowerCase() &&
      post.city?.toLowerCase() === city.toLowerCase()
  );
}

export function getPostsByCategory(category: string): BlogMeta[] {
  return getAllPosts().filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Dan Thomson",
    country: data.country || "",
    city: data.city || undefined,
    category: data.category || "general",
    tags: data.tags || [],
    image: data.image || undefined,
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export const categories = [
  { slug: "cost-of-living", name: "Cost of Living" },
  { slug: "neighborhoods", name: "Neighborhoods" },
  { slug: "visas", name: "Visas & Legal" },
  { slug: "dating", name: "Dating & Social" },
  { slug: "safety", name: "Safety" },
  { slug: "food", name: "Food & Dining" },
  { slug: "nightlife", name: "Nightlife" },
  { slug: "coworking", name: "Coworking & Remote Work" },
  { slug: "apartments", name: "Finding Apartments" },
  { slug: "banking", name: "Banking & Money" },
  { slug: "language", name: "Language Tips" },
  { slug: "culture", name: "Culture & Lifestyle" },
];
