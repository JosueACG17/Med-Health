import React, { useState } from 'react';
import imagen from "../img/header.png";
import logo from "../img/logo.png"
import { googleLogout } from '@react-oauth/google';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || {});

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const logOut = () => {
    googleLogout();
    localStorage.removeItem('userProfile');
    setProfile([]);
};

  return (
    <>
      <header class="z-30 w-full px-2 py-2 bg-white border-b border-gray-200 sm:px-4">
        <div class="flex items-center justify-between mx-auto max-w-7xl">
          <div class="flex items-center space-x-4">
            <div class="inline-flex md:hidden" x-data="{ open: false }">
              <button class="flex-none px-2 btn btn-white btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <span class="sr-only">Open Menu</span>
              </button>
            </div>
            <a href="/" title="Kutty Home Page" class="flex items-center">
            <img class="w-auto h-6" src={logo} alt="Logo" />
            <span class="ml-2 text-black font-bold uppercase font-sans">Med-Health</span>
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <div className="dropdown">
              <button
                className="p-0 rounded-full btn btn-white"
                onClick={toggleDropdown}
              >
                <div className="avatar avatar-sm">
                  <div className="avatar avatar-sm">
                    <img src={profile.picture || imagen} alt="Foto del usuario" />
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className="dropdown-list" id="profile-menu" style={{ position: 'absolute', right: 0 }}>
                  <p className="dropdown-header">{profile.name}</p>
                  <a href="#" className="dropdown-item">
                    Perfil
                  </a>
                  <a href="/login" className="dropdown-item" onClick={logOut}>
                    Log out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <nav class="w-full h-full flex items-center justify-center bg-blue-700">
        <a class="py-4 m-0 tab-link text-white" href="/">Home</a>
        <a class="py-4 m-0 tab-link text-white" href="/nosotros">Nosotros</a>
        <a class="py-4 m-0 tab-link text-white" href="/servicios">Servicios</a>
        <a class="py-4 m-0 tab-link text-white" href="/contacto">Contacto</a>
      </nav>

    </>
  );
}

export default Header;
