import Header from "../components/Header";
import Footer from "../components/Footer";
import CartasServicios from "../components/CartasServicios";

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
                        <p className="pr-5 mb-5 text-justify font-medium text-gray-800 md:text-lg">
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

                <p className="mx-auto mt-4 p-3 text-justify font-medium max-w-xl sm:text-lg/relaxed">
                    Descubre una gama de servicios diseñados para cubrir tus necesidades.
                    Explora nuestros servicios y encuentra soluciones a medida que te harán la vida más conveniente y eficiente.
                </p>

            </div>

            {/*CARTAS */}
            <CartasServicios></CartasServicios>


            <Footer></Footer>

        </div>
    )
}

export default Servicios;