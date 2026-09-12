import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

const socialItems = ['LinkedIn', 'Facebook', 'Instagram'];

const services = [
  {
    title: 'Modelos de gestión personalizados',
    text: 'Diseño de estructuras de trabajo alineadas a la realidad, tamaño y objetivos de cada organización.',
  },
  {
    title: 'Consultoría en sistemas de gestión',
    text: 'Acompañamiento para ordenar procesos, reducir riesgos y fortalecer la operación desde sus bases.',
  },
  {
    title: 'Modelos de mejora organizacional',
    text: 'Rutas de mejora claras para evolucionar prácticas internas, responsabilidades y toma de decisiones.',
  },
  {
    title: 'Acompañamiento estratégico',
    text: 'Apoyo cercano a la Dirección para conectar estructura, cumplimiento y crecimiento sostenible.',
  },
];

const values = [
  'Pasión por el servicio y atención personalizada',
  'Enfoque y compromiso con los resultados',
  'Ética y confidencialidad',
  'Honestidad en cada etapa del acompañamiento',
];

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
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" data-menu-open={menuOpen}>
      <a className="brand-mark" href="#inicio" aria-label="Ir al inicio de Royand" onClick={closeMenu}>
        <img src="./assets/royand-logo.svg" alt="" width="154" height="42" />
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
        {socialItems.map((item) => (
          <a key={item} href="#contacto" title={`${item}: enlace pendiente de conectar`}>
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />

      <main id="contenido">
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <img className="hero-bg" src="./assets/royand-hero.svg" alt="" width="1920" height="1080" />
          <div className="hero-scrim" />
          <div className="hero-content">
            <div className="hero-copy glass-pane" data-reveal>
              <p className="slogan">Orden que impulsa tu crecimiento</p>
              <h1 id="hero-title">Cimientos firmes para organizaciones que buscan trascender.</h1>
              <p>
                Royand diseña modelos de gestión personalizados para ordenar la operación,
                disminuir riesgos y acompañar los objetivos estratégicos de la Dirección.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Iniciar conversación
                </a>
                <a className="button button-secondary" href="#servicios">
                  Ver enfoque
                </a>
              </div>
            </div>
            <aside className="hero-index" aria-label="Enfoque de Royand" data-reveal>
              <span>estructura</span>
              <span>gestión</span>
              <span>mejora</span>
              <span>legado</span>
            </aside>
          </div>
        </section>

        <section id="nosotros" className="section story-section" aria-labelledby="nosotros-title">
          <div className="section-heading" data-reveal>
            <h2 id="nosotros-title">Una marca construida desde el legado.</h2>
            <p>
              Royand nace de la unión entre Monroy y Ander, y también lleva el nombre del hijo
              de la familia. Su origen habla de amor, permanencia y construcción paciente.
            </p>
          </div>
          <div className="story-grid">
            <article className="story-panel glass-pane" data-reveal>
              <h3>Filosofía</h3>
              <p>
                Esa idea se traslada a las empresas: para crecer y permanecer, una organización
                necesita bases sólidas, dirección clara y una estructura capaz de sostener la evolución.
              </p>
            </article>
            <article className="story-panel story-panel-large" data-reveal>
              <img
                src="./assets/foundation-map.svg"
                alt="Composición abstracta de líneas estructurales, capas y puntos de crecimiento."
                width="760"
                height="620"
                loading="lazy"
              />
            </article>
            <article className="story-panel glass-pane" data-reveal>
              <h3>Misión</h3>
              <p>
                Ofrecer modelos de gestión personalizados que respondan a las necesidades de cada
                cliente, disminuyan riesgos y apoyen el cumplimiento de sus objetivos estratégicos.
              </p>
            </article>
            <article className="story-panel glass-pane" data-reveal>
              <h3>Visión</h3>
              <p>
                Consolidarse como una firma líder en consultoría de sistemas de gestión y diseño
                de modelos de mejora, destacando por implementación excelente y creación de valor.
              </p>
            </article>
          </div>
        </section>

        <section className="section approach-section" aria-labelledby="enfoque-title">
          <div className="approach-layout">
            <div className="approach-copy" data-reveal>
              <h2 id="enfoque-title">Orden, estructura y dirección para avanzar con menos fricción.</h2>
              <p>
                El trabajo de Royand ayuda a convertir intención estratégica en sistemas claros:
                responsabilidades, procesos, criterios de decisión y ciclos de mejora que sostienen
                el crecimiento.
              </p>
            </div>
            <div className="approach-steps" data-reveal>
              <div>
                <strong>Ordenar</strong>
                <span>leer la organización, ubicar riesgos y separar lo urgente de lo estructural.</span>
              </div>
              <div>
                <strong>Diseñar</strong>
                <span>crear modelos de gestión ajustados a los objetivos y requisitos del cliente.</span>
              </div>
              <div>
                <strong>Acompañar</strong>
                <span>implementar con cercanía, seguimiento y compromiso con resultados reales.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section services-section" aria-labelledby="servicios-title">
          <div className="section-heading align-right" data-reveal>
            <h2 id="servicios-title">Servicios diseñados para fortalecer la base operativa.</h2>
            <p>
              Una primera oferta clara, consistente con la marca y lista para afinarse cuando exista
              un catálogo comercial más detallado.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card glass-pane" key={service.title} data-reveal>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section values-section" aria-labelledby="valores-title">
          <div className="values-shell glass-pane" data-reveal>
            <div>
              <h2 id="valores-title">Confianza que se nota en la forma de acompañar.</h2>
              <p>
                Royand trabaja con una voz cercana y profesional, cuidando la confidencialidad y la
                claridad que exige intervenir en la estructura de una empresa.
              </p>
            </div>
            <ul>
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contacto" className="contact-section" aria-labelledby="contacto-title">
          <div className="contact-visual" aria-hidden="true" />
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
        </section>
      </main>

      <footer className="site-footer">
        <span>Royand</span>
        <span>Orden que impulsa tu crecimiento</span>
      </footer>
    </>
  );
}

export default App;
