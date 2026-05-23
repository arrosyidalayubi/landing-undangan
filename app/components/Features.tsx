const FEATURES = [
  {
    icon: '💌',
    title: 'RSVP & Buku Tamu Real-time',
    desc: 'Pantau kehadiran tamu dan baca ucapan doa restu secara langsung dari dashboard canggih Anda.'
  },
  {
    icon: '🎨',
    title: 'Desain Premium & Fleksibel',
    desc: 'Pilih dari berbagai katalog tema eksklusif. Ganti tema kapan saja tanpa khawatir data hilang.'
  },
  {
    icon: '🖼️',
    title: 'Galeri Foto Tanpa Batas',
    desc: 'Ceritakan kisah cinta Anda melalui foto pre-wedding dengan resolusi tinggi dan tata letak elegan.'
  },
  {
    icon: '🗺️',
    title: 'Navigasi Pintar & Auto-Music',
    desc: 'Bantu tamu menemukan lokasi acara dengan integrasi Google Maps dan iringan musik romantis otomatis.'
  }
];

export default function Features() {
  return (
    <section id="fitur" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Seksi Fitur */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Kenapa Memilih Undang.in?</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-6">Semua yang Anda butuhkan untuk undangan yang sempurna.</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">Tinggalkan cara lama. Beralih ke undangan digital yang ramah lingkungan, efisien, dan penuh kesan mendalam.</p>
        </div>

        {/* Grid Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}