import React, { useEffect, useState } from 'react';
import imagen from "../img/doctoraa.png"
import "../styles/login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BGoogle from '../components/BGoogle';
import BGithub from '../components/BGithub';
import BFacebook from '../components/BFacebook'

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
                        <div className="absolute bg-gradient-to-b from-blue-800 to-gray-900 opacity-80 inset-0 z-0" />
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

                    <div className="md:flex md:items-center w-full md:justify-center sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-10 sm:rounded-lg md:rounded-none bg-white ">
                        <div className="max-w-md w-full mr-10">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-blue-900 font-serif">
                                    Inicia Sesión
                                </h2>
                            </div>

                            <form className="mt-4 space-y-5" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="relative">
                                    <label className="ml-3 text-sm font-bold text-gray-800 tracking-wide">
                                        Correo Electrónico:
                                    </label>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <input
                                            className="w-full text-base px-4 py-2 border-b border-gray-600 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                                            type="email"
                                            placeholder="Ingresa tu correo"
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="mt-6">
                                    <label className="text-sm font-bold text-gray-800 tracking-wide">
                                        Contraseña:
                                    </label>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-600 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                                        <a href="/registro" className="text-indigo-400 hover:text-black font-semibold">
                                            No tienes cuenta? Registrate
                                        </a>
                                    </div>
                                </div>
                                <div >
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-800 hover:to-cyan-800 text-gray-100  p-4 md:p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 font-sans"
                                    >
                                        Iniciar Sesión
                                    </button>

                                </div>
                                <div className="flex items-center justify-center space-x-3">
                                    <span className="h-px w-28 bg-black" />
                                    <span className="font-semibold text-black">O continuar con</span>
                                    <span className="h-px w-28 bg-black" />
                                </div>
                                <div className="justify-center ">
                                    {/* BOTON DE GOOGLE */}
                                    <BGoogle></BGoogle>
                                    {/*BOTON DE GITHUB */}
                                    <BGithub></BGithub>

                                    {/*BOTON DE MICROSOFT */}

                                    <BFacebook></BFacebook>
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
