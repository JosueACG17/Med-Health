import React from 'react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <img
              className="h-8"
              src="https://e7.pngegg.com/pngimages/83/15/png-clipart-logo-health-care-medicine-hospital-automotive-battery-emblem-logo.png"
              alt="Logo"
            />

          </a>

          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-teal-600 p-2 focus:outline-none"
            >
              {/* Icono del menú (hamburguesa) */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } sm:block sm:flex sm:items-center sm:gap-12`}
          >
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-green-700 "
                  href="/"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-green-700"
                  href="/"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-green-700"
                  href="/"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-green-700"
                  href="/"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
