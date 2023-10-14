import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route desde react-router-dom
import Registro from './pages/Registro';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/registro' element={<Registro/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;