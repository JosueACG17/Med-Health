import React from "react";
import fondoo from "../img/fondoo.jpg"

function Error() {
    return (
        <>
            <div className="flex flex-col h-screen bg-white">
                <img
                    src={fondoo}
                    alt=""
                    className="object-cover w-full h-64"
                />

                <div className="flex items-center justify-center flex-1">
                    <div className="max-w-xl px-4 py-8 mx-auto text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Página no encontrada
                        </h1>

                        <p className="mt-4 text-gray-500 pb-5">
                            Intenta buscar la direccion correcta o regresa al inicio.
                        </p>

                        <a
                            className="group relative inline-flex items-center overflow-hidden rounded bg-blue-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                            href="/nosotros"
                        >
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>

                            <span className="text-sm font-medium transition-all group-hover:me-4">
                                Regresar
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error;