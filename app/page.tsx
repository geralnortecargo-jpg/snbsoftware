"use client";

import { useEffect, useState } from "react";
import { projectsData } from "./data/projects";

const WHATSAPP_TRAFEGO =
  "https://wa.me/351965531009?text=" +
  encodeURIComponent(
    "Olá SNB! Quero uma proposta de tráfego pago (Meta Ads) para o meu negócio."
  );

const packages = [
  {
    name: "Arranque",
    price: "desde 197€",
    period: "/mês",
    blurb: "Para validar anúncios e começar a receber contactos sem complicar.",
    points: [
      "1 campanha Meta Ads",
      "Criativos e textos",
      "Otimização semanal",
      "Relatório simples",
    ],
  },
  {
    name: "Crescimento",
    price: "desde 347€",
    period: "/mês",
    blurb: "Para quem já tem site e quer volume estável de leads ou vendas.",
    points: [
      "Até 3 campanhas",
      "Público + criativos em rotação",
      "Otimização 2×/semana",
      "Call mensal de resultados",
    ],
    featured: true,
  },
  {
    name: "Performance",
    price: "sob consulta",
    period: "",
    blurb: "Escala agressiva com orçamento maior e acompanhamento próximo.",
    points: [
      "Campanhas ilimitadas no acordo",
      "Landing pages se preciso",
      "Relatório e ajustes contínuos",
      "Prioridade no WhatsApp",
    ],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden surface-noise grain text-[var(--text)]">
      {/* subtle vertical light line */}
      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-0 z-0 h-[70vh] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)]/30 via-transparent to-transparent opacity-40"
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[rgba(7,7,8,0.88)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="group flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SNB"
              className="h-9 w-9 rounded-lg object-cover opacity-95 transition-opacity group-hover:opacity-100"
            />
            <div className="leading-none">
              <p className="font-display text-lg font-semibold tracking-[0.08em] text-[var(--text)]">
                SNB
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Software Norte Build
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <a href="#trafego" className="transition-colors hover:text-[var(--text)]">
              Tráfego pago
            </a>
            <a href="#projetos" className="transition-colors hover:text-[var(--text)]">
              Trabalho
            </a>
            <a href="#contacto" className="transition-colors hover:text-[var(--text)]">
              Contacto
            </a>
          </nav>

          <a
            href={WHATSAPP_TRAFEGO}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold tracking-wide text-[var(--ink)] transition-colors hover:bg-[var(--accent-deep)]"
          >
            Pedir proposta
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(7,7,8,0.96) 12%, rgba(7,7,8,0.55) 45%, rgba(7,7,8,0.35) 100%), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1800&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="mx-auto w-full max-w-6xl">
            <p className="reveal text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              SNB · Software Norte Build
            </p>
            <h1 className="reveal-delay font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--text)] md:text-6xl md:leading-[1.02]">
              Clientes novos.
              <br />
              Com anúncios que pagam.
            </h1>
            <p className="reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Montamos e gerimos tráfego pago no Meta Ads para o teu negócio
              receber contactos — sem teatro, com foco em resultado.
            </p>
            <div className="reveal-delay-2 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#trafego"
                className="rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--accent-deep)]"
              >
                Ver planos de tráfego
              </a>
              <a
                href={WHATSAPP_TRAFEGO}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[var(--line-strong)] px-7 py-3.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
              >
                WhatsApp agora
              </a>
            </div>
          </div>
        </section>

        {/* TRÁFEGO PAGO — secção principal */}
        <section
          id="trafego"
          className="relative border-y border-[var(--line)] bg-[var(--ink-raised)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Tráfego pago
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
                Queres clientes esta semana?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Se tens site (ou precisas de um) e um orçamento diário para
                anúncios, nós tratamos da campanha: público, criativos, texto e
                otimização. Tu focas-te em fechar.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
              {packages.map((pkg) => (
                <a
                  key={pkg.name}
                  href={WHATSAPP_TRAFEGO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col bg-[var(--ink-raised)] p-7 transition-colors hover:bg-[var(--ink-soft)] md:p-8 ${
                    pkg.featured ? "relative" : ""
                  }`}
                >
                  {pkg.featured && (
                    <span className="mb-4 inline-block w-fit text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                      Mais pedido
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="text-xl font-semibold text-[var(--accent)]">
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-sm text-[var(--muted)]">
                        {pkg.period}
                      </span>
                    )}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {pkg.blurb}
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm text-[var(--text)]/85">
                    {pkg.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-transform group-hover:translate-x-0.5">
                    Quero este plano
                    <span aria-hidden>→</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-[var(--line)] bg-[var(--ink)]/60 p-7 md:flex-row md:items-center md:p-9">
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-semibold text-[var(--text)] md:text-2xl">
                  Orçamento de anúncios à parte
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  A gestão é nossa. O valor que gastas no Facebook/Instagram é
                  teu e vai directo para a Meta. Começamos com pouco e
                  aumentamos quando houver provas.
                </p>
              </div>
              <a
                href={WHATSAPP_TRAFEGO}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--accent-deep)]"
              >
                Pedir proposta no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Processo
            </p>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              Do briefing ao primeiro lead
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Alinhamos o alvo",
                  d: "Produto, zona, orçamento diário e o que conta como cliente (chamada, formulário, WhatsApp).",
                },
                {
                  n: "02",
                  t: "Lançamos a campanha",
                  d: "Criativos, textos e públicos no Meta. Ligamos ao teu site ou página de contacto.",
                },
                {
                  n: "03",
                  t: "Otimizamos e reportamos",
                  d: "Cortamos o que não funciona, reforçamos o que traz leads e mostramos números claros.",
                },
              ].map((step) => (
                <li key={step.n} className="border-t border-[var(--line)] pt-6">
                  <span className="font-display text-sm tracking-[0.2em] text-[var(--accent)]">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {step.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {step.d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJETOS */}
        <section
          id="projetos"
          className="border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Trabalho
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Sites que já construímos
                </h2>
              </div>
              <p className="max-w-sm text-sm text-[var(--muted)]">
                Também fazemos o site — e depois metemos tráfego em cima para
                não ficares com uma página parada.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {projectsData.map((project) => (
                <a
                  key={project.id}
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--ink-soft)]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-end bg-gradient-to-br from-[#1a1a22] to-[#0c0c10] p-5">
                        <span className="font-display text-lg text-[var(--muted)]">
                          {project.client}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {project.category}
                    </p>
                    <h3 className="font-display mt-1 text-xl font-semibold transition-colors group-hover:text-[var(--accent)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="border-t border-[var(--line)] bg-[var(--ink-raised)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Contacto
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Diz o teu negócio.
              <br />
              Nós propomos o plano.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-[var(--muted)]">
              Resposta rápida no WhatsApp. Ideal se precisas de leads esta
              semana e não queres perder tempo com agências lentas.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_TRAFEGO}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--accent-deep)]"
              >
                WhatsApp · Tráfego pago
              </a>
              <a
                href="mailto:geral@snbsoftware.com"
                className="rounded-xl border border-[var(--line-strong)] px-8 py-4 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/40"
              >
                geral@snbsoftware.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-xs text-[var(--muted)] md:flex-row md:items-center">
          <p>© 2026 SNB — Software Norte Build</p>
          <p className="tracking-[0.12em] uppercase">Sites · Apps · Tráfego</p>
        </div>
      </footer>
    </div>
  );
}
