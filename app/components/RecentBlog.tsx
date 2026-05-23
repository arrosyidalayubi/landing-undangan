import Link from 'next/link';
import { getAllPosts } from '../utils/blog';

export default function RecentBlog() {
  // Hanya ambil 3 artikel paling baru saja untuk diletakkan di homepage
  const recentPosts = getAllPosts().slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Edukasi & Artikel</h2>
            <h3 className="text-3xl md:text-4xl font-black">Tulisan Terbaru dari Blog Kami.</h3>
          </div>
          <Link href="/blog" className="bg-white hover:bg-slate-100 text-indigo-600 border border-slate-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all text-sm whitespace-nowrap">
            Lihat Semua Artikel →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.slug} className="dark:text-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">{new Date(post.date).toLocaleDateString('id-ID')}</p>
                  <h4 className="text-lg font-bold mb-2 hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">{post.description}</p>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1">
                  Baca Artikel <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}