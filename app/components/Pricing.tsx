import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="harga" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Paket Harga</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Investasi Kecil, Memori Abadi.</h3>
          <p className="text-lg text-slate-600">Mulai secara gratis, atau tingkatkan ke paket premium untuk fitur eksklusif tanpa batas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Paket Basic (Gratis) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Basic</h4>
            <p className="text-slate-500 mb-6">Cocok untuk undangan sederhana yang elegan.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-slate-900">Rp0</span>
              <span className="text-slate-500 font-medium"> / selamanya</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-slate-600"><span className="text-emerald-500">✔️</span> Tema standar (Sage & Minimalist)</li>
              <li className="flex items-center gap-3 text-slate-600"><span className="text-emerald-500">✔️</span> Buku Tamu & RSVP (Maks 50)</li>
              <li className="flex items-center gap-3 text-slate-600"><span className="text-emerald-500">✔️</span> Link Google Maps</li>
              <li className="flex items-center gap-3 text-slate-400 opacity-60"><span className="text-slate-300">✖️</span> Galeri Foto Pre-wedding</li>
              <li className="flex items-center gap-3 text-slate-400 opacity-60"><span className="text-slate-300">✖️</span> Auto-play Musik Latar</li>
              <li className="flex items-center gap-3 text-slate-400 opacity-60"><span className="text-slate-300">✖️</span> Unduh Data RSVP (Excel)</li>
            </ul>
            
            <Link href="https://dashboard.undangin.com/register" className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-4 rounded-xl transition-colors">
              Mulai Gratis
            </Link>
          </div>

          {/* Paket Premium (Highlighted) */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-indigo-500 relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-indigo-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              PALING POPULER
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-2">Premium</h4>
            <p className="text-slate-400 mb-6">Fitur tak terbatas untuk pernikahan impian.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">Rp99<span className="text-2xl">.000</span></span>
              <span className="text-slate-400 font-medium"> / acara</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-slate-200"><span className="text-indigo-400">✔️</span> <b>Semua Tema Premium</b> (Navy, Gold, dll)</li>
              <li className="flex items-center gap-3 text-slate-200"><span className="text-indigo-400">✔️</span> Buku Tamu & RSVP <b>Tanpa Batas</b></li>
              <li className="flex items-center gap-3 text-slate-200"><span className="text-indigo-400">✔️</span> Galeri Foto Pre-wedding (Cloud R2)</li>
              <li className="flex items-center gap-3 text-slate-200"><span className="text-indigo-400">✔️</span> Kustomisasi Musik Latar</li>
              <li className="flex items-center gap-3 text-slate-200"><span className="text-indigo-400">✔️</span> Ekspor Data Tamu ke Excel/CSV</li>
              <li className="flex items-center gap-3 text-slate-200"><span className="text-indigo-400">✔️</span> Prioritas Bantuan Pelanggan</li>
            </ul>
            
            <Link href="https://dashboard.undangin.com/register?plan=premium" className="w-full text-center bg-linear-to-r from-indigo-600 to-rose-500 hover:from-indigo-500 hover:to-rose-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
              Upgrade ke Premium
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}