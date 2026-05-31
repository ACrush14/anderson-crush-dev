// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogData';
import Image from 'next/image';
import type { Metadata } from 'next';
import ReadingProgress from '@/components/ReadingProgress';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post não encontrado' };
  return {
    title: `${post.title} | Anderson Crush`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

// Calcula tempo de leitura estimado (~200 palavras/min)
function readingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min de leitura`;
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const timeToRead = readingTime(post.content);

  return (
    <main className="min-h-screen bg-black text-gray-200">

      {/* Header com barra de progresso (Client Component) */}
      <ReadingProgress title={post.title} />

      {/* Hero — imagem de capa em tela cheia com gradiente */}
      <div className="relative w-full h-[55vh] min-h-[340px] mt-[49px]">
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradiente para preto */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
          </>
        ) : (
          /* Sem imagem: fundo com grid de pontos */
          <div className="absolute inset-0 bg-[radial-gradient(circle,#22C55E10_1px,transparent_1px)] bg-[length:28px_28px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
          </div>
        )}

        {/* Título sobre o hero */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container mx-auto px-6 pb-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4 font-mono text-xs text-gray-400 uppercase tracking-widest">
              <span className="text-[#22C55E]">{post.author}</span>
              <span className="text-gray-700">·</span>
              <time>{post.date}</time>
              <span className="text-gray-700">·</span>
              <span>{timeToRead}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Linha divisória com glow */}
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#22C55E] to-transparent mb-12 shadow-[0_0_12px_rgba(34,197,94,0.4)]" />
      </div>

      {/* Corpo do artigo */}
      <article className="container mx-auto px-6 pb-24 max-w-3xl">
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Rodapé do artigo */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#22C55E] flex items-center justify-center font-bold text-black font-heading text-sm">
              AC
            </div>
            <div>
              <p className="text-white font-bold text-sm">{post.author}</p>
              <p className="text-gray-500 text-xs font-mono">Desenvolvedor Full Stack</p>
            </div>
          </div>
          <a
            href="/#blog"
            className="text-[#22C55E] font-mono text-sm border border-[#22C55E]/30 px-4 py-2 hover:bg-[#22C55E]/10 transition-colors"
          >
            ← Mais posts
          </a>
        </div>
      </article>

    </main>
  );
}
