import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faList, faRightFromBracket, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { googleLogout } from '@react-oauth/google';
import logo from "../img/logo.png"
import "../styles/menu.css";

function MenuDash (){

    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || {});

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

  {/* CERRAR SESION CON DATOS REGISTRADOS */}
  const logoutRegistered = () => {
    localStorage.removeItem("userRegistered");
};

    const handleLogout = () => {
        logoutFacebook(); // Llama a la función para cerrar sesión en Facebook
        logOut(); // Llama a la función para cerrar sesión en Google
        logoutRegistered();
      };

    return(
        <>
        <div className="siderbar">
            <div className="perfil"> 
            <img src={logo } ></img>
            </div>
            <ul className="menu">
                <li>
                    <a href="/dashboard">
                        <i><FontAwesomeIcon icon={faHouse} /></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="/usuarios">
                        <i><FontAwesomeIcon icon={faList} /></i>
                        <span>Tablas</span>
                    </a>
                </li>

                <li>
                    <a href="/home">
                        <i><FontAwesomeIcon icon={faDoorOpen} /></i>
                        <span>Home</span>
                    </a>
                </li>

                <li>
                    <a onClick={handleLogout} href="/">
                        <i><FontAwesomeIcon icon={faRightFromBracket} /></i>
                        <span>Cerrar Sesión</span>
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default MenuDash;