import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllPosts, getPostData } from '../../utils/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// PERBAIKAN: Ubah definisi tipe Props untuk Next.js App Router terbaru
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  // PERBAIKAN: Await params sebelum mengakses slug
  const resolvedParams = await params;
  
  try {
    const post = await getPostData(resolvedParams.slug);
    return {
      title: `${post.title} - Undang.in Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        images: [{ url: post.thumbnail }],
      },
    };
  } catch {
    return { title: 'Blog Tidak Ditemukan' };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  // PERBAIKAN: Await params sebelum mengakses slug
  const resolvedParams = await params;
  
  let post;
  try {
    post = await getPostData(resolvedParams.slug);
  } catch {
    // Tangani jika file .md tidak ditemukan
    notFound(); 
  }

  return (
    <main className="min-h-screen text-slate-900 dark:text-white dark:bg-slate-950 bg-slate-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <Link href="/blog" className="text-sm font-bold text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1 mb-8">
          <span>←</span> Kembali ke Blog
        </Link>

        <header className="mb-10">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
            Diterbitkan pada {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
            {post.description}
          </p>
        </header>

        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-md border border-slate-100 mb-12">
          <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <article 
          className="prose prose-indigo max-w-none text-slate-800 leading-relaxed space-y-6
            prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-h2:text-2xl prose-h3:text-xl prose-p:text-base
            prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />

      </div>
      <Footer />
    </main>
  );
}