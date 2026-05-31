// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogData';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// Gera as rotas estáticas para cada post
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Gera o <title> e <meta description> de cada post automaticamente
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post não encontrado' };
  return {
    title: `${post.title} | Anderson Crush`,
    description: post.description,
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-black text-gray-200">

      {/* Header fixo simples */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900 px-6 py-4">
        <Link
          href="/#blog"
          className="text-[#22C55E] font-mono text-sm hover:underline flex items-center gap-2"
        >
          ← Voltar ao Blog
        </Link>
      </div>

      <article className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">

        {/* Capa */}
        {post.image && (
          <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden border border-gray-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 font-mono text-xs text-gray-500 uppercase tracking-widest">
          <span className="text-[#22C55E]">{post.author}</span>
          <span>·</span>
          <time>{post.date}</time>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white font-heading mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Linha divisória */}
        <div className="w-16 h-[3px] bg-[#22C55E] mb-10" />

        {/* Corpo do post — renderiza o HTML do campo `content` */}
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </article>

    </main>
  );
}
