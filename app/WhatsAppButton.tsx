import React from 'react';
import { MessageCircle } from 'lucide-react'; // Ou podes usar um SVG do WhatsApp

export default function WhatsAppButton() {
  // Substitui pelo teu número de telemóvel no formato internacional (ex: 351912345678)
  const phoneNumber = '351965531009'; 
  const message = encodeURIComponent('Olá! Gostaria de falar sobre um projeto de desenvolvimento web.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.956.544 3.791 1.488 5.372L2 22l4.787-1.458c1.52.926 3.328 1.458 5.244 1.458 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.581 0-3.08-.432-4.385-1.189l-.314-.188-3.23.984.991-3.149-.204-.328c-.85-1.371-1.31-2.981-1.31-4.631 0-4.693 3.818-8.511 8.512-8.511s8.511 3.818 8.511 8.511-3.818 8.512-8.511 8.512zm4.67-6.381c-.256-.128-1.516-.748-1.751-.834-.236-.086-.408-.128-.579.128-.17.256-.664.834-.813 1.005-.15.17-.298.192-.554.064-.256-.128-1.08-.398-2.057-1.27-.761-.678-1.275-1.514-1.424-1.77-.15-.256-.016-.395.112-.523.115-.115.256-.298.384-.447.128-.15.17-.256.256-.427.085-.17.043-.32-.021-.447-.064-.128-.579-1.396-.795-1.912-.21-.504-.424-.436-.579-.444l-.495-.01c-.17 0-.447.064-.682.32-.236.256-.897.876-.897 2.136 0 1.26 0.92 2.481 1.048 2.652.128.17 1.81 2.764 4.384 3.876.613.264 1.092.422 1.465.541.615.196 1.176.168 1.621.102.495-.074 1.516-.62 1.73-1.219.214-.599.214-1.113.15-1.219-.064-.106-.234-.17-.49-.298z"/>
      </svg>
      {/* Tooltip opcional ao passar o rato */}
      <span className="absolute right-16 bg-zinc-900 text-zinc-100 text-xs px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-zinc-800">
        Fale connosco!
      </span>
    </a>
  );
}