import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route desde react-router-dom
import Registro from './pages/Registro';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import Servicios from './pages/Servicios'
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/registro' element={<Registro/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/nosotros' element={<Nosotros/>} />
      <Route path='/contacto' element={<Contacto/>} />
      <Route path='/servicios' element={<Servicios/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;