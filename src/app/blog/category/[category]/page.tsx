import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory, categories } from "@/lib/blog";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};

  return {
    title: `${cat.name} Guides | Expat Bro`,
    description: `Everything you need to know about ${cat.name.toLowerCase()} when moving to Latin America.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const posts = getPostsByCategory(category);

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{cat.name}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Guides and tips on {cat.name.toLowerCase()} for expats in Latin America.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition group"
                >
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span>{post.country}</span>
                    {post.city && (
                      <>
                        <span>•</span>
                        <span>{post.city}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-amber-400 transition mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">{post.description}</p>
                  <div className="mt-4 text-xs text-slate-500">{post.readingTime} min read</div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 text-xl mb-8">
                Content for this category coming soon.
              </p>
              <Link
                href="/blog"
                className="text-amber-400 hover:text-amber-300"
              >
                ← Browse all posts
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You Need?</h2>
          <p className="text-slate-300 mb-8">Book a call and get personalized answers.</p>
          <a
            href="https://calendly.com/dan-thomson/consult"
            target="_blank"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Book a Strategy Call — $150
          </a>
        </div>
      </section>
    </div>
  );
}
