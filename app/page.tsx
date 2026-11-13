"use client";

import { useState, useEffect } from "react";
import { projectsData } from "./data/projects";

// Componente do Carrossel Dinâmico de Imagens de Desenvolvimento Web
function WebDevCarousel() {
  const images = [
    { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", title: "Clean Code & Arquitetura Next.js" },
    { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", title: "Desenvolvimento Frontend Avançado" },
    { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", title: "Aplicações Web Modernas & Responsivas" },
    { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop", title: "Soluções Digitais por Medida" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-lg border border-zinc-700/50 flex justify-between items-center shadow-lg">
            <span className="text-xs font-mono text-zinc-100">⚡ {img.title}</span>
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <span 
                  key={i} 
                  className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-5 bg-cyan-400" : "w-2 bg-zinc-700"}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const phrases = [
    "Fazemos a sua página simples",
    "Projetos pequenos sob medida",
    "Contacte-nos para todo o tipo de projetos",
    "Transformo ideias em software de alta performance"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="relative min-h-screen bg-slate-600 text-zinc-100 flex flex-col items-center justify-between p-4 md:p-12 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* LOGÓTIPO DE FUNDO POSICIONADO NO TOPO ENTRE A NAVBAR E O HERO */}
      <div className="fixed top-24 inset-x-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img 
          src="/logo.jpg" 
          alt="SNB Background Logo" 
          className="w-[280px] h-[140px] md:w-[450px] md:h-[220px] object-contain opacity-35 rounded-2xl blur-[0.3px] shadow-2xl"
        />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-between">
        
        {/* Cabeçalho / Navbar */}
        <header className="w-full flex justify-between items-center py-4 px-6 rounded-2xl border border-slate-500/40 bg-slate-700/60 backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="SNB - Software Norte Build" 
              className="h-10 w-10 rounded-xl object-cover border border-cyan-500/30 shadow-md"
            />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-wider text-cyan-300 leading-none">
                SNB
              </span>
              <span className="text-[10px] text-slate-200 tracking-widest uppercase">
                Desenvolvimento Web
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-200">
            <a href="#projetos" className="hover:text-cyan-300 transition-colors">Portefólio</a>
            <a href="#servicos" className="hover:text-cyan-300 transition-colors">Serviços</a>
            <a href="#contacto" className="hover:text-cyan-300 transition-colors">Contacto</a>
          </nav>

          <a 
            href="#contacto" 
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
          >
            Pedir Orçamento
          </a>
        </header>

        {/* Hero Section */}
        <section className="w-full flex flex-col items-center text-center gap-6 mt-12 mb-16 p-8 md:p-14 rounded-3xl border border-slate-500/40 bg-slate-700/50 backdrop-blur-2xl shadow-2xl min-h-[360px] justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-cyan-300 border border-cyan-500/30">
            Desenvolvimento Web & Soluções Digitais
          </div>

          <div className="h-28 md:h-32 flex items-center justify-center max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white transition-all duration-700 leading-tight">
              <span className="text-cyan-300">{phrases[currentPhraseIndex]}</span>
            </h1>
          </div>

          <div className="flex gap-2.5 my-2">
            {phrases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPhraseIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPhraseIndex === idx ? "w-10 bg-cyan-400" : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Ir para frase ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-slate-200 text-sm md:text-base max-w-xl font-medium">
            Especialista em criar lojas online, portais automóveis e aplicações à medida em Next.js para destacar o teu negócio.
          </p>

          <div className="flex gap-4 pt-3">
            <a 
              href="#projetos" 
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-9 py-3.5 rounded-xl transition-all shadow-xl"
            >
              Ver Portefólio
            </a>
            <a 
              href="#contacto" 
              className="border-2 border-slate-400 hover:border-slate-200 bg-slate-700/60 text-slate-100 font-bold px-9 py-3.5 rounded-xl transition-all"
            >
              Falar Comigo
            </a>
          </div>
        </section>

        {/* Secção de Apresentação & Projetos */}
        <section id="projetos" className="w-full my-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 p-8 rounded-3xl border border-slate-500/40 bg-slate-700/50 backdrop-blur-2xl shadow-2xl">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-cyan-300 font-extrabold">
                O Nosso Processo & Especialidades
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white leading-tight">
                Desenvolvimento Web Moderno sob Medida
              </h2>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
                Na <strong className="text-cyan-300 font-semibold">SNB - Software Norte Build</strong>, construímos plataformas digitais robustas, rápidas e focadas na conversão do teu cliente.
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Quer se trate de um <strong>E-Commerce completo</strong> com sistemas de pagamento locais (MB WAY, Multibanco e Stripe), portais para <strong>stands de automóveis</strong> com motores de busca e filtros em tempo real, ou aplicações web exclusivas, desenhamos cada linha de código a pensar no desempenho e no crescimento do teu negócio.
              </p>
            </div>

            <div className="lg:col-span-5 w-full bg-slate-900 border border-cyan-500/30 rounded-2xl p-3.5 shadow-xl overflow-hidden relative">
              <WebDevCarousel />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start mb-10">
            <h3 className="text-2xl font-black tracking-tight mb-1 text-white">Projetos em Destaque</h3>
            <p className="text-slate-300 text-sm font-medium">Alguns exemplos reais do nosso trabalho entregue a clientes.</p>
          </div>

          {/* Grelha de Projetos Clicáveis com Imagem Real */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <a 
                key={project.id}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-slate-500/40 bg-slate-700/60 backdrop-blur-2xl p-6 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between shadow-2xl cursor-pointer block"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-cyan-300 border border-cyan-500/20 shadow-inner">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                      {project.client} 
                      <span className="text-cyan-300 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-600 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full h-44 rounded-xl border border-slate-600 overflow-hidden relative group-hover:border-cyan-400 transition-colors bg-slate-950 shadow-inner">
                    <div className="w-full h-5 bg-slate-800 border-b border-slate-700 flex items-center gap-1 px-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                    </div>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-[calc(100%-1.25rem)] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-[calc(100%-1.25rem)] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
                        <span className="text-xs text-slate-300 font-mono">
                          [ Visitar: {project.title} ]
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="w-full max-w-4xl my-12 p-10 rounded-3xl border border-cyan-500/30 bg-slate-700/50 backdrop-blur-2xl text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-white">Tens um projeto em mente?</h2>
          <p className="text-slate-200 text-sm md:text-base max-w-lg mx-auto mb-10 font-medium">
            Vamos transformar a tua ideia em realidade digital. Envia mensagem e daremos andamento ao teu orçamento personalizado.
          </p>
          <a 
            href="mailto:contacto@snb.pt" 
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-10 py-4 rounded-xl transition-all shadow-xl text-sm"
          >
            Enviar E-mail Direto
          </a>
        </section>

        {/* Rodapé */}
        <footer className="w-full text-center py-8 border-t border-slate-500/40 text-xs text-slate-300 mt-8">
          <p>© 2026 SNB - Software Norte Build. Todos os direitos reservados.</p>
        </footer>

      </div>
    </div>
  );
}