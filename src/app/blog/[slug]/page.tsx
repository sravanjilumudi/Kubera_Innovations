import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPostById, getRelatedPosts } from '@/data/blog'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostById(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | Kubera Innovations Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostById(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id, post.category)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-mono-green-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <header className="mb-12">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-mono-green-50 text-mono-green-700 text-sm font-medium border border-mono-green-200">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Coming Soon Notice */}
          <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-mono-green-50 to-white border border-mono-green-100">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mono-green-100 flex items-center justify-center">
                <Tag className="w-8 h-8 text-mono-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Full Article Coming Soon
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We&apos;re working on the complete article. Subscribe to our newsletter or contact us to be notified when it&apos;s ready.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-mono-green-500 hover:bg-mono-green-600 text-white font-medium rounded-lg transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-mono-green-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-mono-green-500" />
                    <span className="text-mono-green-600 text-sm font-medium">{relatedPost.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-mono-green-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Explore our services or get in touch with our engineering team to discuss your project requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#services" className="btn-primary">
              Our Services
            </Link>
            <Link href="#contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
