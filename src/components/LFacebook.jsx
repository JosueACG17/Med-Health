import React from "react";
import FacebookLogin from 'react-facebook-login';

function LFacebook() {
    const respuestaFacebook = (respuesta) => {
        console.log(respuesta);
    }

    return (
        <>
            <FacebookLogin
                appId="1493559498146306"
                autoLoad={false}
                fields="name,email,picture"
                callback={respuestaFacebook}
                textButton="Facebook" />

        </>
    )
}

export default LFacebook;