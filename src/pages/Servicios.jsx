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
                        <p className="pr-5 mb-5 text-sm text-justify text-gray-700 md:text-lg">
                            En Med-Health nos preocupamos por todos nuestros usuarios y procuramos entregarles los mejores servicios, para atención médica y psicológica, por lo que tenemos una actitud de servicio en pro del bienestar de los derechoambientes, para esto ofrecemos los siguientes servicios:
                        </p>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="mt-7 ">
                <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">

                    <a href="#" className="flex items-center text-blue-700 font-bold -px-2 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>

                        <span className="mx-2">Servicios</span>
                    </a>

                </div>
            </div>

            {/*SEGUNDO HEADER */}

            <div className="mx-auto max-w-3xl text-center">
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
                                <div className="bg-gray-100 p-6 rounded-lg">
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
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Nuestra Librería
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-white">
                                                En este apartado de nuestros servicios, ofrecemos a todos nuestros usuarios,
                                                la oportunidad de acceder de manera completamente gratuita a nuestra libreria,
                                                para que se sientan libres de leer los libros que necesiten, contando con una amplía gama de libros para fomentar la auto ayuda y el auto descubrimiento.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="xl:w-1/2 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <a
                                        href="/companieros"
                                        className="flex flex-col items-center dark:bg-red-100 bg-blue-700 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 hover:bg-violet-900"
                                    >
                                        <img
                                            className="object-cover w-full rounded-t-lg h-92 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="https://images.pexels.com/photos/8131025/pexels-photo-8131025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"                                            
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Terapia Asistida Por Animales
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-white">
                                            La interacción con los animales puede ayudar a reducir el estrés, la ansiedad y la depresión, 
                                            así como mejorar la comunicación y la autoestima. Además, 
                                            los animales pueden ser especialmente beneficiosos para personas con discapacidades físicas o mentales,
                                             ya que pueden ayudar a mejorar la movilidad, la coordinación y la concentración.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="xl:w-1/2 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
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
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Nuestra Librería
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-white">
                                                En este apartado de nuestros servicios, ofrecemos a todos nuestros usuarios,
                                                la oportunidad de acceder de manera completamente gratuita a nuestra libreria,
                                                para que se sientan libres de leer los libros que necesiten, contando con una amplía gama de libros para fomentar la auto ayuda y el auto descubrimiento.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="xl:w-1/2 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
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
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Nuestra Librería
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-white">
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