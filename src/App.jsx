import { useState } from 'react';
import AssetImage from './components/AssetImage.jsx';
import { ASSETS } from './config/assets.js';
import './App.css';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#galeria', label: 'Galería' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 4L8 40h32L24 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18 32h12M20 26h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Diseño pirámide auténtico',
    description:
      'Silueta icónica de campo con acabado oxidado que aporta carácter y calor visual a cualquier espacio.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect
          x="6"
          y="14"
          width="36"
          height="24"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M6 22h36M16 14V10M32 14V10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Venta y alquiler flexible',
    description:
      'Compra tu estufa para siempre o alquila para eventos, terrazas y experiencias al aire libre.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 16v8l6 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Instalación y asesoría',
    description:
      'Te guiamos en ubicación, seguridad y mantenimiento para disfrutar del fuego con total tranquilidad.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'La estufa pirámide transformó nuestra terraza. El acabado oxidado es espectacular y el calor es constante toda la noche.',
    name: 'María González',
    role: 'Propietaria, chalet en Sierra',
  },
  {
    quote:
      'Alquilamos tres unidades para un evento corporativo. Llegaron a tiempo, impecables y el equipo fue muy profesional.',
    name: 'Carlos Ruiz',
    role: 'Director de eventos',
  },
  {
    quote:
      'Buscaba algo con alma, lejos de las estufas genéricas. Estas pirámides son piezas de diseño que calientan de verdad.',
    name: 'Elena Vidal',
    role: 'Arquitecta de interiores',
  },
];

function Logo({ compact = false }) {
  return (
    <a href="#inicio" className={`logo ${compact ? 'logo--compact' : ''}`} aria-label="Pirámides Oxidadas - Inicio">
      <AssetImage
        src={ASSETS.logo}
        alt="Pirámides Oxidadas"
        className="logo__img"
        loading="eager"
        placeholderHint="logo.png o logo.svg"
      />
      {ASSETS.showLogoText && (
        <span className="logo__text">
          <span className="logo__brand">Pirámides</span>
          <span className="logo__tagline">Oxidadas</span>
        </span>
      )}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="nav-menu"
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
        >
          <ul className="header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn--sm" onClick={() => setMenuOpen(false)}>
            Solicitar presupuesto
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">Estufas estilo campo · Acabado oxidado</p>
          <h1 className="hero__title">
            Calor con carácter:
            <em> pirámides oxidadas</em> para tu espacio
          </h1>
          <p className="hero__subtitle">
            Venta y alquiler de estufas tipo pirámide con acabado rústico premium.
            Ideales para terrazas, jardines, eventos y ambientes que buscan autenticidad.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary btn--lg">
              Reservar o comprar
            </a>
            <a href="#galeria" className="btn btn--ghost btn--lg">
              Ver galería
            </a>
          </div>
          <ul className="hero__stats" aria-label="Datos destacados">
            <li>
              <strong>+120</strong>
              <span>instalaciones</span>
            </li>
            <li>
              <strong>-12h</strong>
              <span>respuesta</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>satisfacción</span>
            </li>
          </ul>
        </div>
        <figure className="hero__visual">
          <AssetImage
            src={ASSETS.hero}
            alt="Estufa pirámide oxidada estilo campo"
            className="hero__photo"
            loading="eager"
            placeholderHint="hero.jpg"
          />
          <figcaption className="hero__badge">
            <span>Venta</span>
            <span className="hero__badge-divider" aria-hidden="true" />
            <span>Alquiler</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="gallery section">
      <div className="container">
        <header className="section__header section__header--center">
          <p className="section__eyebrow">Galería</p>
          <h2 className="section__title">Nuestras estufas en situación real</h2>
          <p className="section__desc section__desc--center">
            Sustituye las imágenes en <code>public/images/</code> por tus fotos
            (ver <code>LEEME.md</code> en esa carpeta).
          </p>
        </header>
        <div className="gallery__grid">
          {ASSETS.gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`gallery__item ${index === 0 ? 'gallery__item--featured' : ''}`}
            >
              <AssetImage
                src={item.src}
                alt={item.alt}
                className="gallery__photo"
                placeholderHint={`galeria-${index + 1}.jpg`}
              />
              <figcaption className="gallery__caption">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="beneficios" className="features section">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Por qué elegirnos</p>
          <h2 className="section__title">Beneficios que marcan la diferencia</h2>
          <p className="section__desc">
            Combinamos estética de campo, materiales duraderos y un servicio pensado
            para quien valora el fuego como experiencia, no solo como calefacción.
          </p>
        </header>
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-card__icon">{feature.icon}</div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="testimonials section">
      <div className="container">
        <header className="section__header section__header--center">
          <p className="section__eyebrow">Testimonios</p>
          <h2 className="section__title">Lo que dicen nuestros clientes</h2>
        </header>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.name} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
              <footer className="testimonial-card__author">
                <cite>{item.name}</cite>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section id="contacto" className="cta section">
      <div className="container">
        <div className="cta__box">
          <div className="cta__content">
            <h2 className="cta__title">¿Listo para dar vida a tu espacio?</h2>
            <p className="cta__desc">
              Cuéntanos tu proyecto y te enviamos catálogo, precios de venta y
              tarifas de alquiler sin compromiso.
            </p>
          </div>
          {submitted ? (
            <p className="cta__success" role="status">
              Gracias. Te contactaremos en menos de 24 horas.
            </p>
          ) : (
            <form className="cta__form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="visually-hidden">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <button type="submit" className="btn btn--primary">
                Solicitar información
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <nav className="footer__links" aria-label="Enlaces legales">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Aviso legal</a>
        </nav>
        <p className="footer__copy">
          &copy; {year} Pirámides Oxidadas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Features />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
