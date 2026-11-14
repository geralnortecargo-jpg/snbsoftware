import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNB Software - Desenvolvimento Web e Aplicações à Medida",
  description: "Especialistas em Next.js, React, Landing Pages e Software de Gestão.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-NF45B7ZF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-NF45B7ZF');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-200 antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}