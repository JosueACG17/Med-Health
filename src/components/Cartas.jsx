import React, {useState, useEffect} from "react";
import { useSpring, animated } from 'react-spring';

function Cartas(){
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
            description: 'Liderar la atención médica, impulsando avances innovadores y tecnología de vanguardia para mejorar la salud y el bienestar de la comunidad. Buscamos ser un referente en el campo de la salud, donde los pacientes puedan confiar en nosotros.',
        },
        {
            title: 'Experiencia',
            image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: 'Con más de 30 años de experiencia en la salud, Med-Health ha sido un pilar, brindando atención médica excepcional y apoyo a lo largo del tiempo. Nuestra experiencia se refleja en la confianza que miles de pacientes han depositado en nosotros.',
        },
    ];

    return(
        <>
        <div id="cardsSection" className="flex items-center justify-center mt-11 mb-9">
                <p className="text-4xl text-center font-bold">
                    SOBRE{" "}
                    <span className="border-b-4 border-purple-400 text-blue-700">NOSOTROS</span>
                </p>
            </div>

            <div className="flex justify-center space-x-1 mb-24">
                {cardsData.map((card, index) => {
                    const cardAnimation = useSpring({
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(50px)",
                        config: { duration: 300 },
                    });

                    return (
                        <animated.div key={index} className="card-container " style={{ ...cardAnimation, width: '500px', height: '500px' }}>
                            <div className="group relative block bg-black">
                                <img
                                    alt="Card"
                                    src={card.image}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-xl font-bold text-white sm:text-2xl">{card.title}</p>

                                    <div className="mt-24 sm:mt-48 lg:mt-64">
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

export default Cartas;