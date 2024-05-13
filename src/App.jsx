import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import Servicios from './pages/Servicios'
import Index from './pages/Index';
import Libreria from './pages/Libreria';
import Dashboard from './pages/Dashboard';
import TablaUsers from './pages/Tabla-users';
import Companieros from './pages/Companieros';
import Modal from './components/Modal';
import KittyCarousel from './components/KittyCarousel';
import DogCarousel from './components/DogCarousel';
import Mapa from './pages/Mapa';
import Noticias from './pages/Noticias';
import Carga from "./components/Carga";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Carga />
      ) : (
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Index />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/libreria' element={<Libreria />} />
          <Route path='/mapa' element={<Mapa />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/usuarios' element={<TablaUsers />} />
          <Route path='/companieros' element={<Companieros />} />
          <Route path='/modal' element={<Modal />} />
          <Route path='/Carousel' element={<KittyCarousel />} />
          <Route path='/dog' element={<DogCarousel />} />
          <Route path='*' element={<Error />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}


export default App;