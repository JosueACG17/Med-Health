import React, { useState } from "react";
import axios from "axios";
import "../styles/modalform.css";

function FormMod({onCerrar, onUserAdded}){
    const handleCerrar = () => {
      onCerrar();
    };


     // Crear usuarios
   const initialValues = {
    Nombre: "",
    Apellido: "",
    UserName: "",
    Password: "",
    isActive: true,
  };

  const [newuser, setNewUser] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users", newuser)
      .then((response) => {
        handleCerrar();
        onUserAdded();
      })
      .catch((error) => {
        console.log("Hubo un error al crear usuario", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newuser, [name]: value });
  };

    return(
        <>
        <section className="modal-formulario">
            <div className="modal-cont">

            <button className="text-red-600 transition hover:text-white hover:bg-black float-right" onClick={handleCerrar}>
            <span className="sr-only">Cerrar formulario</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>

            <h1 className="modal-titulo">Registro de usuarios</h1>

            <form className="space-y-4" action="#" method="POST" onSubmit={handleSubmit}> 
                <input type="hidden" name="remember" defaultValue="true" />
                
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-black tracking-wide">
                    Nombre Completo:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-700 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 100 8 4 4 0 000-8zm-2 10c-4 1.5-6 2.5-6 5v2h16v-2c0-2.5-2-3.5-6-5z" />
                    </svg>
                    <input
                      className="w-full text-base px-4 py-2 border-b border-gray-700 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                      type="text"
                      id="nombre"
                      name="Nombre"
                      value={newuser.Nombre}
                      onChange={handleChange}
                      placeholder="Ingresar nombre"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-black tracking-wide">
                    Nombre de Usuario:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-700 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a4 4 0 100 8 4 4 0 000-8zm0 10c4 0 8 2 8 5v1H4v-1c0-3 4-5 8-5z" />
                    </svg>

                    <input
                      className="w-full text-base px-4 py-2 border-b border-gray-700 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                      type="text"
                      id="usuario"
                      name="UserName"
                      value={newuser.UserName}
                      onChange={handleChange}
                      placeholder="Ingresar nombre de usuario"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-black tracking-wide">
                    Correo Electrónico:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-700 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      className="w-full text-base px-4 py-2 border-b border-gray-700 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                      type="email"
                      id="apellido"
                      name="Apellido"
                      value={newuser.Apellido}
                      onChange={handleChange}
                      placeholder="Ingresar correo electrónico" 
                      required
                    />
                  </div>
                </div>


                <div className="mt-4">
                  <label className="text-sm font-bold text-black tracking-wide">
                    Contraseña:
                  </label>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-700 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <input
                      className="w-full text-base px-4 py-2 pr-10 border-b rounded-2xl border-gray-700 focus:outline-none focus:border-indigo-500 pl-11"
                      placeholder="Ingresar contraseña"
                      id="password"
                      name="Password"
                      required
                      value={newuser.Password}
                      onChange={handleChange}
                    />
                   
                  </div>

                </div>

                <div>
                    <button
                      type="submit"
                      className="w-full flex mt-8 justify-center bg-gradient-to-r from-indigo-700 to-blue-700 hover:bg-gradient-to-l hover:from-blue-900 hover:to-cyan-900 text-gray-100  p-4 md:p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 font-sans"
                    >
                      Registrar usuario
                    </button>
                </div>            
              </form>

            </div>
        </section>
        </>
    )
}

export default FormMod;