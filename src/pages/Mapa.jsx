import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";

function Mapa() {
    return (
        <>
            <Header />
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

                    <a href="/mapa" className="flex items-center text-blue-700 -px-2 hover:underline font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>

                        <span className="mx-2">Mapa</span>
                    </a>
                </div>
            </div>

            <Map />
            <br></br>
            <Footer />
        </>
    )
}

export default Mapa;