const CATALOG = [
  { 
    id: 'sage', 
    name: 'Sage Serenity', 
    desc: 'Nuansa hijau sage yang klasik dan menenangkan dengan tipografi serif elegan.',
    imgUrl: 'https://placehold.co/400x600/E7F0DC/597445?text=Sage+Serenity',
    color: '#597445'
  },
  { 
    id: 'minimalist', 
    name: 'Pure Minimalist', 
    desc: 'Desain monokrom modern yang bersih, fokus pada tipografi tebal dan ruang kosong.',
    imgUrl: 'https://placehold.co/400x600/F1F1F1/1A1A1A?text=Minimalist',
    color: '#1A1A1A'
  },
  { 
    id: 'navy', 
    name: 'Royal Navy', 
    desc: 'Tampilan premium dengan warna biru gelap dan aksen teks emas yang mewah.',
    imgUrl: 'https://placehold.co/400x600/0A1D56/ECEE81?text=Royal+Navy',
    badge: 'Premium',
    color: '#0A1D56'
  },
  { 
    id: 'gold', 
    name: 'Midnight Gold', 
    desc: 'Desain eksklusif serba hitam dengan sentuhan elemen emas yang sangat elegan.',
    imgUrl: 'https://placehold.co/400x600/121212/D4AF37?text=Midnight+Gold',
    badge: 'Premium',
    color: '#D4AF37'
  }
];

export default function ThemeCatalog() {
  return (
    <section id="tema" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Katalog Tema</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-6">Desain Mewah untuk Momen Bersejarah.</h3>
          <p className="text-lg text-slate-600">Pilih template yang paling mencerminkan kepribadian Anda dan pasangan. Data akan otomatis menyesuaikan dengan desain yang dipilih.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATALOG.map((theme) => (
            <div key={theme.id} className="group cursor-pointer">
              <div className="relative aspect-2/3 rounded-3xl overflow-hidden shadow-md border border-slate-200 mb-6 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                {theme.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {theme.badge}
                  </div>
                )}
                <img src={theme.imgUrl} alt={theme.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.color }}></div>
                <h4 className="text-xl font-bold text-slate-900">{theme.name}</h4>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{theme.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}