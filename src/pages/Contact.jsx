import { PageIntro } from '../components/Layout.jsx';
import { whatsappUrl } from '../contact.js';

const address = 'Plaza de la Revolución, La Habana, Cuba';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Plaza+de+la+Revoluci%C3%B3n%2C+La+Habana%2C+Cuba';

export default function Contact() {
  return <>
    <PageIntro title="Contáctanos">Estamos aquí para escucharte y ayudarte a dar el siguiente paso.</PageIntro>
    <section className="container contact-page-grid" aria-labelledby="contact-options-title">
      <div className="contact-page-copy">
        <p className="eyebrow">HABLEMOS</p>
        <h2 id="contact-options-title">Tu cuidado comienza con <em>una conversación.</em></h2>
        <p>Escríbenos para resolver tus dudas o solicitar una valoración. Te responderemos para coordinar la fecha y confirmar tu cita.</p>
        <div className="contact-options">
          <a className="contact-option" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>+53 5 8939703</strong><small>Escríbenos directamente ↗</small></a>
          <a className="contact-option" href="tel:+5358939703"><span>Teléfono</span><strong>+53 5 8939703</strong><small>Llámanos ↗</small></a>
          <a className="contact-option" href="mailto:980lasser@gmail.com"><span>Correo</span><strong>980lasser@gmail.com</strong><small>Envíanos un mensaje ↗</small></a>
        </div>
      </div>
      <aside className="visit-card"><p className="eyebrow">ANTES DE VISITARNOS</p><h2>Organiza tu visita</h2><p>Indícanos el servicio que te interesa y tu disponibilidad. Te confirmaremos la cita y la dirección exacta por nuestros canales de contacto.</p><a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar por WhatsApp ↗</a></aside>
    </section>
    <section className="location-section" aria-labelledby="location-title">
      <div className="container location-grid">
        <div className="location-copy">
          <p className="eyebrow">VISÍTANOS</p>
          <h2 id="location-title">Nos encontramos <em>en La Habana.</em></h2>
          <p>Referencia provisional: {address}.</p>
          <p className="location-note">La dirección exacta se actualizará próximamente. Contáctanos antes de visitarnos para confirmar cómo llegar.</p>
          <a className="text-link" href={mapUrl} target="_blank" rel="noopener noreferrer">Ver ubicación de referencia en el mapa <span aria-hidden="true">↗</span></a>
        </div>
        <iframe className="location-map" title="Mapa de referencia de Plaza de la Revolución, La Habana" src="https://maps.google.com/maps?q=Plaza%20de%20la%20Revoluci%C3%B3n%2C%20La%20Habana%2C%20Cuba&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  </>;
}
