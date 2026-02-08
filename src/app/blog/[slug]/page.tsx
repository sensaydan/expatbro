import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPost, getPostsByCountry } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Expat Bro`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getPostsByCountry(post.country)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-slate-800/50 py-3">
        <div className="max-w-4xl mx-auto px-4 text-sm">
          <Link href="/" className="text-slate-400 hover:text-amber-400">
            Home
          </Link>
          <span className="text-slate-600 mx-2">/</span>
          <Link href="/blog" className="text-slate-400 hover:text-amber-400">
            Blog
          </Link>
          <span className="text-slate-600 mx-2">/</span>
          <span className="text-white">{post.title.slice(0, 40)}...</span>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
              <Link
                href={`/${post.country.toLowerCase()}`}
                className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full transition"
              >
                {post.country}
              </Link>
              {post.city && (
                <Link
                  href={`/${post.country.toLowerCase()}/${post.city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full transition"
                >
                  {post.city}
                </Link>
              )}
              <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-slate-400 mb-6">{post.description}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { dateStyle: "long" })}</span>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-amber-400 prose-strong:text-white prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800 text-slate-400 text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-amber-900/30 to-slate-800 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Want Personalized Advice?</h3>
            <p className="text-slate-300 mb-6">
              Get your specific questions answered in a 30-minute strategy call.
            </p>
            <a
              href="https://calendly.com/dan-thomson/consult"
              target="_blank"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded-lg transition"
            >
              Book a Call — $150
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">More About {post.country}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition group"
                >
                  <h3 className="font-bold group-hover:text-amber-400 transition mb-2">
                    {related.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
