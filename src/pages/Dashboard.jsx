import React, { useState, useEffect } from 'react';
import MenuDash from "../components/MenuDash";
import imagen from "../img/header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBookMedical, faKitMedical } from '@fortawesome/free-solid-svg-icons';
import "../styles/dashboard.css";

function Dashboard() {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || JSON.parse(localStorage.getItem('userRegistered')) || JSON.parse(localStorage.getItem("respuestaFacebook")) || {});
  const respuesta = JSON.parse(localStorage.getItem("respuestaFacebook"));

  //Contador de usuarios
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/users/count')
      .then(response => {
        if (!response.ok) {
          // Manejar respuestas no exitosas
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCount(data.count);
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener el conteo de usuarios:', error);
      });
  }, []);

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
                    src={profile.picture || imagen || respuesta.picture.data.url}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <p className="ms-2 hidden text-left text-xs sm:block">
                    <strong className="block font-medium">{profile.name || respuesta.name || "Nombre admin"}</strong>

                    <span className="text-gray-500">{profile.email || respuesta.email || "correo@gmail.com"}  </span>
                  </p>
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
        {/* Cartas contenedor */}

        <div className="carta-cont">
          <h1 className="main-title text-blue-800 font-bold text-2xl">Datos Actuales:</h1>
          <div className="carta-wrapper flex justify-center">

            <div className="carta-payment light-green">
              <div className="carta-header">
                <div className="amount">
                  <span className="ctitulo font-bold">Usuarios:</span>
                  <span className="amount-valor font-medium">{count || "0"}</span>
                </div>
                <i className="cartaicon"><FontAwesomeIcon icon={faUsers} /></i>
              </div>
            </div>

            <div className="carta-payment light-blue">
              <div className="carta-header">
                <div className="amount">
                  <span className="ctitulo font-bold">Servicios:</span>
                  <span className="amount-valor font-medium">10</span>
                </div>
                <i className="cartaicon dark-blue"><FontAwesomeIcon icon={faKitMedical} /></i>
              </div>
            </div>

            <div className="carta-payment light-red">
              <div className="carta-header">
                <div className="amount">
                  <span className="ctitulo font-bold">Artículos:</span>
                  <span className="amount-valor font-medium">50</span>
                </div>
                <i className="cartaicon dark-red"><FontAwesomeIcon icon={faBookMedical} /></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="tabla-wrapper">
          <h3 className="tabla-titulo text-blue-800 text-2xl font-bold">APIS Del Proyecto:</h3>
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
                  <td className='font-bold'>Google</td>
                  <td>Esta API ofrece una forma segura y confiable de autenticación, permitiendo a los usuarios iniciar sesión en la plataforma con sus cuentas de Google existentes.</td>
                  <td className='text-green-700 font-bold'>Disponible</td>
                  <td className='tdcat'>Login</td>
                </tr>

                <tr>
                  <td className='font-bold'>Facebook</td>
                  <td>Esta API permite a los usuarios iniciar sesión en sus cuentas de Med-Health utilizando sus credenciales de Facebook.</td>
                  <td className='text-green-700 font-bold'>Disponible </td>
                  <td className='tdcat'>Login</td>
                </tr>

                <tr>
                  <td className='font-bold'>EmailJS</td>
                  <td>Esta API permite a nuestro sistema de salud y medicina enviar notificaciones por correo electrónico de manera eficiente, lo que garantiza una comunicación efectiva con nuestros usuarios y profesionales de la salud.</td>
                  <td className='text-green-700 font-bold'>Disponible</td>
                  <td className='tdcat'>Comunicación</td>
                </tr>

                <tr>
                  <td className='font-bold'>Google Books</td>
                  <td>Esta API permite a los usuarios buscar, explorar y obtener información detallada sobre libros relacionados con la salud y la medicina.</td>
                  <td className='text-green-700 font-bold'>Disponible</td>
                  <td className='tdcat'>Información</td>
                </tr>

                <tr>
                  <td className='font-bold'>Leaflet</td>
                  <td>Leaflet ofrece mapas interactivos que está diseñado con simplicidad, rendimiento y facilidad de uso en mente. Funciona de manera eficiente en todas las principales plataformas de escritorio y móviles.</td>
                  <td className='text-green-700 font-bold text-center'>Disponible</td>
                  <td className='tdcat'>Mapas</td>
                </tr>


                <tr>
                  <td className='font-bold'>YouTube Data API</td>
                  <td>La API de datos de YouTube te permite agregar una variedad de funciones de YouTube a tu aplicación, puedes subir videos, administrar listas de reproducción y suscripciones.</td>
                  <td className='text-green-700 font-bold text-center'>Disponible</td>
                  <td className='tdcat'>Multimedia</td>
                </tr>

                <tr>
                  <td className='font-bold'>Cat Api</td>
                  <td>La API de Cat es una API de servicio público que proporciona imágenes, hechos, chistes y citas sobre gatos de forma gratuita.</td>
                  <td className='text-green-700 font-bold text-center'>Disponible</td>
                  <td className='tdcat'>Animales</td>
                </tr>

                <tr>
                  <td className='font-bold'>Dog Api</td>
                  <td>La API de Dog es una API de servicio público que proporciona información e imágenes de perros para tu aplicación.</td>
                  <td className='text-green-700 font-bold text-center'>Disponible</td>
                  <td className='tdcat'>Animales</td>
                </tr>

                <tr>
                  <td className='font-bold'>News Api</td>
                  <td>News API es una API REST que devuelve resultados de búsqueda JSON para artículos de noticias actuales e históricos publicados por más de 80,000 fuentes en todo el mundo. </td>
                  <td className='text-green-700 font-bold text-center'>Disponible</td>
                  <td className='tdcat'>Noticias</td>
                </tr>

                <tr>
                  <td className='font-bold'>OpenWeather API</td>
                  <td>La API de OpenWeather proporciona información meteorológica actual y pronósticos para ciudades de todo el mundo. Puedes obtener datos como la temperatura, la velocidad del viento, la humedad y más.</td>
                  <td className='text-green-700 font-bold text-center'>Disponible</td>
                  <td className='tdcat'>Clima</td>
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