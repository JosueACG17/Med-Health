/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SiMonica } from "react-icons/si";
import YouTubePlayer from "../components/YoutubePlayer";
import Banner from "../components/Banner";
import React, { useState } from "react";
import Modal from "../components/Modal";

function Companieros() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(!isModalVisible);
    };

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

            <Banner></Banner>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Nuestros héroes no necesitan capa
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            Cada uno de nuestros héroes pueden abrir las puertas a un mundo más feliz
                            y pacífico, a veces los héroes tienen otro origen.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a
                                onClick={openModal} 
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            >
                                Conoce más
                                <svg
                                    className="w-3.5 h-3.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                            {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} />}
                            <a
                                href="#"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div>

                        <YouTubePlayer></YouTubePlayer>

                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default Companieros;