import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SNB | Software Norte Build",
  description: "Desenvolvimento Web & Soluções Digitais de Alta Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}