import React, { useState, useEffect } from "react";
import video from "../img/videos.mp4";
import { useSpring, animated } from 'react-spring';
import banner from "../img/medicos.png"
import Header from "../components/Header";
import "../styles/nosotros.css";

function Nosotros() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const cardsSection = document.getElementById("cardsSection");
            if (cardsSection) {
                const sectionTop = cardsSection.getBoundingClientRect().top;
                setIsVisible(sectionTop < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const cardsData = [
        {
            title: 'Misión',
            image: "https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: 'Proporcionar atención médica de la más alta calidad y compasión a nuestros pacientes, brindando soluciones médicas efectivas y centradas en el paciente. Nuestro compromiso es ser una esperanza para todos los que buscan atención médica.',
        },
        {
            title: 'Visión',
            image: "https://images.pexels.com/photos/11198234/pexels-photo-11198234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: 'Liderar la vanguardia de la atención médica, impulsando avances innovadores y tecnología de vanguardia para mejorar la salud y el bienestar de la comunidad. Buscamos ser un referente en el campo de la salud, donde los pacientes puedan confiar en nosotros.',
        },
        {
            title: 'Experiencia',
            image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: 'Con más de 30 años de experiencia en el campo de la salud, Med-Health ha sido un pilar, brindando atención médica excepcional y apoyo a lo largo del tiempo. Nuestra experiencia se refleja en la confianza que miles de pacientes han depositado en nosotros.',
        },
    ];
    return (
        <>
            <Header></Header>
            <section className="text-gray-600 body-font ">
                <div className="container mx-auto max-w-full flex px-5 py-24 md:flex-row flex-col items-center bg-blue-600 colorWave-effect">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 text-center ">
                            Confia enﾠ
                            <br className="hidden lg:inline-block " />
                            <span class="bg-clip-text text-yellow-400 font-bold ">
                                Med-Health
                            </span>
                        </h1>
                        <p className="mb-8 leading-relaxed text-white text-justify">
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
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-10 mt-10">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-8 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
                                Mejora tu bienestar con
                                <br className="hidden md:block" />
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-purple-400" />
                                    <span className="relative inline-block text-blue-500">
                                        Med-Health
                                    </span>

                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg text-justify">
                                Nuestro equipo dedicado, compuesto por expertos médicos y personal administrativo, trabaja incansablemente para brindarte la mejor atención posible. Confía en nosotros para cuidarte en cada paso de tu viaje hacia una vida más saludable y feliz.
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-blue-500">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5 text-center">
                                        Nuestra Prioridad: Tu Salud.
                                    </h6>
                                    <p className="text-sm text-gray-900 text-justify">
                                        Tu bienestar es nuestra prioridad absoluta.
                                        Nuestro equipo esta aquí para brindarte atención médica en un entorno seguro.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white border-l-4 shadow-sm border-blue-500">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Innovación en Atención Médica
                                    </h6>
                                    <p className="text-sm text-gray-900 text-justify">
                                        Nos esforzamos por tener la mejor tecnología médica y las mejores prácticas,
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
            <div id="cardsSection" className="flex items-center justify-center mt-11 mb-9">
                <p className="text-4xl text-center font-bold">
                    SOBRE{" "}
                    <span className="border-b-2 border-blue-600 text-blue-600">NOSOTROS</span>
                </p>
            </div>

            <div className="flex justify-center space-x-4 mb-5 ml-4 mr-4">
                {cardsData.map((card, index) => {
                    const cardAnimation = useSpring({
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(50px)",
                        config: { duration: 400 },
                    });

                    return (
                        <animated.div key={index} className="card-container" style={{ ...cardAnimation, width: '500px', height: '400px' }}>
                            <div className="group relative block bg-black">
                                <img
                                    alt="Card"
                                    src={card.image}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-xl font-bold text-white sm:text-2xl">{card.title}</p>

                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                            <p className="text-sm text-white text-justify">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </animated.div>
                    );
                })}
            </div>
        </>

    )
}

export default Nosotros;
