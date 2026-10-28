import { PageIntro } from '../components/Layout.jsx';
import { whatsappUrl } from '../contact.js';

export default function About() {
  return <>
    <div className="about-page-intro"><PageIntro title="Nosotros">Conoce a las personas que te acompañan en cada paso.</PageIntro></div>
    <section className="container team-section" aria-labelledby="team-title">
      <div className="team-photo"><img src={`${import.meta.env.BASE_URL}optimized/team-picture.webp`} alt="Los dos doctores de 980 Laser en su centro" fetchPriority="high" /></div>
      <div className="team-copy">
        <p className="eyebrow">CERCANÍA Y EXPERIENCIA</p>
        <h2 id="team-title">Un equipo que te escucha y <em>te acompaña.</em></h2>
        <p>En 980 Laser creemos que una buena atención comienza al escucharte, entender tus inquietudes y valorar cada caso con calma.</p>
        <p>Unimos experiencia profesional y tecnología láser para ofrecerte un cuidado estético cercano y personalizado.</p>
        <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp">Contáctanos <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <section className="container people-section" aria-labelledby="people-title">
      <div className="people-heading"><p className="eyebrow">QUIÉNES TE ATIENDEN</p><h2 id="people-title">Conoce a nuestros <em>profesionales.</em></h2></div>
      <div className="people-grid">
        <article className="person-card"><img className="person-photo" src={`${import.meta.env.BASE_URL}optimized/portrait-doctora.webp`} alt="Retrato individual de la doctora del equipo de 980 Laser" loading="lazy" width="158" height="158" /><div className="person-copy"><p className="eyebrow">EQUIPO 980 LASER</p><h3>Doctora especialista en angiología</h3><p>Atención cercana y valoración individual para acompañarte en cada etapa de tu cuidado.</p></div></article>
        <article className="person-card"><img className="person-photo" src={`${import.meta.env.BASE_URL}optimized/portrait-doctor.webp`} alt="Retrato individual del doctor del equipo de 980 Laser" loading="lazy" width="158" height="158" /><div className="person-copy"><p className="eyebrow">EQUIPO 980 LASER</p><h3>Doctor especialista en angiología</h3><p>Experiencia profesional y orientación personalizada para encontrar el siguiente paso adecuado para ti.</p></div></article>
      </div>
    </section>
    <section className="treatment-section"><div className="container treatment-showcase"><div><p className="eyebrow">ASÍ TRABAJAMOS</p><h2>Atención con precisión y <em>cercanía.</em></h2><p>Cada tratamiento comienza con una valoración individual. Te explicamos el proceso y te acompañamos con cuidado en cada sesión.</p></div><img src={`${import.meta.env.BASE_URL}optimized/treatment.webp`} alt="Equipo de 980 Laser realizando un tratamiento estético láser" loading="lazy" /></div></section>
  </>;
}
