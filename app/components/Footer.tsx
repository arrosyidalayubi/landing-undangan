import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Info Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black text-white tracking-tight mb-4 inline-block">
              Undang.in
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Platform pembuatan undangan pernikahan digital terbaik di Indonesia. Sebarkan kabar bahagiamu dengan desain elegan, cepat, dan ramah lingkungan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">TW</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">FB</a>
            </div>
          </div>

          {/* Link Produk */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Produk</h4>
            <ul className="space-y-3">
              <li><Link href="#fitur" className="hover:text-white transition-colors">Fitur Unggulan</Link></li>
              <li><Link href="#tema" className="hover:text-white transition-colors">Katalog Desain</Link></li>
              <li><Link href="#harga" className="hover:text-white transition-colors">Harga Paket</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Blog</Link></li>
              <li><Link href="https://app.komfakdish.web.id/register" className="hover:text-white transition-colors">Buat Undangan</Link></li>
            </ul>
          </div>

          {/* Link Bantuan */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Bantuan</h4>
            <ul className="space-y-3">
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Undang.in. Hak Cipta Dilindungi.</p>
          <p>Dibuat dengan ❤️ di Tangerang Selatan</p>
        </div>

      </div>
    </footer>
  );
}