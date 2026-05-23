"use client";

import { useState } from 'react';

const FAQS = [
  {
    question: "Berapa lama masa aktif undangan digital ini?",
    answer: "Undangan Anda akan aktif selamanya tanpa batasan waktu! Anda bisa menyimpannya sebagai kenang-kenangan digital seumur hidup."
  },
  {
    question: "Apakah saya bisa mengganti tema setelah membayar?",
    answer: "Tentu saja! Anda memiliki akses bebas untuk berganti tema kapan saja melalui dashboard, dan data Anda akan otomatis menyesuaikan dengan desain yang baru tanpa hilang."
  },
  {
    question: "Apakah tamu perlu mengunduh aplikasi khusus?",
    answer: "Sama sekali tidak. Undangan berbentuk tautan (link) website yang bisa dibuka langsung melalui browser di HP, tablet, maupun laptop apa saja."
  },
  {
    question: "Bagaimana cara kerja fitur RSVP dan Buku Tamu?",
    answer: "Tamu dapat mengisi form kehadiran dan ucapan langsung di halaman undangan. Data tersebut akan otomatis masuk ke tabel RSVP di dashboard Anda secara real-time, dan bisa diekspor ke Excel."
  },
  {
    question: "Apakah bisa menggunakan nama domain sendiri (Custom Domain)?",
    answer: "Untuk saat ini, undangan menggunakan format link undangin.com/nama-pasangan. Fitur custom domain sedang dalam tahap pengembangan untuk pembaruan berikutnya!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Tanya Jawab</h2>
          <h3 className="text-3xl font-black mb-4">Pertanyaan yang Sering Diajukan</h3>
          <p className="text-slate-600">Masih ragu? Temukan jawaban dari pertanyaan yang sering ditanyakan oleh klien kami.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
                <span className={`text-indigo-500 font-bold text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}