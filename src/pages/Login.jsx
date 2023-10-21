import React from "react";
import imagen from "../img/doc_log.png"
import face from "../img/facebook.png"
import google from "../img/google.png"
import twiter from "../img/twiter.png"
import "../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div
                        className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/9741487/pexels-photo-9741487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
                        }}
                    >
                        <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0" />
                        <div
                            className="absolute triangle  min-h-screen right-0 w-16"
                            style={{}}
                        />
                        <a
                            href="https://codepen.io/uidesignhub"
                            target="_blank"
                            title="codepen aji"
                            className="flex absolute top-5 text-center text-gray-100 focus:outline-none"
                        >
                        </a>
                        <img
                            src={imagen}
                            className="h-96 absolute right-5 mr-5"
                        />
                        <div className="w-full  max-w-md z-10">
                            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                                Bienvenido aﾠﾠMed-Health
                            </div>
                        </div>

                        <ul className="circles">
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
                    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
                        <div className="max-w-md w-full space-y-8">
                            <div className="text-center">
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Inicia Sesión
                                </h2>
                            </div>

                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="relative">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Correo Electronico
                                    </label>
                                    <input
                                        className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                        type=""
                                        placeholder="Ingresa tu correo"
                                    />
                                </div>
                                <div className="mt-8 content-center">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Contraseña
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type=""
                                        placeholder="Ingresa tu contraseña"
                                    />
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
                                    <Link to="/">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-cyan-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                        Iniciar Sesión
                                    </button>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="h-px w-16 bg-black" />
                                    <span className="font-normal text-black">O inicia sesión con</span>
                                    <span className="h-px w-16 bg-black" />
                                </div>
                                <div className="flex flex-row justify-center items-center space-x-3">
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg hover:shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            className="w-9 h-9"
                                            src={face}
                                        />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        class="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  hover:shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            class="w-9 h-9 text-white-icon"
                                            src={twiter}
                                            alt="Instagram"

                                        />
                                    </a>

                                    <a
                                        href="https://www.google.com"
                                        target="_blank"
                                        class="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  hover:shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            class="w-9 h-9 text-white-icon"
                                            src={google}
                                            alt="Google"
                                        />
                                    </a>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Login;