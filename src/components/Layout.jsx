import SocialLinks from './SocialLinks.jsx';
import { useState } from 'react';
import { serviceLinks } from '../routes.js';

function Brand() {
  return <a className="brand" href="/" aria-label="980 Tratamientos Laser, inicio"><img src={`${import.meta.env.BASE_URL}logo-980-tipografia.png`} alt="980 Tratamientos Laser" width="2089" height="753" /></a>;
}
export function PageIntro({ title, children }) {
  return <section className="page-intro"><div className="container"><nav className="breadcrumbs" aria-label="Ruta de navegación"><a href="/">Inicio</a><span aria-hidden="true">/</span><span>{title}</span></nav><h1>{title}</h1>{children && <p className="page-description">{children}</p>}</div></section>;
}
export default function Layout({ path, children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const finalLinks = [['Tecnología', '/servicios/equipamientos/'], ['Nosotros', '/nosotros/'], ['Preguntas frecuentes', '/preguntas-frecuentes/']];
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
            {serviceLinks.filter(item => item.path !== '/servicios/equipamientos/').map(({ title, path: href }, index) => <div key={href}><a href={href} aria-current={path === href ? 'page' : undefined}>{title}</a></div>)}
          </div>
        </div>
        {finalLinks.map(([title, href]) => <a key={href} href={href} aria-current={path === href ? 'page' : undefined}>{title}</a>)}
        <a className="nav-contact" href="/contacto/" aria-current={path === '/contacto/' ? 'page' : undefined}>Contacto</a>
      </nav>
    </div></header>
    <main id="contenido" tabIndex="-1">{children}</main>
    <footer className="site-footer"><div className="container footer-grid"><div><Brand/><p>Cuidado personalizado de la piel, las uñas y los vasos superficiales en La Habana.</p><a href="#contenido">Volver arriba ↑</a></div><SocialLinks/><nav aria-label="Información del centro"><h2>Conoce 980</h2><a href="/nosotros/">Nuestro equipo</a><a href="/preguntas-frecuentes/">Preguntas frecuentes</a><a href="/contacto/">Coordinar una visita</a></nav><div><h2>Contacto y ubicación</h2><a href="tel:+5358939703">+53 5 8939703</a><a href="mailto:980lasser@gmail.com">980lasser@gmail.com</a><p>Plaza de la Revolución<br/>La Habana, Cuba</p><small>Confirma la dirección exacta antes de visitarnos.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} 980 Laser</span><span>Atención con cita previa</span></div></footer>
  </>;
}
