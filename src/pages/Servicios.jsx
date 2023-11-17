/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHome, FaUsers, FaBriefcase, FaEnvelope } from 'react-icons/fa';


function Servicios() {
    return (
        <div>
            <Header></Header>
            <div className="relative mt-0 flex flex-col-reverse py-12 lg:pt-0 lg:flex-col lg:pb-0" style={{ zIndex: 1 }}>
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 " >
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        style={{ zIndex: 1 }}
                        src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-12 lg:my-40 lg:max-w-lg lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Conoce nuestros
                            <br className="hidden md:block" />
                            {' '}
                            <span className="inline-block underline text-deep-purple-accent-700">
                                Servicios
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-sm font-medium text-justify text-gray-800 md:text-lg">
                            En Med-Health nos preocupamos por todos nuestros usuarios y procuramos entregarles los mejores servicios, para atención médica y psicológica, por lo que tenemos una actitud de servicio en pro del bienestar de los derechoambientes, para esto ofrecemos los siguientes servicios:
                        </p>
                    </div>
                </div>
            </div>


            {/*SEGUNDO HEADER */}

            <div className="mx-auto max-w-3xl text-center mt-14">
                <h1
                    className="bg-gradient-to-r from-cyan-800 via-blue-700 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                    Descubre Todo Lo Que

                    <span className="sm:block"> Puedes Encontrar</span>
                </h1>

                <p className="mx-auto mt-4 text-justify max-w-xl sm:text-lg/relaxed">
                    Descubre una gama de servicios diseñados para cubrir tus necesidades.
                    Explora nuestros servicios y encuentra soluciones a medida que te harán la vida más conveniente y eficiente.
                </p>

            </div>

            {/*CARTAS */}
            <section className="text-gray-600 body-font text-justify">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-8">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        </div>

                        <div className="flex flex-wrap -m-4">

                            <div className="xl:w-1/2 md:w-1/2 p-4">
                                <div className="bg-gray-300 p-6 rounded-lg">
                                    <a
                                        href="/libreria"
                                        className="flex flex-col items-center bg-blue-700 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 hover:bg-violet-900"
                                    >
                                        <img
                                            className="object-cover w-full rounded-t-lg h-92 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="https://images.pexels.com/photos/8199629/pexels-photo-8199629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                                Nuestra Librería
                                            </h5>
                                            <p className="mb-3 font-normal text-white dark:text-white">
                                                En este apartado de nuestros servicios, ofrecemos a todos nuestros usuarios,
                                                la oportunidad de acceder de manera completamente gratuita a nuestra libreria,
                                                para que se sientan libres de leer los libros que necesiten, contando con una amplía gama de libros para fomentar la auto ayuda y el auto descubrimiento.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="xl:w-1/2 md:w-1/2 p-4">
                                <div className="bg-gray-300 p-6 rounded-lg">
                                    <a
                                        href="/companieros"
                                        className="flex flex-col items-center  bg-blue-700 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 hover:bg-violet-900"
                                    >
                                        <img
                                            className="object-cover w-full rounded-t-lg h-92 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="https://images.pexels.com/photos/8131025/pexels-photo-8131025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"                                            
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                                Compañia para ti
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-white">
                                            En nuestro equipo, creemos que la comunicación y el efecto es clave para el éxito. 
                                            Trabajamos juntos con nuestras mascotas para asegurarnos de que nuestros clientes reciban el acompañamiento que necesitan.
                                            Nos enorgullece trabajar juntos y de hacer una diferencia en la vida de nuestros clientes
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="xl:w-1/2 md:w-1/2 p-4">
                                <div className="bg-gray-300 p-6 rounded-lg">
                                    <a
                                        href="/mapa"
                                        className="flex flex-col items-center bg-blue-700 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 hover:bg-violet-900"
                                    >
                                        <img
                                            className="object-cover w-full rounded-t-lg h-92 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="https://i.pinimg.com/236x/5b/4b/09/5b4b09f480e6e6029ad9398bf324db77.jpg"
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                                Mapa Hospitales
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-white">
                                            Bienvenido a nuestra red de hospitales comprometidos con tu salud y bienestar, aventurate entre todos
                                             nuestros centros médicos que están estratégicamente ubicados para brindarte acceso rápido y conveniente a servicios de calidad.
                                             Confía en nosotros para cuidar de ti y tus seres queridos en cada paso de tu camino hacia la salud.

                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="xl:w-1/2 md:w-1/2 p-4">
                                <div className="bg-gray-300 p-6 rounded-lg">
                                    <a
                                        href="/noticias"
                                        className="flex flex-col items-center bg-blue-700 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 hover:bg-violet-900"
                                    >
                                        <img
                                            className="object-cover w-full rounded-t-lg h-92 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="https://images.pexels.com/photos/8199629/pexels-photo-8199629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                                Nuestras Noticias
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-white">
                                                En este apartado de nuestros servicios, ofrecemos a todos nuestros usuarios,
                                                la oportunidad de acceder de manera completamente gratuita a nuestra libreria,
                                                para que se sientan libres de leer los libros que necesiten, contando con una amplía gama de libros para fomentar la auto ayuda y el auto descubrimiento.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer></Footer>

        </div>
    )
}

export default Servicios;