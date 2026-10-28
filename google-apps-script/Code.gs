// Deploy this script while signed in as 980lasser@gmail.com.
// Deployment: Web app, execute as Me, access Anyone.
const RECIPIENT = '980lasser@gmail.com';
const SERVICES = [
  'Capilares y vasos superficiales',
  'Cuidado de uñas',
  'Cuidado de la piel',
  'Quiero orientación',
];

function value_(parameters, name, maxLength) {
  return String(parameters[name] || '').trim().slice(0, maxLength);
}

function page_(success, message) {
  const heading = success ? 'Solicitud enviada' : 'No pudimos enviar la solicitud';
  const color = success ? '#1d4568' : '#9b3e3e';
  return HtmlService.createHtmlOutput(
    '<!doctype html><html lang="es"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>' + heading + ' | 980 Laser</title>' +
    '<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#edf3f9;' +
    'font:16px/1.6 Arial,sans-serif;color:#233a52}.box{max-width:460px;margin:24px;padding:40px;' +
    'background:white;border-radius:8px;box-shadow:0 15px 35px #1d456814}h1{color:' + color +
    ';font-size:30px;line-height:1.2;margin:0 0 15px}p{margin:0}</style>' +
    '<div class="box"><h1>' + heading + '</h1><p>' + message + '</p></div></html>'
  );
}

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    if (value_(p, '_honey', 100)) return page_(true, 'Gracias por contactar con 980 Laser.');

    const name = value_(p, 'Nombre', 80);
    const surname = value_(p, 'Apellidos', 100);
    const phone = value_(p, 'Teléfono', 30);
    const email = value_(p, 'email', 160);
    const service = value_(p, 'Servicio solicitado', 100);
    const date = value_(p, 'Fecha preferida', 20);
    const whatsapp = value_(p, 'Tiene WhatsApp', 3);
    const comment = value_(p, 'Comentario', 500);

    if (!name || !surname || !/^[+()\d\s.-]{7,30}$/.test(phone) ||
        SERVICES.indexOf(service) === -1 || ['Sí', 'No'].indexOf(whatsapp) === -1 ||
        (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
        (date && !/^\d{4}-\d{2}-\d{2}$/.test(date))) {
      return page_(false, 'Revisa los datos del formulario y vuelve a intentarlo.');
    }

    const key = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, phone)
      .map(function (byte) { return ('0' + (byte & 255).toString(16)).slice(-2); }).join('');
    const cache = CacheService.getScriptCache();
    if (cache.get(key)) return page_(false, 'Ya recibimos una solicitud con este teléfono. Espera unos minutos antes de enviar otra.');

    const body = [
      'Nueva solicitud de cita desde 980 Laser',
      '',
      'Nombre: ' + name + ' ' + surname,
      'Teléfono: ' + phone,
      'Correo: ' + (email || 'No indicado'),
      'Servicio: ' + service,
      'Tiene WhatsApp: ' + whatsapp,
      'Fecha preferida: ' + (date || 'No indicada'),
      'Comentario: ' + (comment || 'No indicado'),
      '',
      'Esta solicitud requiere confirmación antes de considerarse una cita.',
    ].join('\n');

    const options = {
      to: RECIPIENT,
      subject: 'Solicitud de cita: ' + service + ' | 980 Laser',
      body: body,
      name: '980 Laser',
    };
    if (email) options.replyTo = email;
    MailApp.sendEmail(options);
    cache.put(key, '1', 600);
    return page_(true, 'Gracias por escribirnos. Nos pondremos en contacto contigo para confirmar la cita.');
  } catch (error) {
    console.error('No se pudo enviar la solicitud: ' + error);
    return page_(false, 'Inténtalo de nuevo o contáctanos por WhatsApp.');
  }
}
