import { whatsappUrl } from '../contact.js';

export const services = [
  { slug: 'capilares', title: 'Capilares y vasos superficiales', tag: 'ESTÉTICA VASCULAR', image: `${import.meta.env.BASE_URL}treatments/vascular.jpg`, alt: 'Aplicación láser sobre vasos superficiales de la pierna', description: 'Atención estética de arañas vasculares, capilares rojos y telangiectasias superficiales, según valoración individual.', details: 'Evaluamos las características de la piel y la zona antes de considerar una aplicación láser. Incluye orientación sobre capilares faciales cuando el procedimiento sea apropiado.' },
  { slug: 'unas', title: 'Cuidado de tus uñas', tag: 'CUIDADO ESPECIALIZADO', image: `${import.meta.env.BASE_URL}treatments/nail.webp`, alt: 'Profesional aplicando láser sobre una uña del pie', description: 'Cuidado estético y terapia láser complementaria para uñas con onicomicosis confirmada.', details: 'La valoración profesional determina las posibilidades de atención y el seguimiento. El servicio complementario se adapta a las funciones autorizadas del equipo.' },
  { slug: 'piel', title: 'Piel con una apariencia más uniforme', tag: 'ESTÉTICA CUTÁNEA', image: `${import.meta.env.BASE_URL}skin-laser.jpg`, alt: 'Profesional realizando un tratamiento facial con protección ocular', description: 'Una atención personalizada para explorar las posibilidades de cuidado de la apariencia y el tono de tu piel.', details: 'Las aplicaciones para mejorar la uniformidad del tono se consideran en casos seleccionados, siempre que estén indicadas y autorizadas para las condiciones de la piel.' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export function Hero() {
  return <section className="service-hero" aria-labelledby="hero-title">
    <div className="container service-hero-grid">
      <div className="service-hero-copy">
        <p className="eyebrow">TU CUIDADO EMPIEZA AQUÍ</p>
        <h1 id="hero-title">Vuelve a sentir <em>confianza en tu piel.</em></h1>
        <p className="service-hero-description">Te escuchamos, valoramos lo que necesitas y te acompañamos con atención estética personalizada en La Habana.</p>
        <div className="hero-actions"><a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp">Contáctanos <Arrow /></a></div>
      </div>
      <div className="service-hero-media">
        <img src={`${import.meta.env.BASE_URL}laser-treatment-hero.jpg`} alt="Profesional realizando un tratamiento facial a una paciente, ambas con protección ocular" width="1200" height="800" fetchPriority="high" />
        <div className="service-hero-overlay" />
        <span className="service-hero-credit">Imagen de ambientación · Anna Shvets / Pexels</span>
      </div>
    </div>
  </section>;
}

export function Values() { return (<div className="values-strip"><div className="container"><span>TECNOLOGÍA LÁSER 980 nm</span><i>✧</i><span>VALORACIÓN PERSONALIZADA</span><i>✧</i><span>EXPERIENCIA PROFESIONAL</span></div></div>); }

export function Services() { return (<section className="section container" id="servicios" aria-labelledby="services-title"><div className="section-heading"><div><p className="eyebrow">QUÉ PODEMOS CUIDAR</p><h2 id="services-title">Elige por dónde <em>empezar.</em></h2></div></div><div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-image"><img src={service.image} alt={service.alt} loading="lazy" /><span>0{index + 1}</span></div><div className="service-body"><p className="eyebrow">{service.tag}</p><h3>{service.title}</h3><p>{service.description}</p><a className="text-link service-link" href={`/servicios/${service.slug}/`}>Ver detalles <Arrow /></a></div></article>)}</div><p className="service-footnote">Cada procedimiento requiere valoración profesional. Las indicaciones y los resultados pueden variar según cada persona. Imágenes ilustrativas de los procedimientos. Créditos disponibles en cada página de servicio.</p></section>); }

export function About() { return (<section className="about-section" id="nosotros"><div className="container about-grid"><div className="about-visual"><img src={`${import.meta.env.BASE_URL}about-laser.jpg`} alt="Profesional con protección ocular realizando una sesión de láser facial" loading="lazy" /><div className="technology-stamp"><strong>980<span>nm</span></strong><small>TECNOLOGÍA LÁSER<br />CUIDADO CON PRECISIÓN</small></div></div><div className="about-copy"><p className="eyebrow">CONOCE 980 LASER</p><h2>Tecnología que cuida.<br /><em>Experiencia que inspira confianza.</em></h2><p>Somos un centro de estética y bienestar en La Habana. Combinamos tecnología láser de 980 nanómetros con la experiencia de profesionales formados en la rama de la angiología.</p><p>Creemos en una atención cercana, discreta y responsable. Por eso, empezamos por escucharte y valorar lo que tu piel necesita.</p><ul className="check-list"><li>Valoración antes de cada procedimiento</li><li>Planificación individual de las sesiones</li><li>Orientación y seguimiento personalizado</li></ul><a className="text-link" href="/nosotros/">Así te acompañamos <Arrow /></a></div></div></section>); }

export function Process() { return (<section className="section container process" id="experiencia"><div className="section-heading"><div><p className="eyebrow">TU EXPERIENCIA CON NOSOTROS</p><h2>El primer paso es <em>escucharte.</em></h2></div></div><div className="steps">{[['Hablemos de ti', 'Conocemos tus inquietudes y te orientamos sobre nuestros servicios.'], ['Valoramos juntos', 'Evaluamos tus necesidades y explicamos las posibilidades y limitaciones.'], ['Te acompañamos', 'Planificamos el cuidado y el seguimiento de forma individual.']].map(([title, text], i) => <article key={title}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>); }

export function Testimonials() { return (<section className="testimonials-section" id="testimonios"><div className="container testimonials-inner"><span className="quote-mark" aria-hidden="true">“</span><p className="eyebrow">EXPERIENCIAS QUE IMPORTAN</p><h2>La confianza se construye<br /><em>con cada experiencia.</em></h2><p>Este espacio estará dedicado a las opiniones de quienes nos eligen.</p><div className="pending-review">✧ Próximamente: testimonios reales de nuestros clientes.</div><small>Publicaremos sus experiencias con su autorización.</small></div></section>); }

export function Faq() { return (<section className="section container faq-section"><div><p className="eyebrow">RESOLVEMOS TUS DUDAS</p><h2>Antes de <em>tu visita.</em></h2><p>Conocer el proceso también es parte de cuidarte.</p></div><div className="faq-list">{[['¿Necesito una valoración previa?', 'Sí. La valoración individual es el primer paso para conocer tus necesidades y determinar si un procedimiento es apropiado para ti.'], ['¿Cuántas sesiones necesitaré?', 'La planificación se realiza de forma individual. Durante la valoración se explican las posibilidades del servicio y el seguimiento recomendado.'], ['¿Los servicios son para mujeres y hombres?', 'Sí. Atendemos a personas adultas, tanto mujeres como hombres, interesadas en el cuidado estético de capilares superficiales, piel y uñas.']].map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>); }

export function Contact() { return (<section className="contact-section" id="contacto"><div className="container contact-inner"><div><p className="eyebrow">TE ESPERAMOS EN LA HABANA</p><h2>Un momento para ti.<br /><em>Un nuevo comienzo para tu cuidado.</em></h2><p>Será un gusto conocerte y orientarte en tu primera valoración.</p></div><div className="contact-card"><span className="contact-icon" aria-hidden="true">↗</span><h3>Conectemos</h3><p>La Habana, Cuba</p><div className="contact-status">Próximamente compartiremos nuestros canales de contacto, dirección y horarios.</div></div></div></section>); }
