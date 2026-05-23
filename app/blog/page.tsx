import Link from 'next/link';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';
import { getAllPosts } from '../../app/utils/blog';

export const metadata = {
  title: "Blog & Edukasi Pernikahan - Undang.in",
  description: "Temukan tips seputar pernikahan, panduan memilih lagu undangan, tren desain, hingga manajemen RSVP di blog Undang.in.",
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen text-slate-900 dark:text-white dark:bg-slate-950 bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Inspirasi & Tips Pernikahan</h1>
            <p className="text-lg text-slate-600">Panduan lengkap untuk membantu Anda mempersiapkan hari bahagia dengan lebih santai dan teratur.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
                      {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-indigo-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">{post.description}</p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1">
                    Baca Selengkapnya <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}