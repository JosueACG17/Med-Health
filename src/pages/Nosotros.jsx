import React from "react";
import video from "../img/videos.mp4";
import img1 from "../img/img-1.jpg"
import img2 from "../img/img-2.jpg"
import img3 from "../img/img-3.jpg"
import banner from "../img/banner.png"
import Header from "../components/Header";

function Nosotros() {
    return (
        <>
            <Header></Header>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-90 ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 text-center ">
                            Confia en
                            <br className="hidden lg:inline-block " />
                            <span class="bg-clip-text text-yellow-400 font-bold ">
                                Med-Health
                            </span>
                        </h1>
                        <p className="mb-8 leading-relaxed text-white text-justify">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded animate-pulse"
                            alt="hero"
                            src={banner}
                        />
                    </div>



                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <video
                                    alt="House"
                                    src={video}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </div>
                        </div>
                        <div className="relative flex items-center bg-blue-200">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-blue-200"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl text-center hover:text-sky-400">
                                    ¿PORQUE ELEGIRNOS?
                                </h2>

                                <p className="mt-4 text-gray-800 text-justify">
                                    Nuestra dedicación a la excelencia en la atención médica es lo que nos impulsa a ser líderes en el cuidado de la salud. En Med-Health, combinamos la experiencia de nuestro equipo médico con la tecnología más avanzada para brindarte la atención más cercana y efectiva posible. Nuestra misión es proporcionar atención de calidad, compasión y esperanza a cada paciente que confía en nosotros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center">
                <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">

                    <a href="" className="w-full md:w-1/3 md:mt-4 md:mb-4">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:hover:-translate-y-8">
                            <img
                                className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                src={img1}
                                alt="Blog"
                            />
                            <div className="px-6 py-8">
                                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span className="">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>Misión</font>
                                        </font>
                                    </span>
                                </h4>
                                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Instale Tailwind CSS sin ningún Javascript Framework localmente con purgeCSS, habilitando la opción de modo oscuro. Las preferencias o la clase dependen de usted.
                                        </font>
                                    </font>
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="w-full md:w-1/3 md:mt-4 md:mb-4">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:hover:-translate-y-8">
                            <img
                                className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                src={img2}
                                alt="Blog"
                            />
                            <div className="px-6 py-8">
                                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span className="">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>Visión</font>
                                        </font>
                                    </span>
                                </h4>
                                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Instale Tailwind CSS sin ningún Javascript Framework localmente con purgeCSS, habilitando la opción de modo oscuro. Las preferencias o la clase dependen de usted.
                                        </font>
                                    </font>
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="w-full md:w-1/3 md:mt-4 md:mb-4">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:hover:-translate-y-8">
                            <img
                                className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                src={img3}
                                alt="Blog"
                            />
                            <div className="px-6 py-8">
                                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span className="">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>Experiencia</font>
                                        </font>
                                    </span>
                                </h4>
                                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Instale Tailwind CSS sin ningún Javascript Framework localmente con purgeCSS, habilitando la opción de modo oscuro. Las preferencias o la clase dependen de usted.
                                        </font>
                                    </font>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>


        </>

    )
}

export default Nosotros;
