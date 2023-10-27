import React, { useEffect, useState } from 'react';
import imagen from "../img/doctoraa.png"
import "../styles/login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

function Login() {
    const text = "Bienvenido a            Med-Health";
    const [animatedText, setAnimatedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setAnimatedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('userProfile')) || []);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    const userProfile = res.data;
                    setProfile(userProfile);
                    localStorage.setItem('userProfile', JSON.stringify(userProfile));
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    useEffect(() => {
        if (profile && profile.name && profile.email) {
            window.location.href = '/'; // Cambia '/inicio' por la URL de la página a la que deseas redirigir al usuario
        }
    }, [profile]);

    return (
        <>
            <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div
                        className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-8 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/9741487/pexels-photo-9741487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
                        }}
                    >
                        <div className="absolute bg-gradient-to-b from-blue-600 to-gray-900 opacity-80 inset-0 z-0" />
                        <div
                            className="absolute triangle  min-h-screen right-0 w-16"
                            style={{}}
                        />
                        <img
                            src={imagen}
                            className=" h-90 absolute right-0 ml-20"
                            style={{ zIndex: 1 }}
                        />
                        <div className="w-full  max-w-md z-10">
                            <div className="sm:text-5xl xl:text-4xl font-bold leading-tight mb-6 custom-font">
                                {animatedText}
                            </div>
                        </div>

                        <ul className="circles ">
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>

                    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-10 sm:rounded-lg md:rounded-none bg-white ">
                        <div className="max-w-md w-full space-y-9">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-blue-900 font-serif">
                                    Inicia Sesión
                                </h2>
                            </div>

                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="relative">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Correo Electrónico:
                                    </label>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <input
                                            className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                                            type="email"
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
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <input
                                            className="w-full text-base px-4 py-2 pr-10 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500 pl-11"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Ingresa tu contraseña"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>

                                </div>


                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <label
                                            htmlFor="remember_me"
                                            className="ml-2 block text-sm text-gray-900"
                                        >
                                            ﾠﾠﾠﾠ
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="/registro" className="text-indigo-400 hover:text-black">
                                            No tienes cuenta? Registrate
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-cyan-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 font-sans"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="h-px w-20 bg-black" />
                                    <span className="font-normal text-black">O continuar con</span>
                                    <span className="h-px w-20 bg-black" />
                                </div>
                                <div className="flex justify-center space-x-6">
                                    <div>
                                        <button
                                            type="submit"
                                            onClick={() => login()}
                                            className="w-full items-center block px-12 py-2.5 text-base font-medium text-center bg-white text-blue-700 transition duration-500 ease-in-out transform border-2 border-gray shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-black hover:text-white"
                                        >
                                            <div className="flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    className="w-6 h-6"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <defs>
                                                        <path
                                                            id="a"
                                                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                        />
                                                    </defs>
                                                    <clipPath id="b">
                                                        <use xlinkHref="#a" overflow="visible" />
                                                    </clipPath>
                                                    <path
                                                        clipPath="url(#b)"
                                                        fill="#FBBC05"
                                                        d="M0 37V11l17 13z"
                                                    />
                                                    <path
                                                        clipPath="url(#b)"
                                                        fill="#EA4335"
                                                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                                                    />
                                                    <path
                                                        clipPath="url(#b)"
                                                        fill="#34A853"
                                                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                                                    />
                                                    <path
                                                        clipPath="url(#b)"
                                                        fill="#4285F4"
                                                        d="M48 48L17 24l-4-3 35-10z"
                                                    />
                                                </svg>
                                                <span className="ml-4">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Google
                                                        </font>
                                                    </font>
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full items-center block px-11 py-2.5 text-base font-medium text-center bg-blue-600 text-white transition duration-500 ease-in-out transform border-2 border-gray shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-black hover:text-white"
                                        >
                                            <div className="flex items-center justify-center space-x-2">
                                                {/* Icono de Facebook (local) */}
                                                <svg
                                                    className="w-6 h-6 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#FFFFFF"
                                                        d="M27 14h-3v-3c0-1.657 1.343-3 3-3h3V6.785L24.215 6 21 10.215V11h-6c-4.418 0-8 3.582-8 8v6h-3v5h3v13h9v-13h7l1-5h-8v-3c0-2.481 2.019-4.5 4.5-4.5h3V14z"
                                                    />
                                                </svg>
                                                <span className="ml-4">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Facebook
                                                        </font>
                                                    </font>
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
