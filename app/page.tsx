"use client";

import { useState, useEffect } from "react";
import { projectsData } from "./data/projects";

// Carrossel de desenvolvimento web
function WebDevCarousel() {
  const images = [
    { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", title: "Clean Code & Next.js" },
    { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", title: "Frontend Avançado" },
    { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", title: "Aplicações Responsivas" },
    { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop", title: "Soluções por Medida" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg border border-slate-700">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-900/90 backdrop-blur border border-slate-700 flex justify-between items-center">
            <span className="text-xs font-mono text-slate-200">{img.title}</span>
            <div className="flex gap-1">
              {images.map((_, i) => (
                <span key={i} className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "w-4 bg-white" : "w-1.5 bg-slate-600"}`}></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Efeito de Splash Screen (Mostra o logótipo sozinho durante 1.6 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  const phrases = [
    "Fazemos a sua página simples",
    "Projetos pequenos sob medida",
    "Contacte-nos para todo o tipo de projetos",
    "Transformo ideias em software de alta performance"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Se estiver no estado de carregamento inicial, exibe o ecrã de intro com o PNG
  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center gap-5 z-50">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-2xl p-2 animate-pulse">
          <img 
            src="/logo.png" 
            alt="SNB Logo" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-black tracking-widest text-white uppercase">
            SNB
          </span>
          <span className="text-xs text-slate-400 tracking-wider uppercase font-mono">
            Software Norte Build
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-between p-4 md:p-12 overflow-x-hidden">
      
      {/* LOGÓTIPO DE FUNDO CENTRALIZADO */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src="/logo.png" 
          alt="SNB Background Logo" 
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-contain opacity-30 rounded-full blur-[0.3px]"
        />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-8">
        
        {/* NAVBAR */}
        <header className="w-full flex justify-between items-center py-4 px-6 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="SNB" className="h-10 w-10 rounded-xl object-cover border border-slate-700" />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-wider text-white">SNB</span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase">Desenvolvimento Web</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#projetos" className="hover:text-white transition-colors">Portefólio</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <a href="#contacto" className="bg-slate-200 hover:bg-white text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow">
            Pedir Orçamento
          </a>
        </header>

        {/* HERO SECTION */}
        <section className="w-full flex flex-col items-center text-center gap-6 p-8 md:p-16 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-2xl">
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950 text-slate-300 border border-slate-800">
            Desenvolvimento Web & Soluções Digitais
          </div>

          <div className="h-24 md:h-28 flex items-center justify-center max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              {phrases[currentPhraseIndex]}
            </h1>
          </div>

          <div className="flex gap-2">
            {phrases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPhraseIndex(idx)}
                className={`h-2 rounded-full transition-all ${currentPhraseIndex === idx ? "w-8 bg-white" : "w-2 bg-slate-700"}`}
              />
            ))}
          </div>

          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            Especialista em criar lojas online, portais automóveis e aplicações à medida em Next.js para destacar o teu negócio.
          </p>

          <div className="flex gap-4 pt-2">
            <a href="#projetos" className="bg-slate-200 hover:bg-white text-slate-950 font-bold px-8 py-3 rounded-xl transition-all shadow">
              Ver Portefólio
            </a>
            <a href="#contacto" className="border border-slate-700 hover:border-slate-500 bg-slate-900 text-slate-200 font-medium px-8 py-3 rounded-xl transition-all">
              Falar Comigo
            </a>
          </div>
        </section>

        {/* SECÇÃO DE APRESENTAÇÃO & ESPECIALIDADES */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-2xl">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">O Nosso Processo & Especialidades</span>
            <h2 className="text-2xl md:text-4xl font-black text-white">Desenvolvimento Web Moderno sob Medida</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Na <strong className="text-white">SNB - Software Norte Build</strong>, construímos plataformas digitais robustas, rápidas e focadas na conversão do teu cliente.
            </p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              E-Commerce completo, portais para stands de automóveis e aplicações web exclusivas desenhadas a pensar no desempenho.
            </p>
          </div>

          <div className="lg:col-span-5 w-full">
            <WebDevCarousel />
          </div>
        </section>

        {/* SECÇÃO DE SERVIÇOS E PROJETOS QUE FAZEMOS */}
        <section id="servicos" className="w-full p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-2xl flex flex-col gap-8">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Os Nossos Serviços & Soluções</span>
            <h2 className="text-2xl md:text-4xl font-black text-white">Projectos que Fazemos</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Construímos soluções digitais feitas à medida exata das tuas necessidades. Para garantirmos que cada detalhe vai de encontro ao que imaginas, agendamos uma reunião inicial onde definimos todos os pormenores do projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">📄 Landing Pages (Página Única)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Páginas web de alta conversão, rápidas e focadas num único objetivo — ideal para campanhas, produtos específicos ou apresentação rápida de serviços.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">🏢 Site Empresarial</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Plataformas institucionais completas que funcionam como o cartão de visita digital da tua empresa, transmitindo autoridade e profissionalismo aos teus clientes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">🛒 E-commerce (Lojas Online)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Lojas virtuais seguras e intuitivas, equipadas com gestão de produtos, catálogos e integração com os principais métodos de pagamento (como MB WAY, Multibanco e Stripe).
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">⚙️ Sistema Corporativo</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Aplicações web exclusivas e automatizadas, desenhadas de raiz para otimizar os processos internos, a gestão e o fluxo de trabalho do teu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* GRELHA DE PROJETOS EM DESTAQUE */}
        <div id="projetos" className="w-full flex flex-col gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold tracking-tight mb-1 text-white">Projetos em Destaque</h3>
            <p className="text-slate-400 text-sm">Alguns exemplos reais do nosso trabalho entregue a clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <a 
                key={project.id}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-6 hover:border-slate-500 transition-all duration-300 flex flex-col justify-between shadow-xl block"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950 text-slate-300 border border-slate-800">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      {project.client} <span className="text-slate-200 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full h-40 rounded-xl border border-slate-800 overflow-hidden relative bg-slate-950">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 font-mono">
                        [ Visitar: {project.title} ]
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CONTACTO */}
        <section id="contacto" className="w-full max-w-4xl my-8 p-10 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Tens um projeto em mente?</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8">
            Vamos transformar a tua ideia em realidade digital. Envia mensagem e daremos andamento ao teu orçamento personalizado.
          </p>
          <a href="mailto:contacto@snb.pt" className="inline-block bg-slate-200 hover:bg-white text-slate-950 font-bold px-8 py-3 rounded-xl transition-all shadow">
            Enviar E-mail Direto
          </a>
        </section>

        {/* RODAPÉ */}
        <footer className="w-full text-center py-6 border-t border-slate-900 text-xs text-slate-500">
          <p>© 2026 SNB - Software Norte Build. Todos os direitos reservados.</p>
        </footer>

      </div>
    </div>
  );
}

<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NF45B7ZF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
</script>