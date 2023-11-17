import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faList, faRightFromBracket, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { googleLogout } from '@react-oauth/google';
import logo from "../img/logo.png"
import "../styles/menu.css";

function MenuDash (){

    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || {});

    const logOut = () => {
      googleLogout();
      localStorage.removeItem('userProfile');
      setProfile([]);
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
                    <a href="#">
                        <i><FontAwesomeIcon icon={faUser} /></i>
                        <span>Perfil</span>
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
                    <a onClick={logOut} href="/">
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