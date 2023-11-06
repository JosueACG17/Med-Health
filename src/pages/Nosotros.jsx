import React from "react";
import video from "../img/videos.mp4";
import banner from "../img/medicos.png"
import Header from "../components/Header";
import Cartas from "../components/Cartas";
import Footer from "../components/Footer";
import "../styles/nosotros.css"

function Nosotros() {
    return (
        <>
            <Header></Header>
            <section className="text-gray-600 body-font ">
                <div className="container mx-auto max-w-full flex px-5 py-24 md:flex-row flex-col items-center colors ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 text-center ">
                            Confia enﾠ
                            <br className="hidden lg:inline-block " />
                            <span className="bg-clip-text text-yellow-600 font-bold ">
                                Med-Health
                            </span>
                        </h1>
                        <p className="mb-8 leading-relaxed font-semibold text-white text-justify">
                            Nuestra dedicación a la excelencia en la atención médica es lo que nos impulsa a ser líderes en el cuidado de la salud. En Med-Health, combinamos la experiencia de nuestro equipo médico con la tecnología más avanzada para brindarte la atención más cercana y efectiva posible. Nuestra misión es proporcionar atención de calidad, compasión y esperanza a cada paciente que confía en nosotros.
                            Estamos comprometidos con su bienestar y en convertir cada experiencia de atención médica en una historia de éxito.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded "
                            alt="hero"
                            src={banner}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>


            {/* PARTE DEL VIDEO */}
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-5 mt-10">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-8 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
                                Gracias por confiar en
                                <br className="hidden md:block" />
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-purple-400" />
                                    <span className="relative inline-block text-blue-700">
                                        Med-Health
                                    </span>

                                </span>
                            </h2>
                            <p className="text-base text-gray-900 md:text-lg text-justify">
                                Nuestro equipo dedicado, compuesto por expertos médicos y personal administrativo, trabaja incansablemente para brindarte la mejor atención posible. Confía en nosotros para cuidarte en cada paso de tu viaje hacia una vida más saludable y feliz.
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-blue-700">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5 text-center">
                                        Nuestra Prioridad: Tu Salud.
                                    </h6>
                                    <p className="text-base text-gray-900 text-justify">
                                        Tu bienestar es nuestra prioridad absoluta.
                                        Nuestro equipo esta aquí para brindarte atención médica en un entorno seguro.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white border-l-4 shadow-sm border-blue-700">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5 text-center">
                                        Innovación Médica
                                    </h6>
                                    <p className="text-base text-gray-900 text-justify">
                                        Nos esforzamos por tener la mejor tecnología médica
                                        para brindarte soluciones de atención de última generación.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <video
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={video}
                            alt=""
                            autoPlay
                            loop
                            muted

                        />
                    </div>
                </div>
            </div>

            {/* PARTE DE LAS CARTAS */}
            <Cartas></Cartas>
            
            <Footer></Footer>
        </>

    )
}

export default Nosotros;
