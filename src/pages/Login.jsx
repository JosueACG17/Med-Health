import React from "react";
import imagen from "../img/login.png"
import "../styles/login.css";

function Login() {
    return (
        <>
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div
                        className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
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
                                Siempre Med-Health
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
                                    Inicia Sesion
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
                                        <input
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                            className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor="remember_me"
                                            className="ml-2 block text-sm text-gray-900"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="text-indigo-400 hover:text-blue-500">
                                            No tienes cuenta? Registrate
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="h-px w-16 bg-black" />
                                    <span className="font-normal text-black">or continue with</span>
                                    <span className="h-px w-16 bg-black" />
                                </div>
                                <div className="flex flex-row justify-center items-center space-x-3">
                                    <a
                                        href="https://www.behance.net/ajeeshmon"
                                        target="_blank"
                                        className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg   bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            className="w-4 h-4"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                                        />
                                    </a>
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        class="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-red-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            class="w-4 h-4 text-white-icon"
                                            src="https://cdn.jsdelivr.net/npm/simple-icons@4.0.1/icons/instagram.svg"
                                            alt="Instagram"
                                        />
                                    </a>

                                    <a
                                        href="https://www.google.com"
                                        target="_blank"
                                        class="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-yellow-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            class="w-4 h-4 text-white-icon"
                                            src="https://cdn.jsdelivr.net/npm/simple-icons@4.0.1/icons/google.svg"
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