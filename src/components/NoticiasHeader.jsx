import React from "react";
import "../styles/noticias.css"

function NoticiasHeader() {
    return (
        <>
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video className="min-w-full min-h-full absolute object-cover"
                        src="https://player.vimeo.com/external/480147652.sd.mp4?s=c9e3a0e1e07d428cabd2e868b26aed839ab90587&profile_id=164&oauth2_token_id=57447761"
                        autoPlay muted loop
                    ></video>
                </div>
                <div className="video-content space-y-2 z-50">
                    <h1 className="font-bold text-5xl mb-4">Descubre noticias sobre salud</h1>
                    <h3 className="font-semibold text-xl text-justify pl-4 pr-4 mt-4 lg:pl-48 lg:pr-48">Descubre las noticias más recientes que impactan el mundo. Mantente actualizado con nuestra cobertura rápida y confiable de eventos globales, innovaciones tecnológicas y tendencias destacadas. </h3>
                </div>
            </section>


        </>
    )
}

export default NoticiasHeader;