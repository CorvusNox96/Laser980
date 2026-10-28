import { useState } from 'react';
import { serviceLinks } from '../routes.js';
import { whatsappUrl } from '../contact.js';

function Brand() {
  return <a className="brand" href="/" aria-label="980 Tratamientos Laser, inicio"><img src={`${import.meta.env.BASE_URL}logo-980-tipografia.png`} alt="980 Tratamientos Laser" width="2089" height="753" /></a>;
}
export function PageIntro({ title, children }) {
  return <section className="page-intro"><div className="container"><nav className="breadcrumbs" aria-label="Ruta de navegación"><a href="/">Inicio</a><span aria-hidden="true">/</span><span>{title}</span></nav><h1>{title}</h1>{children && <p className="page-description">{children}</p>}</div></section>;
}
export default function Layout({ path, children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const finalLinks = [['Preguntas frecuentes', '/preguntas-frecuentes/'], ['Nosotros', '/nosotros/']];
  function closeOnEscape(event) {
    if (event.key !== 'Escape') return;
    if (servicesOpen) { setServicesOpen(false); document.getElementById('services-toggle')?.focus(); }
    else { setMenuOpen(false); document.querySelector('.menu-toggle')?.focus(); }
  }
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <div className="announcement"><span>TECNOLOGÍA AVANZADA. CUIDADO PERSONALIZADO.</span><span>La Habana, Cuba ↗</span></div>
    <header className="header"><div className="container header-inner"><Brand />
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => { setMenuOpen(!menuOpen); setServicesOpen(false); }}>{menuOpen ? 'Cerrar ✕' : 'Menú ☰'}</button>
      <nav id="main-nav" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navegación principal" onKeyDown={closeOnEscape}>
        <a href="/" aria-current={path === '/' ? 'page' : undefined}>Inicio</a>
        <div className="services-dropdown" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
          <button id="services-toggle" className={`services-toggle${path.startsWith('/servicios/') ? ' nav-active' : ''}`} aria-expanded={servicesOpen} aria-controls="services-submenu" onClick={() => setServicesOpen(!servicesOpen)}>Servicios <span aria-hidden="true">{servicesOpen ? '▴' : '▾'}</span></button>
          <div id="services-submenu" className="services-submenu" hidden={!servicesOpen}>
            {serviceLinks.map(({ title, path: href }, index) => <div key={href}>{index === 1 && <hr />}<a href={href} aria-current={path === href ? 'page' : undefined}>{title}</a></div>)}
          </div>
        </div>
        {finalLinks.map(([title, href]) => <a key={href} href={href} aria-current={path === href ? 'page' : undefined}>{title}</a>)}
        <a className="button button-small nav-contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp">Contáctanos ↗</a>
      </nav>
    </div></header>
    <main id="contenido" tabIndex="-1">{children}</main>
    <footer className="footer container"><div className="footer-top"><Brand /><p>La precisión de la tecnología,<br />la confianza de la experiencia.</p><a href="#contenido" className="text-link">Volver arriba ↑</a></div><nav className="footer-links" aria-label="Navegación del pie"><a href="/">Inicio</a>{serviceLinks.map(({ title, path: href }) => <a href={href} key={href}>{title}</a>)}{finalLinks.map(([title, href]) => <a href={href} key={href}>{title}</a>)}</nav><div className="footer-bottom"><span>© {new Date().getFullYear()} 980 Laser. Estética y bienestar.</span><span>La Habana, Cuba.</span></div></footer>
  </>;
}
