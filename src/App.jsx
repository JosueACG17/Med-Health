import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route desde react-router-dom
import Registro from './pages/Registro';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Serviciosdos from './pages/Serviciosdos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/registro' element={<Registro/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/nosotros' element={<Nosotros/>} />
      <Route path='/Servicios' element={<Servicios/>}></Route>
      <Route path='/Serviciosdos' element={<Serviciosdos/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;