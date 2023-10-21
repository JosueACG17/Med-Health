import React from "react";
import Header from "../components/Header";
import reloj from "../img/reloj.png";

function Serviciosdos() {
    return (
      <>
        <Header />
        <div className="banner2 bg-cover h-55vh text-center flex items-center justify-center">
          <div className="banner-texto">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              ¡EN MED-HEALTH, LO IMPOSIBLE ES POSIBLE
            </h1>
          </div>
        </div>
        <div className="Div-info flex flex-wrap bg-blue-500">
          <div className="item h-210px w-full md:w-1/2 lg:w-1/5 font-fantasy font-semibold grid place-items-center">
            <p className="Tit text-2xl md:text-3xl mb-5 text-center">Haz Una Cita!</p>
            <p className="Sub1 underline text-shadow-6 text-orange-200 font-normal mb-5 text-center">
              Horarios De Atención
            </p>
            <div className="Centrar flex flex-col md:flex-row items-center p-5">
              <div className="divreloj mb-3 md:mr-8 md:mb-0">
                <img src={reloj} className="reloj w-24 md:w-40" alt="Reloj"></img>
              </div>
              <div className="divbotones mb-3 md:ml-8 md:mb-0">
                <div className="button-container flex-grow-1 w-full">
                  <button
                    type="button"
                    className="list-group-item list-group-item-action w-full md:w-80 rounded-lg"
                  >
                    Lunes 10:00 a 20:30
                  </button>
                </div>
                <div className="button-container flex-grow-1 w-full">
                  <button
                    type="button"
                    className="list-group-item list-group-item-action w-full md:w-80 rounded-lg"
                  >
                    Martes - Viernes 10:00 a 18:30
                  </button>
                </div>
                <div className="button-container flex-grow-1 w-full">
                  <button
                    type="button"
                    className="list-group-item list-group-item-action w-full md:w-80 rounded-lg"
                  >
                    Sábado - Domingo 10:00 a 15:00
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="item h-210px w-full md:w-1/2 lg:w-1/5 font-fantasy font-semibold grid place-items-center">
            <p className="Tit text-2xl md:text-3xl text-center">Tu Ciudad</p>
          </div>
  
          <div className="item h-210px w-full md:w-1/2 lg:w-1/5 font-fantasy font-semibold grid place-items-center">
            <p className="Tit text-2xl md:text-3xl text-center">Tus Datos</p>
            <div className="mb-3 w-full md:w-80 md:mr-8 text-center rounded-lg">
              <input
                type="text"
                className="form-control input w-full md:w-64"
                id="exampleFormControlInput1"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-3 w-full md:w-80 md:mr-8 text-center rounded-lg">
              <input
                type="text"
                className="form-control input w-full md:w-64"
                id="exampleFormControlInput1"
                placeholder="Apellidos"
              />
            </div>
            <div className="mb-3 w-full md:w-80 md:mr-8 text-center rounded-lg">
              <input
                type="email"
                className="form-control input w-full md:w-64"
                id="exampleFormControlInput1"
                placeholder="Tucorreo@gmail.com"
              />
            </div>
          </div>
  
          <div className="item h-210px w-full md:w-1/2 lg:w-1/5 font-fantasy font-semibold grid place-items-center">
            <p className="Tit text-2xl md:text-3xl text-center">Doctores</p>
          </div>
          <div className="item h-210px w-full md:w-1/2 lg:w-1/5 font-fantasy font-semibold grid place-items-center">
            <p className="Tit text-2xl md:text-3xl text-center">Es una Emergencia</p>
            <p className="text-center">Agenda tu cita</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Serviciosdos;
