/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SiMonica } from "react-icons/si";
import YouTubePlayer from "../components/YoutubePlayer";
import Banner from "../components/Banner";
import React, { useState } from "react";
import Modal from "../components/Modal";
import ModalAnimales from "../components/ModalAnimales";
import KittyCarousel from "../components/KittyCarousel";
import DogCarousel from "../components/DogCarousel";

const Companieros = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModalAnimales, setShowModalAnimales ] = useState(false);

    return (
        <>
            <Header></Header>

            {/* Breadcrumb */}
            <div className="">
                <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">

                    <a href="/servicios" className="flex items-center text-blue-700 -px-2 hover:underline font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>

                        <span className="mx-2">Servicios</span>
                    </a>

                    <span className="mx-5 text-blue-700 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>

                    <a href="/companieros" className="flex items-center text-blue-700 -px-2 hover:underline font-bold">
                        <SiMonica></SiMonica>

                        <span className="mx-2">Compañeros</span>
                    </a>

                </div>
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Nuestros héroes no necesitan capa
                        </h1>
                        <p className="mb-8 text-lg font-normal text-justify text-gray-500 lg:text-xl dark:text-gray-400">
                            Cada uno de nuestros héroes pueden abrir las puertas a un mundo más feliz
                            y pacífico, a veces los héroes tienen otro origen.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row center sm:space-y-0 sm:space-x-4">
                            <button
                                className="bg-cyan-700 dark:bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 dark:hover:bg-blue-950 hover:text-pink-200"
                                onClick={() => setShowModal(true)}
                            >
                                Beneficios TAA
                            </button>
                            <Modal showModal={showModal} setShowModal={setShowModal} />
                            <button
                                className="bg-cyan-700 dark:bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 dark:hover:bg-blue-950 hover:text-pink-200"
                                onClick={() => setShowModalAnimales(true)}
                            >
                                Pequeños heroés
                            </button>
                            <ModalAnimales showModalAnimales={showModalAnimales} setShowModalAnimales={setShowModalAnimales} />
                        </div>
                    </div>
                    <div>

                        <YouTubePlayer></YouTubePlayer>

                    </div>
                    <div>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                            Nuestros Gatitos Compañeros
                        </h2>
                        <KittyCarousel></KittyCarousel>
                    </div>
                    <div>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                            Nuestros Perritos Compañeros
                        </h2>
                        <DogCarousel></DogCarousel>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default Companieros;