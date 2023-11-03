import React from 'react';
import GitHubLogin from 'react-github-login';

const clientId = '9e1c39835ccd16861e17'; // Reemplaza con tu propio ID de cliente de GitHub
const onSuccess = async (response) => {
  const accessToken = response.code;

  if (accessToken) {
    // Intercambia el código de autorización por un token de acceso
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: '706e93ed80f59d84bd789b54142efa4f52ac4abb', // Reemplaza 'tu_client_secret' con tu propio cliente secreto de GitHub
        code: accessToken,
      }),
    });

    const tokenData = await tokenResponse.json();
    const githubToken = tokenData.access_token;

    // Obtiene los datos del usuario
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const userData = await userResponse.json();

    // Guarda los datos del usuario en el localStorage
    localStorage.setItem('githubData', JSON.stringify(userData));
  }
};

const onFailure = (response) => console.error(response);

const GitHub = () => (
  <GitHubLogin clientId={clientId} redirectUri="http://localhost:5173/home" onSuccess={onSuccess} onFailure={onFailure} />
);

export default GitHub;
