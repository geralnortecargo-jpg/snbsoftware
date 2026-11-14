import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "./WhatsAppButton";

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
      <head>
        {/* Etiqueta Google Ads */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18573086971"
        />
        <Script
          id="google-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18573086971');
            `,
          }}
        />

        {/* Fragmento de Conversão (Enviar formulário de leads) */}
        <Script
          id="google-conversion-snippet"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18573086971/7dYVCIix17cdEPuhq5hF',
                  'value': 1.0,
                  'currency': 'EUR',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}