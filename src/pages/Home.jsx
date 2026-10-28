import { Hero, Values, Services } from '../components/Sections.jsx';
import { whatsappUrl } from '../contact.js';

export default function Home() {
  return <>
    <Hero />
    <Values />
    <Services />
    <section className="home-intro container">
      <p className="eyebrow">980 LASER · LA HABANA</p>
      <h2>Empecemos por <em>escucharte.</em></h2>
      <p>Cuéntanos qué te gustaría cuidar. Te orientamos sobre el siguiente paso y la valoración que necesitas.</p>
      <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp">Contáctanos <span aria-hidden="true">↗</span></a>
    </section>
  </>;
}
