import React, { useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import "../styles/bface.css";

function Facebook() {
  const respuestaFacebook = (respuesta) => {
    localStorage.setItem("respuestaFacebook", JSON.stringify(respuesta));
    handleLoginRedirect(); // Llama a la función de redirección
  }

  useEffect(() => {
    const respuesta = JSON.parse(localStorage.getItem("respuestaFacebook"));

    if (respuesta && respuesta.name && respuesta.email) {
      handleLoginRedirect(); // Llama a la función de redirección si ya ha iniciado sesión
    }
  }, []);

  const handleLoginRedirect = () => {
    window.location.href = "/home"; // Redirecciona al usuario a la página de inicio
  };

  return (
    <div className="App">
      <FacebookLogin
        appId="2189783534558219"
        autoLoad={false}
        fields="name,email,picture"
        callback={respuestaFacebook}
        textButton="Facebook"
        icon="fa-facebook"
        cssClass="iconoface"
      />
    </div>
  );
}

export default Facebook;
