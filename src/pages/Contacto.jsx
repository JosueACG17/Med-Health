import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import emailjs from '@emailjs/browser';

function Contacto() {
    const form = useRef();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tr9uwlb', 'template_m1mfhzv', form.current, '5KLRbPoqlMH7vLZTx')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                setShowSuccessAlert(true); // Mostrar la alerta de éxito
                form.current.reset(); // Limpiar los campos del formulario
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Header></Header>
            <section
                className="min-h-screen bg-cover "
                style={{
                    backgroundImage:
                        'url("https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
                }}
            >
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="text-white lg:w-1/2 lg:mx-6">
                                <h1 className="text-2xl font-bold capitalize lg:text-3xl text-center">
                                    ¡Contactate con Nosotros!
                                </h1>
                                <p className="max-w-xl mt-6 text-justify">
                                    Estamos aquí para escucharte, responder a tus preguntas y brindarte el apoyo que necesitas. No dudes en ponerte en contacto con nuestro equipo en cualquier momento. Ya sea que tengas comentarios, sugerencias, inquietudes o simplemente desees saludarnos, estamos ansiosos por recibir tu mensaje.
                                </p>
                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-gray-300 ">Siguenos o Contactanos:</h3>
                                    <div className="flex mt-4 -mx-1.5 ">
                                        <a
                                            className="mx-1.5 text-white transition-colors duration-300 transform hover:text-green-500" // Cambié el color de hover a verde para representar WhatsApp
                                            href="https://wa.me/529984847064?text=¡Hola! Manda un mensaje a Med-Health."
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                                                <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>

                                        <a
                                            className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                                            href="https://www.facebook.com/HotSpanish"
                                        >
                                            <svg
                                                className="w-8 h-8"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                                            href="https://www.instagram.com/josue_acg18/"
                                        >
                                            <svg
                                                className="w-8 h-8"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 lg:w-1/2 lg:mx-6 ">
                                <div className="w-full px-8 py-5 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl  lg:max-w-xl">
                                    <div role="alert" className={`rounded-xl  bg-white   p-2 ${showSuccessAlert ? 'block' : 'hidden'}`}>
                                        <div className="flex items-start gap-4">
                                            <span className="text-green-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="flex-1">
                                                <strong className="block font-medium text-gray-900"> Mensaje enviado correctamente</strong>
                                                <p className="mt-1 text-sm text-blue-800">
                                                    Tu mensaje ha sido recibido.
                                                </p>
                                            </div>
                                            <button className="text-red-600 transition hover:text-white hover:bg-black" onClick={() => setShowSuccessAlert(false)}>
                                                <span className="sr-only">Cerrar la alerta</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <form ref={form} onSubmit={sendEmail} className="mt-3">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-semibold text-black ">
                                                Nombre Completo:
                                            </label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                placeholder="Escribe tu nombre"
                                                className="block w-full px-5 py-3 mt-2 text-semibold text-black bg-white border border-gray-500 rounded-md  focus:border-blue-600 focus:ring-blue-500 focus:ring-opacity-40 dark:focus:border-blue-700 focus:outline-none focus:ring"
                                            />
                                        </div>
                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm font-semibold text-black">
                                                Correo Electronico:
                                            </label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                placeholder="Escribe tu correo electronico"
                                                className="block w-full px-5 py-3 mt-2 text-semibold text-black bg-white border border-gray-500 rounded-md  focus:border-blue-600 focus:ring-blue-500 focus:ring-opacity-40 dark:focus:border-blue-700 focus:outline-none focus:ring"
                                            />
                                        </div>
                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm font-semibold text-black">
                                                Mensaje:
                                            </label>
                                            <textarea
                                                name="message"
                                                className="block w-full h-32 px-5 py-3 mt-2 text-semibold text-black placeholder-gray-400 bg-white border border-gray-500 rounded-md md:h-48  focus:border-blue-400 focus:ring-blue-500 focus:ring-opacity-40 dark:focus:border-blue-700 focus:outline-none focus:ring"
                                                placeholder="Redactanos tu mensaje"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            value="Send"
                                            className="w-full px-6 py-3 mt-6 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                            Enviar
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* MAPA DEL LUGAR */}

            <section className="bg-white opacity-90" style={{
                backgroundImage:
                    'url("https://img.freepik.com/vector-gratis/fondo-patron-rombos-color-azul-marino-abstracto-banner-diseno-multiproposito_1340-17102.jpg")'
            }}>
                <div className="container px-6 py-12 mx-auto mx-auto lg:mx-auto mb-20 ">
                    <div className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-3 mb-6 ">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                            <div>
                                <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                                    Correo Electronico:
                                </h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Nuestro equipo esta para ayudarte
                                </p>
                                <p className="mt-2 text-sm text-white dark:text-blue-400">
                                    correoprueba@gmail.com
                                </p>
                            </div>
                            <div>
                                <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                                    Ubicación:
                                </h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Ven y conoce Med-Health
                                </p>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                    Carretera Cancún-Aeropuerto, S.M 299-Km. 11.5, 77565 Q.R.
                                </p>
                            </div>
                            <div>
                                <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                                    Número Telefonico
                                </h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Todos los dias.
                                </p>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                    +52 9984847064
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder={0}
                                title="map"
                                marginHeight={0}
                                marginWidth={0}
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5790784008573!2d-86.84949872595347!3d21.049521687067436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e81c385c4677f%3A0x539479cfc0929edb!2sUniversidad%20Tecnol%C3%B3gica%20de%20Canc%C3%BAn%2C!5e0!3m2!1ses-419!2smx!4v1697680149581!5m2!1ses-419!2smx"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contacto;

