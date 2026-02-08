import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, categories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Expat Bro - Living in Latin America",
  description:
    "Real talk on moving to Mexico, Colombia, Venezuela & Brazil. Guides, tips, and insider knowledge from someone who's actually lived there.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);
  const recentPosts = posts.slice(3, 15);

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Real advice on living in Latin America. No fluff, no &quot;influencer&quot; BS — just
            what actually works.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="bg-slate-700 hover:bg-amber-500/20 hover:text-amber-400 text-slate-300 text-sm px-4 py-2 rounded-full transition"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition group"
                >
                  <div className="h-40 bg-gradient-to-br from-amber-500/20 to-slate-700" />
                  <div className="p-6">
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
                    <div className="mt-4 text-xs text-slate-500">
                      {post.readingTime} min read
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition group"
                >
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-slate-700 px-2 py-1 rounded text-xs">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-amber-400 transition mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">{post.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {post.country}
                      {post.city && ` • ${post.city}`}
                    </span>
                    <span>{post.readingTime} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-slate-400 text-xl mb-8">
              Content coming soon. In the meantime, book a call to get your questions answered
              directly.
            </p>
            <a
              href="https://calendly.com/dan-thomson/consult"
              target="_blank"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg transition"
            >
              Book a Strategy Call
            </a>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Got Specific Questions?</h2>
          <p className="text-slate-300 mb-8">
            Skip the research. 30 minutes, all your questions answered.
          </p>
          <a
            href="https://calendly.com/dan-thomson/consult"
            target="_blank"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Book a Call — $150
          </a>
        </div>
      </section>
    </div>
  );
}
