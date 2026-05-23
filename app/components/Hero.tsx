import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden text-slate-900 dark:text-white dark:bg-slate-950 bg-slate-50">
      {/* Ornamen Latar Belakang (Gradient Blobs) */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 flex justify-center opacity-30 pointer-events-none">
        <div className="w-200 h-150 bg-linear-to-tr from-indigo-200 to-rose-100 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge Promo */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
          Platform Undangan Digital No. 1
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
          Sebarkan Kabar Bahagiamu <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-rose-500">
            Dalam Hitungan Menit.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Buat undangan pernikahan digital yang elegan, kelola daftar tamu, dan terima RSVP secara otomatis. Tanpa perlu keahlian coding.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link 
            href="https://dashboard.undangin.com/register"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Mulai Gratis Sekarang 🚀
          </Link>
          <Link 
            href="#tema"
            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Lihat Katalog Tema
          </Link>
        </div>

        {/* Mockup Preview Area */}
        <div className="relative mx-auto w-full max-w-4xl">
          <div className="rounded-3xl shadow-2xl border border-slate-200/50 bg-white/50 backdrop-blur-xl p-2 md:p-4 aspect-video flex items-center justify-center relative overflow-hidden">
            {/* Nanti di sini kita ganti dengan gambar atau video auto-play mockup undangan */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-100 to-transparent"></div>
            <div className="z-10 text-slate-400 font-medium flex flex-col items-center gap-4">
              <span className="text-6xl">📱</span>
              <p>Area Mockup Tampilan Undangan</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}