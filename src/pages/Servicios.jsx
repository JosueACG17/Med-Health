/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header";
import Imagen from "../img/reloj.png";

function Servicios() {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
                <div className="h-100% rounded-lg bg-gray-200 w-fit">
                    <div>
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <strong className="block text-xs font-medium uppercase text-gray-400">
                                    General
                                </strong>
                                <ul className="mt-2 space-y-1">
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                                        >
                                            Perfil
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Cursos
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Libros
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Citas
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Calendario
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong className="block text-xs font-medium uppercase text-gray-400">
                                    Soporte Técnico
                                </strong>
                                <ul className="mt-2 space-y-1">
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Actualizaciones
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Ayuda
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Configuración
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong className="block text-xs font-medium uppercase text-gray-400">
                                    Perfil
                                </strong>
                                <ul className="mt-2 space-y-1">
                                    <li>
                                        <a
                                            href=""
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Detalles
                                        </a>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                        <form action="/logout">
                                            <button
                                                type="submit"
                                                className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                Salir
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-fit rounded-lg bg-gray-200 inline-block flex items-center justify-content: flex-start align-items: flex-end">
                    <img src={Imagen} className="object-scale-down object-center w-24 h-24 md:object-top ml-5" alt="Imagen"></img>
                    <div className="divbotones mb-3 md:ml-8 md:mb-0">

                        <div className="button-container flex-grow-1 w-full">
                            <button
                                type="button"
                                className="list-group-item list-group-item-action w-full md:w-80 rounded-lg relative inline-flex items-center p-0.5 mb-2 mr-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus-ring-blue-800"
                            >
                                <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Lunes 10:00 a 20:30
                                </span>
                            </button>
                        </div>
                        <div className="button-container flex-grow-1 w-full">
                            <button
                                type="button"
                                className="list-group-item list-group-item-action w-full md:w-80 rounded-lg relative inline-flex items-center p-0.5 mb-2 mr-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus-ring-blue-800"
                            >
                                <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Martes - Viernes 10:00 a 18:30
                                </span>
                            </button>
                        </div>
                        <div className="button-container flex-grow-1 w-full">
                            <button
                                type="button"
                                className="list-group-item list-group-item-action w-full md:w-80 rounded-lg relative inline-flex items-center p-0.5 mb-2 mr-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus-ring-blue-800"
                            >
                                <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Sábado - Domingo 10:00 a 15:00                                </span>
                            </button>
                        </div>
                    </div>

                    <section>
                        <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                                <div className="w-full mx-auto">
                                    <h1 className="text-4xl italic font-semibold">Med Healt siempre enfocado en la experiencia de sus usuarios.</h1>
                                    <br></br>
                                    <h2>Para nuestro equipo usted es lo más importante.</h2>
                                    <p>
                                        Buscamos darle a todos nuestros usuarios una experiencia única y un espacio en dónde se sienta cómodos de hablar con nuestros especialistas y con otros usuarios, usando las mejores tecnologías para brindarle la seguridad y privacidad que se merecen.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        className="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={12} cy={12} r={9} />
                                        <line x1="3.6" y1={15} x2="14.15" y2={15} />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(72 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(144 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(216 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(288 12 12)"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                                    <h2>Nuestra Libreria.</h2>
                                    <p>
contamos con una amplía gama de libros relacionados a temas de la salud, tanto física, como mental, los cuáles son compleamente gratuitos para todos nuestros usuarios
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        className="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={12} cy={12} r={9} />
                                        <line x1="3.6" y1={15} x2="14.15" y2={15} />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(72 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(144 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(216 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(288 12 12)"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                                    <h2>Short length headline.</h2>
                                    <p>
                                        Free and Premium themes, UI Kit's, templates and landing pages built
                                        with Tailwind CSS, HTML &amp; Next.js.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        className="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={12} cy={12} r={9} />
                                        <line x1="3.6" y1={15} x2="14.15" y2={15} />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(72 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(144 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(216 12 12)"
                                        />
                                        <line
                                            x1="3.6"
                                            y1={15}
                                            x2="14.15"
                                            y2={15}
                                            transform="rotate(288 12 12)"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                                    <h2>Short length headline.</h2>
                                    <p>
                                        Free and Premium themes, UI Kit's, templates and landing pages built
                                        with Tailwind CSS, HTML &amp; Next.js.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>

            </div>

        </div>
    )
}

export default Servicios;