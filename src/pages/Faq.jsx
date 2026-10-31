import { PageIntro } from '../components/Layout.jsx';

const groups = [
  { title: 'Tratamientos y resultados', items: [
    ['¿Qué tratamientos ofrece 980?', 'Ofrecemos tratamientos para el cuidado de la piel y las lesiones vasculares superficiales, como láser para microvarices, rejuvenecimiento facial, manchas y onicomicosis. También ofrecemos fisioterapia. Cada tratamiento se adapta a las necesidades de la persona.'],
    ['¿Los tratamientos con láser son dolorosos?', 'La sensación depende del procedimiento, la zona y la sensibilidad de cada persona. Puede sentirse calor, pequeños pinchazos o molestias leves y pasajeras. Antes de comenzar, te explicaremos qué puedes esperar.'],
    ['¿Cuántas sesiones necesito para ver resultados?', 'Depende del tratamiento, la zona y la respuesta individual. Algunos cambios pueden apreciarse desde las primeras sesiones; otros procedimientos requieren varias. Te orientaremos durante la valoración.'],
    ['¿Puedo tratarme si tengo la piel sensible o con lesiones?', 'La piel sensible requiere una valoración individual. Si tienes dermatitis, heridas recientes u otras lesiones activas, puede ser necesario aplazar el tratamiento. Solicita una evaluación profesional antes de una sesión de láser.'],
    ['¿El láser elimina las microvarices por completo?', 'Los resultados dependen del tipo, diámetro, profundidad y origen de los vasos. Algunas lesiones superficiales pueden mejorar, pero pueden requerirse varias sesiones y no se garantiza su eliminación completa. Si hay signos de insuficiencia venosa, puede ser necesaria una evaluación vascular previa.'],
    ['¿La onicomicosis puede tratarse con láser?', 'El láser puede formar parte del tratamiento, según el caso. Primero es importante confirmar el diagnóstico y valorar si hace falta un antifúngico adicional. La mejoría visible de la uña puede tardar varias semanas.'],
  ] },
  { title: 'Preparación y cuidados', items: [
    ['¿Necesito una consulta antes de realizarme un tratamiento?', 'Sí. La valoración inicial permite conocer tus necesidades, examinar la zona y determinar si el procedimiento es adecuado. Según el tratamiento, puede ser necesaria una prueba previa o estudios complementarios.'],
    ['¿Qué cuidados debo tener después de un tratamiento láser?', 'Las indicaciones son individuales y dependen del procedimiento. En general, sigue las recomendaciones del profesional, evita el sol cuando corresponda, usa protección solar en las zonas expuestas y no apliques productos irritantes sin consultarlo. Recibirás instrucciones específicas al finalizar.'],
    ['¿Debo prepararme antes de acudir a la consulta?', 'Depende del procedimiento. Te indicaremos si debes evitar cosméticos, medicamentos tópicos, exposición solar u otras prácticas. Comunica durante la valoración los medicamentos que usas y tus antecedentes relevantes.'],
    ['¿Los tratamientos son adecuados para todos los tipos de piel?', 'No todos los procedimientos son adecuados para todas las pieles. Evaluamos el fototipo, la sensibilidad, las características de la lesión y los posibles riesgos antes de elegir un tratamiento.'],
    ['¿Qué hago si tengo molestias después de una sesión?', 'Sigue las indicaciones recibidas y contáctanos si aparecen molestias inesperadas. Si tienes dolor intenso, ampollas extensas, cambios importantes de color, fiebre o signos de infección, busca atención médica sin demora.'],
  ] },
  { title: 'Citas y precios', items: [
    ['¿Cómo puedo reservar una cita en 980?', 'Contáctanos mediante los canales disponibles en el sitio web. Te ayudaremos a coordinar una valoración inicial y a conocer los detalles del tratamiento que te interesa.'],
    ['¿Cuánto cuesta cada tratamiento?', 'El precio depende del procedimiento, la extensión de la zona y el número de sesiones. Contáctanos para conocer las tarifas y recibir orientación durante la valoración inicial.'],
  ] },
];

export default function Faq() {
  return <>
    <PageIntro title="Preguntas frecuentes">Respuestas a las dudas más habituales sobre nuestros tratamientos, cuidados y citas.</PageIntro>
    <div className="container faq-page">
      {groups.map(group => <section className="faq-group" key={group.title} aria-label={group.title}>
        <h2>{group.title}</h2>
        <div className="faq-list">{group.items.map(([question, answer]) => <details key={question}>
          <summary>{question}</summary><p>{answer}</p>
        </details>)}</div>
      </section>)}
      <p className="faq-contact">¿Tienes otra pregunta? <a href="/contacto/">Contáctanos →</a></p>
    </div>
  </>;
}
