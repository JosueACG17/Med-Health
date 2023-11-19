import React, { useState } from "react";
import axios from "axios";
import imagen from "../img/hospital3.jpeg"
import "../styles/registro.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Registro() {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

   // Crear usuarios
   const initialValues = {
    Nombre: "",
    Apellido: "",
    UserName: "",
    Password: "",
    isActive: true,
  };

  const [newuser, setNewUser] = useState(initialValues);
  const navegacion = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users", newuser)
      .then((response) => {
        alert("Usuario creado correctamente");
        navegacion("/");
      })
      .catch((error) => {
        console.log("Hubo un error al crear usuario", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newuser, [name]: value });
  };

  return (
    <>
      <div className="relative min-h-screen flex">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="hidden md:block sm:w-1/2 xl:w-3/6 h-screen">
            <img
              className="h-full w-full object-fit-cover"
              src={imagen}
              alt="FondoIzquierdo"
            />
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-screen w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white items-center mx-auto">
            <div className="max-w-md w-full space-y-7 ">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  ¡Bienvenido de Nuevo!
                </h2>
                <p className="mt-2 text-sm text-blue-700 font-bold">Por favor Regístrate</p>
              </div>

              <form className="space-y-4" action="#" method="POST" onSubmit={handleSubmit}> 
                <input type="hidden" name="remember" defaultValue="true" />
                
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Nombre Completo:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 100 8 4 4 0 000-8zm-2 10c-4 1.5-6 2.5-6 5v2h16v-2c0-2.5-2-3.5-6-5z" />
                    </svg>
                    <input
                      className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                      type="text"
                      id="nombre"
                      name="Nombre"
                      value={newuser.Nombre}
                      onChange={handleChange}
                      placeholder="Ingresa tu Nombre"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Nombre de Usuario:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a4 4 0 100 8 4 4 0 000-8zm0 10c4 0 8 2 8 5v1H4v-1c0-3 4-5 8-5z" />
                    </svg>

                    <input
                      className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                      type="text"
                      id="usuario"
                      name="UserName"
                      value={newuser.UserName}
                      onChange={handleChange}
                      placeholder="Ingresa tu Username"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Correo Electrónico:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                      type="email"
                      id="apellido"
                      name="Apellido"
                      value={newuser.Apellido}
                      onChange={handleChange}
                      placeholder="Ingresa tu correo"
                      required
                    />
                  </div>
                </div>


                <div className="mt-4">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                    Contraseña:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <input
                      className="w-full text-base px-4 py-2 pr-10 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500 pl-11"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Ingresa tu contraseña"
                      id="password"
                      name="Password"
                      required
                      value={newuser.Password}
                      onChange={handleChange}
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                </div>

                <div>
                    <button
                      type="submit"
                      className="w-full flex mt-8 justify-center bg-gradient-to-r from-indigo-700 to-blue-700 hover:bg-gradient-to-l hover:from-blue-900 hover:to-cyan-900 text-gray-100  p-4 md:p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 font-sans"
                    >
                      Registrate
                    </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 font-bold text-center text-md text-gray-700">
                  <span>¿Ya tienes una cuenta?</span>
                  <Link to="/" className="text-blue-700 hover:text-black no-underline hover: cursor-pointer transition ease-in duration-300"> Inicia Sesión</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;