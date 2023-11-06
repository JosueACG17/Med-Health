import React, { useState } from 'react';
import imagen from "../img/header.png";
import logo from "../img/logo.png"
import "../styles/header.css"
import { FaHome, FaUsers, FaBriefcase, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { googleLogout } from '@react-oauth/google';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || {});
  const respuesta = JSON.parse(localStorage.getItem("respuestaFacebook"));

  {/*CERRAR SESION GOOGLE */ }
  const logOut = () => {
    googleLogout();
    localStorage.removeItem('userProfile');
    setProfile([]);
  };

  {/*CERRAR SESION CON FACEBOOK */}
  const logoutFacebook = () => {
    localStorage.removeItem("respuestaFacebook");

  };

  const handleLogout = () => {
    logoutFacebook(); // Llama a la función para cerrar sesión en Facebook
    logOut(); // Llama a la función para cerrar sesión en Google
  };


  return (
    <>
      <header className="z-30 w-full px-2 py-2 bg-white border-b border-gray-200 sm:px-4">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center space-x-4">
            <div className="inline-flex md:hidden" x-data="{ open: false }">
              <button className="flex-none px-2 btn btn-white btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"   aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <span className="sr-only">Open Menu</span>
              </button>
            </div>
            <a href="/home" title="Kutty Home Page" className="flex items-center">
              <img className="w-auto h-6" src={logo} alt="Logo" />
              <span className="ml-2 text-black font-bold uppercase font-sans">Med-Health</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="dropdown relative inline-block text-left">
              <button
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Menu</span>
                <img alt="Perfil" src={profile.picture || imagen || respuesta.picture.data.url} className="h-10 w-10 rounded-full border-2 border-blue-800 object-cover" />
                <p className="ms-2 hidden text-left text-xs sm:block">
                  <strong className="block font-medium text-base	">{profile.name || respuesta.name}</strong>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="ms-4  h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>

                {isOpen && (

                  <div className="origin-top-right bg-white absolute mt-80 w-80 rounded-md shadow-lg overflow-hidden" style={{ right: 0, overflowX: 'auto', zIndex: 2 }}>
                    <div className="text-center text-white font-semibold">
                      ¡Bienvenido, {profile.given_name || respuesta.name}!
                    </div>
                    <img className="ml-28 rounded-lg mb-1 h-24 w-24 " src={profile.picture|| imagen || respuesta.picture.data.url} alt="user image" />
                    <p className='text-blue-800 font-semibold'>Nombre:</p>
                    <p className='font-medium'>{profile.name || respuesta.name}</p>
                    <p className='text-blue-800 font-semibold'>Correo Electrónico:</p>
                    <p className='mb-1 font-medium '>{profile.email || respuesta.email}</p>
                    <a
                      href="/"
                      onClick={handleLogout}

                      className="block px-4 py-2 text-white text-sm bg-red-600 hover:bg-sky-700 hover:text-white"
                    >
                      <FaSignOutAlt className="icono" />
                      <span className="text">Cerrar Sesión</span>
                    </a>
                  </div>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>
      <nav className="w-full h-full flex items-center justify-center bg-blue-800">
        <a className="py-4 m-0 tab-link font-bold text-white hover:text-yellow-500" href="/home"><span><FaHome className="icon" /> Home</span></a>
        <a className="py-4 m-0 tab-link font-bold text-white hover:text-yellow-500" href="/nosotros"><span><FaUsers className="icon" /> Nosotros</span></a>
        <a className="py-4 m-0 tab-link font-bold text-white hover:text-yellow-500" href="/servicios"><span><FaBriefcase className="icon" /> Servicios</span></a>
        <a className="py-4 m-0 tab-link font-bold text-white hover:text-yellow-500" href="/contacto"><span><FaEnvelope className="icon" /> Contacto</span></a>
      </nav>

    </>
  );
}

export default Header;
