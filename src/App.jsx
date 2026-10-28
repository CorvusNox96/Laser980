import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Layout from './components/Layout.jsx';
import Equipment from './pages/Equipment.jsx';
import Capillaries from './pages/Capillaries.jsx';
import NailCare from './pages/NailCare.jsx';
import SkinCare from './pages/SkinCare.jsx';
import Faq from './pages/Faq.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import { routes } from './routes.js';

export default function App() {
  const path = `${window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')}/`;
  const route = routes.find(item => item.path === path);
  const pages = { '/': <Home />, '/servicios/equipamientos/': <Equipment />, '/servicios/capilares/': <Capillaries />, '/servicios/unas/': <NailCare />, '/servicios/piel/': <SkinCare />, '/preguntas-frecuentes/': <Faq />, '/nosotros/': <About /> };
  useEffect(() => {
    document.title = `${route?.title || 'Página no encontrada'} | 980 Laser`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = route?.description || 'La página solicitada no está disponible.';
  }, [route]);
  const page = pages[path] || <NotFound />;
  return <Layout path={path}>{page}</Layout>;
}
