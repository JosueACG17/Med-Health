import React, { useState } from 'react';
import MenuDash from "../components/MenuDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUsers, faBookMedical, faKitMedical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "../styles/dashboard.css";

function Dashboard (){
const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || {});

  const logOut = () => {
    googleLogout();
    localStorage.removeItem('userProfile');
    setProfile([]);
  };

    return(
        <>
       <MenuDash />
       <main className="menu-conte"> 
       <div className="header-wrapper">     
          <div className="header-titulo">
            <h1>Dashboard, Bienvenido {profile.name}</h1>
        </div>
        <div className="busca">
          <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
          <input type="text" placeholder="Buscar" />
        </div>
        </div> 

        
      {/* Cartas contenedir */}

      <div className="carta-cont">
        <h1 className="main-title">Datos</h1>
        <div className="carta-wrapper">

          <div className="carta-payment light-green">
            <div className="carta-header">
              <div className="amount">
                <span className="ctitulo">Usuarios</span>
                <span className="amount-valor">1356</span>
              </div>
              <i className="cartaicon"><FontAwesomeIcon icon={faUsers} /></i>
            </div>
            <span className="carta-detalle">+55% de usuarios</span>
          </div>

          <div className="carta-payment light-blue">
            <div className="carta-header">
              <div className="amount">
                <span className="ctitulo">Servicios</span>
                <span className="amount-valor">25</span>
              </div>
              <i className="cartaicon dark-blue"><FontAwesomeIcon icon={faKitMedical} /></i>
            </div>
            <span className="carta-detalle">**** **** **** 2321</span>
          </div>

          <div className="carta-payment light-red">
            <div className="carta-header">
              <div className="amount">
                <span className="ctitulo">Artículos</span>
                <span className="amount-valor">2500</span>
              </div>
              <i className="cartaicon dark-red"><FontAwesomeIcon icon={faBookMedical} /></i>
            </div>
            <span className="carta-detalle">**** **** **** 2321</span>
          </div>

          <div className="carta-payment light-purple">
            <div className="carta-header">
              <div className="amount">
                <span className="ctitulo">Nuevos usuarios</span>
                <span className="amount-valor">35</span>
              </div>
              <i className="cartaicon dark-purple"><FontAwesomeIcon icon={faUserPlus} /></i>
            </div>
            <span className="carta-detalle">+12.4% de nuevos usuarios</span>
          </div>
        </div>  
      </div>

      {/* Tabla */}
      <div className="tabla-wrapper">
        <h3 className="tabla-titulo">APIs Del Proyecto</h3>
        <div className="tabla-cont">
          <table>
            <thead>
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
              </tbody>
          </table>
        </div>
      </div>
    </main>
       </>
      
    )
}

export default Dashboard;