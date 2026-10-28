export const whatsappNumber = '5358939703';
export function whatsappMessageUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export const whatsappUrl = whatsappMessageUrl('Hola, quisiera recibir información y coordinar una valoración en 980 Laser.');
