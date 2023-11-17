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
                <div className="relative flex w-full max-w-[48rem] h-[24rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
                <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src="https://th.bing.com/th/id/OIG.KFM_rvL0j9Loxu_6JFsW?pid=ImgGn"
                    alt="image"
                    class="h-full w-full object-cover"
                    />
                </div>
                <div class="p-6">
                    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                    Nuestra Librería
                    </h6>
                    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Libros Esenciales para una Vida Saludable, Biblioteca de Bienestar.
                    </h4>
                    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    En este apartado de nuestros servicios, ofrecemos a todos nuestros usuarios,
                    la oportunidad de acceder de manera completamente gratuita a nuestra libreria,
                    para que se sientan libres de leer los libros que necesiten, 
                    contando con una amplía gama de libros para fomentar la auto ayuda y el auto descubrimiento.
                    </p>
                    <a class="inline-block" href="/libreria">
                    <button
                        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Entrar
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div className="xl:w-1/2 md:w-1/2 p-4">                          
                <div className="relative flex w-full max-w-[48rem] h-[24rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
                <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src="https://th.bing.com/th/id/OIG.tEwUpkLTugkRsKn4qiGP?pid=ImgGn"
                    alt="image"
                    class="h-full w-full object-cover"
                    />
                </div>
                <div class="p-6">
                    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                    Mascotas para la salud
                    </h6>
                    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Terapia Asistida Por Animales
                    </h4>
                    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    La interacción con los animales puede ayudar a reducir el estrés, la ansiedad y la depresión, 
                    así como mejorar la comunicación y la autoestima. Además, 
                    los animales pueden ser especialmente beneficiosos para personas con discapacidades físicas o mentales,
                    ya que pueden ayudar a mejorar la movilidad, la coordinación y la concentración.
                    </p>
                    <a class="inline-block" href="/companieros">
                    <button
                        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Entrar
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div className="xl:w-1/2 md:w-1/2 p-4">                          
                <div className="relative flex w-full max-w-[48rem] h-[24rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
                <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src="https://th.bing.com/th/id/OIG.blKki.Ub3953QeZQ8Y.F?pid=ImgGn"
                    alt="image"
                    class="h-full w-full object-cover"
                    />
                </div>
                <div class="p-6">
                    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                    Hospitales cerca de ti 
                    </h6>
                    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Mapa Interactivo de Hospitales en Med-Health
                    </h4>
                    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Nuestro mapa interactivo de hospitales en Med-Health es una herramienta esencial para ayudarte a localizar fácilmente las instalaciones de atención médica más cercanas. 
                    Ya sea que busques un hospital especializado o una clínica general, este mapa te guiará hacia la opción más adecuada para tus necesidades de salud.
                    </p>
                    <a class="inline-block" href="/companieros">
                    <button
                        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Entrar
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div className="xl:w-1/2 md:w-1/2 p-4">                          
                <div className="relative flex w-full max-w-[48rem] h-[24rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
                <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src="https://th.bing.com/th/id/OIG.OqTo.xFOQHfiExd52zlq?pid=ImgGn"
                    alt="image"
                    class="h-full w-full object-cover"
                    />
                </div>
                <div class="p-6">
                    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                    Noticias 
                    </h6>
                    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Noticias y Avances Médicos Recientes en Med-Health
                    </h4>
                    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    En nuestro apartado de noticias en Med-Health, te mantenemos al día con las últimas tendencias, 
                    investigaciones y avances en el mundo de la salud y la medicina. Desde innovaciones en tratamientos 
                    hasta estudios de vanguardia y consejos de bienestar.
                    </p>
                    <a class="inline-block" href="/noticias">
                    <button
                        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Entrar
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
                    </a>
                </div>
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