import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route desde react-router-dom
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


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Index />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/libreria' element={<Libreria />} /> 
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/usuarios' element={<TablaUsers/>} />
        <Route path='/companieros' element={<Companieros />} />
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/Carousel' element={<KittyCarousel/>}/>
        <Route path='/dog' element={<DogCarousel/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;