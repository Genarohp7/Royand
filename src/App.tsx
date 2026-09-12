import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  {
    title: 'Modelos de gestión personalizados',
    short: 'Estructura diseñada a la medida de cada organización.',
    text: 'Diseño de estructuras de trabajo alineadas a la realidad, tamaño, riesgos y objetivos de cada cliente.',
  },
  {
    title: 'Sistemas de gestión',
    short: 'Procesos claros para operar con menos fricción.',
    text: 'Acompañamiento para ordenar responsabilidades, procesos, criterios de control y mecanismos de seguimiento.',
  },
  {
    title: 'Modelos de mejora',
    short: 'Evolución organizada, medible y sostenible.',
    text: 'Rutas de mejora para fortalecer prácticas internas, reducir riesgos y sostener decisiones estratégicas.',
  },
  {
    title: 'Acompañamiento estratégico',
    short: 'Cercanía con Dirección durante la implementación.',
    text: 'Apoyo adulto y confidencial para conectar estructura, cumplimiento y crecimiento con seguimiento continuo.',
  },
];

const values = ['Atención personalizada', 'Compromiso con resultados', 'Ética y confidencialidad', 'Honestidad'];

const socialLinks = [
  { label: 'LinkedIn', href: '#contacto', icon: 'linkedin' },
  { label: 'Facebook', href: '#contacto', icon: 'facebook' },
  { label: 'Instagram', href: '#contacto', icon: 'instagram' },
] as const;

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function useHeaderIntent(menuOpen: boolean) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!pointerQuery.matches) {
      return;
    }

    let timeoutId = window.setTimeout(() => setVisible(false), 1800);

    const showHeader = () => {
      setVisible(true);
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (!menuOpen) {
          setVisible(false);
        }
      }, reducedMotion ? 2600 : 1800);
    };

    window.addEventListener('pointermove', showHeader, { passive: true });
    window.addEventListener('keydown', showHeader);
    window.addEventListener('scroll', showHeader, { passive: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('pointermove', showHeader);
      window.removeEventListener('keydown', showHeader);
      window.removeEventListener('scroll', showHeader);
    };
  }, [menuOpen]);

  return visible || menuOpen;
}

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]['icon'] }) {
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.8 9.4v8.8H4V9.4h2.8ZM5.4 5.2c.9 0 1.5.6 1.5 1.4S6.3 8 5.3 8C4.4 8 3.8 7.4 3.8 6.6s.6-1.4 1.6-1.4Zm6.3 4.2.1 1.3c.5-.8 1.4-1.5 2.9-1.5 2 0 3.5 1.3 3.5 4.1v4.9h-2.8v-4.6c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8v4.7H9.2V9.4h2.5Z" />
      </svg>
    );
  }

  if (icon === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.7 20v-7.2h2.4l.4-2.8h-2.8V8.2c0-.8.2-1.4 1.4-1.4h1.5V4.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.2v2.8h2.5V20h3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.2 4h7.6A4.2 4.2 0 0 1 20 8.2v7.6a4.2 4.2 0 0 1-4.2 4.2H8.2A4.2 4.2 0 0 1 4 15.8V8.2A4.2 4.2 0 0 1 8.2 4Zm0 2.7c-.8 0-1.5.7-1.5 1.5v7.6c0 .8.7 1.5 1.5 1.5h7.6c.8 0 1.5-.7 1.5-1.5V8.2c0-.8-.7-1.5-1.5-1.5H8.2Zm3.8 2.1a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm0 2.2a1 1 0 1 0 0 2.1 1 1 0 0 0 0-2.1Zm3.5-2.6a.8.8 0 1 1 0 1.5.8.8 0 0 1 0-1.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4a7.7 7.7 0 0 0-6.6 11.7L4.3 20l4.4-1.1A7.7 7.7 0 1 0 12 4Zm0 2.6a5.1 5.1 0 0 1 4.4 7.7 5.1 5.1 0 0 1-6.3 1.9l-.5-.2-1.6.4.4-1.6-.3-.5A5.1 5.1 0 0 1 12 6.6Zm-2.1 2.5c-.2 0-.5.1-.7.4-.2.3-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.7.6.4-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3l-1.5-.7c-.2-.1-.4-.1-.6.1l-.7.8c-.1.2-.3.2-.6.1-.3-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.6-.4Z" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerVisible = useHeaderIntent(menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" data-menu-open={menuOpen} data-visible={headerVisible}>
      <a className="brand-mark" href="#inicio" aria-label="Ir al inicio de Royand" onClick={closeMenu}>
        <img src="./assets/royand-logo.svg" alt="" width="176" height="48" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav id="site-menu" className="site-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="social-links" aria-label="Redes sociales pendientes de conectar">
        {socialLinks.map((item) => (
          <a key={item.label} href={item.href} aria-label={`${item.label}: enlace pendiente de conectar`} onClick={closeMenu}>
            <SocialIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </header>
  );
}

function App() {
  const [activeService, setActiveService] = useState(0);

  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />

      <main id="contenido">
        <section id="inicio" className="hero scene" aria-labelledby="hero-title">
          <picture>
            <source srcSet="./assets/royand-consulting-hero.webp" type="image/webp" />
            <img className="hero-bg" src="./assets/royand-consulting-hero.webp" alt="" width="1920" height="1080" />
          </picture>
          <div className="hero-scrim" />
          <div className="hero-content">
            <div className="hero-copy glass-pane" data-reveal>
              <p className="slogan">Orden que impulsa tu crecimiento</p>
              <h1 id="hero-title">Estructura clara para crecer con dirección.</h1>
              <p>
                Royand diseña modelos de gestión personalizados para ordenar la operación,
                disminuir riesgos y acompañar los objetivos estratégicos de la Dirección.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Iniciar conversación
                </a>
                <a className="button button-secondary" href="#servicios">
                  Ver servicios
                </a>
              </div>
            </div>

            <aside className="hero-index glass-pane" aria-label="Enfoque de Royand" data-reveal>
              <span>Orden</span>
              <span>Estructura</span>
              <span>Gestión</span>
              <span>Legado</span>
            </aside>
          </div>
        </section>

        <section id="nosotros" className="scene story-scene" aria-labelledby="nosotros-title">
          <div className="scene-inner story-layout">
            <div className="scene-copy" data-reveal>
              <h2 id="nosotros-title">Una marca que entiende el valor de construir sobre bases firmes.</h2>
              <p>
                Royand nace de la unión entre Monroy y Ander, y también lleva el nombre del hijo
                de la familia. Su origen habla de amor, legado y permanencia.
              </p>
              <p>
                Esa idea se traslada a las empresas: una organización necesita cimientos sólidos,
                estructura, orden y dirección para evolucionar y trascender.
              </p>
            </div>

            <figure className="photo-panel story-photo" data-reveal>
              <img
                src="./assets/royand-diagnostic-session.webp"
                alt="Consultores revisando materiales de diagnóstico organizacional con directivos en una oficina ejecutiva."
                width="1400"
                height="934"
                loading="lazy"
              />
              <figcaption>Diagnóstico, estructura y acompañamiento cercano.</figcaption>
            </figure>

            <div className="mission-stack" data-reveal>
              <article className="compact-card glass-pane">
                <h3>Misión</h3>
                <p>Diseñar modelos de gestión personalizados que reduzcan riesgos y apoyen los objetivos estratégicos de cada cliente.</p>
              </article>
              <article className="compact-card glass-pane">
                <h3>Visión</h3>
                <p>Ser una firma líder en sistemas de gestión y modelos de mejora por excelencia de implementación y creación de valor.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="scene approach-scene" aria-labelledby="enfoque-title">
          <div className="scene-inner approach-layout">
            <div className="scene-copy dark-copy" data-reveal>
              <h2 id="enfoque-title">Del diagnóstico a un modelo operativo que se puede sostener.</h2>
              <p>
                Royand convierte intención estratégica en sistemas claros: responsabilidades,
                procesos, criterios de decisión y ciclos de mejora.
              </p>
            </div>

            <div className="approach-board glass-pane" data-reveal>
              <div className="approach-line" aria-hidden="true" />
              <article>
                <span>01</span>
                <h3>Ordenar</h3>
                <p>Leer la organización, ubicar riesgos y separar lo urgente de lo estructural.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Diseñar</h3>
                <p>Construir un modelo de gestión ajustado a objetivos, requisitos y capacidades.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Acompañar</h3>
                <p>Implementar con seguimiento, confidencialidad y compromiso con resultados.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="servicios" className="scene services-scene" aria-labelledby="servicios-title">
          <div className="scene-inner services-layout">
            <div className="scene-copy" data-reveal>
              <h2 id="servicios-title">Servicios compactos, claros y alineados al crecimiento.</h2>
              <p>
                Una oferta inicial consistente con la marca, lista para afinarse cuando exista un
                catálogo comercial más detallado.
              </p>
            </div>

            <figure className="photo-panel services-photo" data-reveal>
              <img
                src="./assets/royand-process-table.webp"
                alt="Mesa de trabajo con tarjetas de procesos, materiales ejecutivos y documentos organizados."
                width="1400"
                height="934"
                loading="lazy"
              />
            </figure>

            <div className="service-tabs glass-pane" data-reveal>
              <div className="tab-list" role="tablist" aria-label="Servicios de Royand">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    role="tab"
                    aria-selected={activeService === index}
                    aria-controls={`service-panel-${index}`}
                    id={`service-tab-${index}`}
                    onClick={() => setActiveService(index)}
                  >
                    {service.title}
                  </button>
                ))}
              </div>

              {services.map((service, index) => (
                <article
                  className="service-panel"
                  id={`service-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${index}`}
                  hidden={activeService !== index}
                  key={service.title}
                >
                  <h3>{service.short}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="scene contact-scene" aria-labelledby="contacto-title">
          <div className="scene-inner contact-layout">
            <div className="values-shell glass-pane" data-reveal>
              <h2>Confianza que se nota en la forma de acompañar.</h2>
              <ul aria-label="Valores de Royand">
                {values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>

            <div className="contact-card glass-pane" data-reveal>
              <h2 id="contacto-title">Conversemos sobre la estructura que tu organización necesita.</h2>
              <p>
                Contacto directo con Alejandra González para iniciar una conversación sobre orden,
                gestión y crecimiento.
              </p>
              <div className="contact-actions">
                <a className="button button-primary" href="tel:+524431600794">
                  443 160 0794
                </a>
                <a className="button button-secondary" href="tel:+525580742209">
                  55 8074 2209
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href="https://wa.me/0000000000"
        aria-label="Abrir WhatsApp de Royand, número pendiente de configurar"
        title="WhatsApp pendiente de configurar"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>

      <footer className="site-footer">
        <span>Royand</span>
        <span>Orden que impulsa tu crecimiento</span>
      </footer>
    </>
  );
}

export default App;
