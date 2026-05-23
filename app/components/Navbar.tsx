import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black text-indigo-600 tracking-tight">
              Undang.in
            </Link>
          </div>

          {/* Menu Tengah (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link href="#fitur" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Fitur</Link>
            <Link href="#tema" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Katalog Tema</Link>
            <Link href="#harga" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Harga</Link>
            <Link href="#faq" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">FAQ</Link>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://dashboard.undangin.com/login" // Nanti disesuaikan dengan URL dashboard aslimu
              className="hidden sm:block text-slate-600 hover:text-indigo-600 font-bold transition-colors"
            >
              Masuk
            </Link>
            <Link 
              href="https://dashboard.undangin.com/register" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              Buat Undangan
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}