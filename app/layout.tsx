import type { Metadata } from "next";
import { Syne, Figtree } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./WhatsAppButton";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SNB Software — Sites, Apps e Tráfego Pago",
  description:
    "SNB Software Norte Build: desenvolvimento web e gestão de tráfego pago (Meta Ads) para trazer clientes ao teu negócio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-NF45B7ZF"
        />
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
      <body className="min-h-screen antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
