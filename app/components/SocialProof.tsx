export default function SocialProof() {
  return (
    <section className="py-12 border-b border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
          Dipercaya oleh 5.000+ Pasangan Bahagia di Seluruh Indonesia
        </p>
        
        {/* Deretan "Logo" Rekanan (Menggunakan teks bergaya sebagai placeholder) */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-black font-serif tracking-tighter">Bridestory</div>
          <div className="text-2xl font-black font-sans tracking-widest uppercase">Weddingku</div>
          <div className="text-2xl font-black font-mono">TheBrideDept</div>
          <div className="text-2xl font-bold font-serif italic">VOWS & Co.</div>
        </div>
      </div>
    </section>
  );
}