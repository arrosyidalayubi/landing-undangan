import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../app/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// PENGATURAN SEO & OPEN GRAPH GLOBAL
export const metadata: Metadata = {
  title: "Undang.in - Undangan Pernikahan Digital Elegan & Instan",
  description: "Buat undangan pernikahan digital premium dalam hitungan menit. Kelola RSVP, daftar tamu tanpa batas, galeri foto, dan musik otomatis.",
  keywords: ["undangan digital", "undangan pernikahan online", "buat undangan gratis", "wedding invitation website"],
  authors: [{ name: "Undang.in Team" }],
  openGraph: {
    title: "Undang.in - Undangan Pernikahan Digital Elegan",
    description: "Buat undangan pernikahan digital premium dalam hitungan menit. Instan, mudah, dan mewah.",
    url: "https://undangin.com",
    siteName: "Undang.in",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Taruh foto mockup web kamu di folder public/images/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Undang.in Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undang.in - Undangan Pernikahan Digital",
    description: "Sebarkan kabar bahagiamu dengan undangan digital elegan.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}