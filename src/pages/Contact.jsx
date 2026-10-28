import { PageIntro } from '../components/Layout.jsx';
import { serviceLinks } from '../routes.js';
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
        <p>Escríbenos para resolver tus dudas o solicitar una valoración. También puedes completar el formulario y nos pondremos en contacto contigo.</p>
        <div className="contact-options">
          <a className="contact-option" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>+53 5 8939703</strong><small>Escríbenos directamente ↗</small></a>
          <a className="contact-option" href="tel:+5358939703"><span>Teléfono</span><strong>+53 5 8939703</strong><small>Llámanos ↗</small></a>
          <a className="contact-option" href="mailto:980lasser@gmail.com"><span>Correo</span><strong>980lasser@gmail.com</strong><small>Envíanos un mensaje ↗</small></a>
        </div>
      </div>
      <div className="appointment-panel" id="solicitar-cita">
        <p className="eyebrow">SOLICITAR CITA</p>
        <h2>Cuéntanos cómo <em>podemos ayudarte.</em></h2>
        <p>Déjanos tus datos y el servicio que te interesa. Te responderemos para coordinar la cita; enviarla no confirma una reserva.</p>
        <form className="appointment-form" action="https://formsubmit.co/980lasser@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Nueva solicitud de cita | 980 Laser" />
          <input type="hidden" name="_template" value="table" />
          <div className="form-honey" aria-hidden="true"><label htmlFor="appointment-company">Dejar vacío</label><input id="appointment-company" name="_honey" tabIndex="-1" autoComplete="off" /></div>
          <div className="form-row">
            <label>Nombre <span>*</span><input name="Nombre" type="text" autoComplete="given-name" required maxLength="80" /></label>
            <label>Apellidos <span>*</span><input name="Apellidos" type="text" autoComplete="family-name" required maxLength="100" /></label>
          </div>
          <div className="form-row">
            <label>Teléfono <span>*</span><input name="Teléfono" type="tel" autoComplete="tel" inputMode="tel" required maxLength="30" placeholder="+53 ..." /></label>
            <label>Correo electrónico (opcional)<input name="email" type="email" autoComplete="email" maxLength="160" /></label>
          </div>
          <label>Servicio que te interesa <span>*</span><select name="Servicio solicitado" required defaultValue=""><option value="" disabled>Selecciona un servicio</option>{serviceLinks.filter(item => item.path !== '/servicios/equipamientos/').map(item => <option key={item.path} value={item.title}>{item.title}</option>)}<option value="Quiero orientación">Quiero orientación</option></select></label>
          <div className="form-row">
            <label>Fecha preferida (opcional)<input name="Fecha preferida" type="date" /></label>
            <fieldset className="form-radio"><legend>¿Este número tiene WhatsApp? <span>*</span></legend><label><input type="radio" name="Tiene WhatsApp" value="Sí" required /> Sí</label><label><input type="radio" name="Tiene WhatsApp" value="No" /> No</label></fieldset>
          </div>
          <label>Comentario adicional (opcional)<textarea name="Comentario" rows="3" maxLength="500" placeholder="Por ejemplo, el horario en que prefieres que te contactemos" /></label>
          <p className="form-privacy">Usaremos estos datos solo para responder a tu solicitud de cita. El envío se procesa mediante FormSubmit.</p>
          <button className="button" type="submit">Enviar solicitud <span aria-hidden="true">↗</span></button>
        </form>
      </div>
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
