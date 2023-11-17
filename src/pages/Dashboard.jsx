import React, { useState } from 'react';
import MenuDash from "../components/MenuDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUsers, faBookMedical, faKitMedical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "../styles/dashboard.css";

function Dashboard() {
  const profile= JSON.parse(localStorage.getItem('userProfile')) || {};

  return (
    <>
      <MenuDash />
      <main className="menu-conte">
        <header className="bg-gray-50 mb-6 rounded-lg">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center sm:justify-between sm:gap-4">
              <div className="relative hidden sm:block">
                <label className="sr-only" htmlFor="search"> Buscar </label>

                <input
                  className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Buscar"
                />

                <button
                  type="button"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div
                className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  <a
                    href="#"
                    className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                  >
                    <span className="sr-only">Academy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                  >
                    <span className="sr-only">Notifications</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </a>
                </div>

                <button
                  type="button"
                  className="group flex shrink-0 items-center rounded-lg transition"
                >
                  <span className="sr-only">Menu</span>
                  <img
                    alt="Man"
                    src={profile.picture || "https://i.pinimg.com/564x/38/ae/8d/38ae8d4b48a93580cef2292cc776ca7a.jpg"}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <p className="ms-2 hidden text-left text-xs sm:block">
                    <strong className="block font-medium">{profile.name || "Nombre admin"}</strong>

                    <span className="text-gray-500">{profile.email || "correo@gmail.com"}  </span>
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-2xl font-bold text-blue-800 sm:text-3xl">
                ¡Bienvenido {profile.name}!
              </h1>

            </div>
          </div>
        </header>
        {/* Cartas contenedir */}

        <div className="carta-cont">
          <h1 className="main-title text-blue-800">Datos</h1>
          <div className="carta-wrapper">

            <div className="carta-payment light-green">
              <div className="carta-header">
                <div className="amount">
                  <span className="ctitulo font-bold">Usuarios:</span>
                  <span className="amount-valor font-medium">1356</span>
                </div>
                <i className="cartaicon"><FontAwesomeIcon icon={faUsers} /></i>
              </div>
              <span className="carta-detalle">+55% de usuarios</span>
            </div>

            <div className="carta-payment light-blue">
              <div className="carta-header">
                <div className="amount">
                  <span className="ctitulo font-bold">Servicios:</span>
                  <span className="amount-valor font-medium">25</span>
                </div>
                <i className="cartaicon dark-blue"><FontAwesomeIcon icon={faKitMedical} /></i>
              </div>
              <span className="carta-detalle">**** **** **** 2321</span>
            </div>

            <div className="carta-payment light-red">
              <div className="carta-header">
                <div className="amount">
                  <span className="ctitulo font-bold">Artículos:</span>
                  <span className="amount-valor font-medium">2500</span>
                </div>
                <i className="cartaicon dark-red"><FontAwesomeIcon icon={faBookMedical} /></i>
              </div>
              <span className="carta-detalle">**** **** **** 2321</span>
            </div>

            <div className="carta-payment light-purple">
              <div className="carta-header">
                <div className="amount">
                  <span className="ctitulo font-bold">Nuevos usuarios:</span>
                  <span className="amount-valor font-medium">35</span>
                </div>
                <i className="cartaicon dark-purple"><FontAwesomeIcon icon={faUserPlus} /></i>
              </div>
              <span className="carta-detalle">+12.4% de nuevos usuarios</span>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="tabla-wrapper">
          <h3 className="tabla-titulo text-blue-800">APIs Del Proyecto</h3>
          <div className="tabla-cont ">
            <table>
              <thead className='text-white font-bold bg-blue-800'>
                <tr>
                  <th>API</th>
                  <th>Descripción</th>
                  <th>Estatus</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td>Esta API ofrece una forma segura y confiable de autenticación, permitiendo a los usuarios iniciar sesión en la plataforma con sus cuentas de Google existentes.</td>
                  <td>Disponible</td>
                  <td>Login</td>
                </tr>

                <tr>
                  <td>Facebook</td>
                  <td>Esta API permite a los usuarios iniciar sesión en sus cuentas de Med-Health utilizando sus credenciales de Facebook.</td>
                  <td>Disponible</td>
                  <td>Login</td>
                </tr>

                <tr>
                  <td>EmailJS</td>
                  <td>Esta API permite a nuestro sistema de salud y medicina enviar notificaciones por correo electrónico de manera eficiente, lo que garantiza una comunicación efectiva con nuestros usuarios y profesionales de la salud.</td>
                  <td>Disponible</td>
                  <td>Comunicación</td>
                </tr>

                <tr>
                  <td>Google Books</td>
                  <td>Esta API permite a los usuarios buscar, explorar y obtener información detallada sobre libros relacionados con la salud y la medicina.</td>
                  <td>Disponible</td>
                  <td>Información</td>
                </tr>

                <tr>
                  <td>GitHub</td>
                  <td>La API de inicio de sesión de GitHub, que permite a los usuarios autenticarse utilizando sus cuentas de GitHub.</td>
                  <td>Disponible</td>
                  <td>Login</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>

  )
}

export default Dashboard;