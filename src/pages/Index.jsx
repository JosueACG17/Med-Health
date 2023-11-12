import React from "react";
import Header from "../components/Header";
import "../styles/index.css"
import "../styles/registro.css"
import Footer from "../components/Footer";

function Index() {
  return (
    <>
      <Header />
      <section
        className="relative bg-[url(https://media.istockphoto.com/id/1351480118/es/foto/inyecci%C3%B3n-de-un-m%C3%A9dico-usando-una-computadora-port%C3%A1til-durante-una-consulta-con-una-paciente.jpg?s=612x612&w=0&k=20&c=HWL88B7QPik82KuT9MyJpePRNOQSVYhqm_9-4kLrfGc=)] bg-cover bg-center bg-no-repeat opacity-95 h-96 z-[-1]"
      >
        <div
          className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-center" >
              ¡En Med-Health lo imposible,

              <strong className="block font-extrabold text-rose-600" >
                Es posible!
              </strong>
            </h1>

          </div>
        </div>
      </section>

      <div>

        <div className="relative mx-auto max-w-8xl box bg">
          <div className="grid max-w-lg gap-8 mx-auto p-6 lg:grid-cols-4 lg:max-w-none pt-8">

            <div className="rounded-lg flex flex-col mb-12 overflow-hidden transition duration-200 ease-in-out shadow-2xl md:hover:-translate-y-6">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src="https://media.istockphoto.com/id/1494761325/es/foto/datos-m%C3%A9dicos-e-informaci%C3%B3n-de-salud-un-m%C3%A9dico-con-una-tableta-toca-una-interfaz-virtual-de-la.jpg?s=612x612&w=0&k=20&c=m1k_MbLUyH0QsI0rMGWx_i4MtPo620_jUmlWMhFwQQw=" alt="" />
              </div>
              <div className="bg-white flex flex-col justify-between flex-1 p-2">
                <div className="flex-1">
                  <div className="block mt-2 space-y-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tighter text-black text-center">Servicios</h3>
                    <p className="text-lg font-normal text-gray-700 text-justify">
                      "Cuidamos de tu salud. Nuestros servicios médicos están diseñados pensando en ti y tu bienestar."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg flex flex-col mb-12 overflow-hidden transition duration-300 ease-in-out shadow-2xl md:hover:-translate-y-6">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src="https://assets1.farmaciasanpablo.com.mx/landings/_blog/spf/nota-851-3.jpg" alt="" />
              </div>
              <div className="bg-white flex flex-col justify-between flex-1 p-2">
                <div className="flex-1">
                  <div className="block mt-2 space-y-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tighter  text-black   text-center">Medicamentos</h3>
                    <p className="text-lg font-normal text-justify text-gray-700">
                      "En nuestro sitio, encontrarás información precisa y actualizada sobre una amplia variedad de medicamentos."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg flex flex-col mb-12 overflow-hidden transition duration-300 ease-in-out shadow-2xl md:hover:-translate-y-6">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src="https://cba.ucb.edu.bo/wp-content/uploads/2020/03/virtual-biblioteca-1.jpg" alt="" />
              </div>
              <div className="bg-white flex flex-col justify-between flex-1 p-2">
                <div className="flex-1">
                  <div className="block mt-2 space-y-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tighter  text-black text-center">Información</h3>
                    <p className="text-lg font-normal text-justify text-gray-700">
                      "Te proporcionamos contenido preciso y actualizado sobre una amplia gama de temas médicos."
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="rounded-lg flex flex-col mb-12 overflow-hidden transition duration-300 ease-in-out shadow-2xl md:hover:-translate-y-6">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src="https://media.istockphoto.com/id/1145739963/es/foto/moderno-edificio-blanco-de-hospital-p%C3%BAblico-sala-de-emergencias-entrada.jpg?s=612x612&w=0&k=20&c=RzVNfgYBFEotItGgOQMJaUYyrvCnh-B8jLppXy6M3eo=" alt="" />
              </div>
              <div className="bg-white flex flex-col justify-between flex-1 p-2">
                <div className="flex-1">
                  <div className="block mt-2 space-y-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tighter  text-black  text-center">Hospitales</h3>
                    <p className="text-lg font-normal text-justify text-gray-700">
                      "Queremos ayudarte a encontrar el lugar adecuado para tu atención médica. Tu salud y bienestar son nuestra prioridad."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seccion */}
      <section >
        <div className="mx-8 pb-3 lg:px-8 mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="bg-blue-700 p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Bienvenido a Med-Health
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block text-justify">
                  En Med-Health, estamos comprometidos a proporcionarte información médica confiable y basada en evidencia. Nuestro sitio web es tu fuente confiable para todo lo relacionado con la salud y la medicina. Nos esforzamos por desmitificar conceptos complejos, responder tus preguntas y brindarte orientación experta para que tomes decisiones informadas sobre tu bienestar.
                </p>
                <br></br>
                <h3 className="text-2xl font-bold text-white ">¿Qué puedes encontrar en Med-Health?</h3>
                <ul className="hidden text-white/90 sm:mt-4 sm:block text-justify icon-list">
                  <li>Artículos médicos escritos por expertos en salud.</li>
                  <li>Información sobre enfermedades, síntomas y tratamientos.</li>
                  <li>Consejos para llevar un estilo de vida saludable.</li>
                  <li>Noticias y avances en el campo de la medicina.</li>
                  <li>Recursos para pacientes y sus familias.</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="https://images.pexels.com/photos/5722164/pexels-photo-5722164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
              />

              <img
                alt="Student"
                src="https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mx-8 px-4 pt-12 sm:px-6 sm:pt-22 lg:px-8 ">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl text-justify ">
              Gracias por visitarnos. Estás a punto de adentrarte en un viaje de descubrimiento.
            </h2>
          </div>

          <div className="mt-4 grid gap-8 lg:grid-cols-2 cont">
            <div className="h-4/6 flex flex-wrap">
              <div className="flex flex-wrap md:-m-2 m-1 h-112">
                <div className="flex flex-wrap h-4/6">
                  <div className="md:p-2 p-1 w-1/2 h-1/3">
                    <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://th.bing.com/th/id/OIG.hQA7FKFM7u_kQeSn_b_A?pid=ImgGn" />
                  </div>
                  <div className="md:p-2 p-1 w-1/2 h-1/3">
                    <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://th.bing.com/th/id/OIG.o5_MjcAC1M_VHq8qiu.2?pid=ImgGn" />
                  </div>
                  <div className="md:p-2 p-1 ">
                    <img alt="gallery" className="w-full h-1/2 object-cover object-center block rounded-lg" src="https://th.bing.com/th/id/OIG.SMBUYR8pBWq1LppYAjhm?pid=ImgGn&w=1024&h=1024&rs=1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-4/6">
              <article className="space-y-2 text-gray-800">
                <p className="text-justify">
                  En nuestro continuo compromiso de brindar información valiosa sobre salud y bienestar, te invitamos a explorar Med-Health.
                  Esta página es tu puerta de entrada a un mundo de conocimiento médico y recursos útiles.
                </p>

                <p className="text-justify">
                  Estamos comprometidos en ayudarte a llevar una vida más saludable, plena y equilibrada. Sabemos que la salud es un activo invaluable,
                  y nuestro objetivo es brindarte las herramientas y la información que necesitas para cuidar de ti mismo y de tus seres queridos.
                  Te ofrecemos contenido basado en la experiencia, escrito por expertos en salud y profesionales médicos.
                  Estamos aquí para desmitificar conceptos complejos, responder tus preguntas y brindarte orientación confiable.
                </p>
              </article>

              <article className="flex bg-white transition hover:shadow-xl mt-6">

                {/* Carta */}
                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt="Medicina"
                    src="https://th.bing.com/th/id/OIG.NTLmZIiUhqg.ykpmYsHl?pid=ImgGn&w=1024&h=1024&rs=1"
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between border-2 border-blue-800">
                  <div className="p-4 sm:border-l-transparent sm:p-6">
                      <h3 className="font-bold uppercase text-gray-900">
                        ¡Explora, aprende y empodérate en Med-Health!
                      </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-800 ">
                      Creemos que el conocimiento es poder cuando se trata de la salud. Estamos aquí para guiarte,
                      responder a tus preguntas y proporcionarte orientación experta en cada paso de tu viaje hacia un estilo de vida más saludable.
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end ">
                    <a
                      href="/servicios"
                      className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-700"
                    >
                      Comencemos
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/*Seccion de bloques*/}
        <div className=" text-black font-bold mb-16 ">
          <div
            className="mx-auto max-w-full mr-1 ml-1 px-4 sm:py-18 sm:px-6 lg:py-14 lg:px-8"
          >
            <div className="mx-auto max-w-lg text-center">
              <h1
                className="bg-gradient-to-r from-green-700 via-blue-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              >
                Conoce Más
              </h1>

              <p className="mt-4 text-black font-medium text-justify">
                Utilizamos APIs de confianza para traerte datos precisos y actualizados sobre una amplia gama de temas médicos.
                Desde síntomas y diagnósticos hasta tratamientos y consejos de bienestar, puedes confiar en la precisión de nuestra información.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <a
               className="bloque block rounded-xl border-2 border-blue-900 p-8 shadow-xl transition hover:border-black"
                href="/servicios"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black  text-center">Servicios</h2>

                <p className="mt-3 text-sm font-medium text-black  text-justify">
                  Nuestro servicio de "Servicios Médicos" se basa en la integración de APIs externas confiables. Ofrecemos a nuestros usuarios acceso a una amplia gama de servicios médicos,
                  desde consultas virtuales hasta programación de citas médicas y servicios especializados. A través de esta función,
                  los usuarios pueden conectarse con profesionales de la salud y obtener el apoyo que necesitan.
                </p>
              </a>

              <a
                className="bloque block rounded-xl border-2 border-blue-900  p-8 shadow-xl transition hover:border-black "
                href="/servicios"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black  text-center">Información Médica</h2>

                <p className="mt-3 text-sm	font-medium text-black  text-justify">
                  Se enfoca en proporcionar a nuestros usuarios información precisa y actualizada sobre una variedad de temas médicos y de salud.
                  Nuestra plataforma utiliza APIs que ofrecen artículos, libros y recursos educativos verificados por expertos. Los usuarios pueden explorar información médica confiable
                  y basada en evidencia, lo que les permite tomar decisiones informadas sobre su bienestar y salud.
                </p>
              </a>

              <a
                className="bloque block rounded-xl border-2 border-blue-900  p-8 shadow-xl transition hover:border-black "
                href="/servicios"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black  text-center">Hospitales</h2>

                <p className="mt-3 text-sm	font-medium text-black  text-justify">
                  A través de nuestra función "Hospitales Disponibles," los usuarios pueden acceder a la API de GPS de Google para identificar
                  hospitales, clínicas y centros médicos en su área.
                  Esta característica es esencial en situaciones de emergencia o cuando se necesita atención médica urgente.
                </p>
              </a>

              <a
                className="bloque block rounded-xl border-2 border-blue-900  p-8 shadow-xl transition hover:border-black"
                href="/servicios"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black  text-center">Medicina</h2>

                <p className="mt-3 text-sm	font-medium text-black  text-justify">
                  Se dedica a ofrecer información general sobre el campo de la medicina. Los usuarios pueden explorar una amplia gama de temas médicos,
                  desde anatomía y fisiología hasta investigaciones médicas actuales y tendencias de salud. Esta sección
                  es un recurso educativo valioso para aquellos interesados en ampliar su comprensión de la medicina y la ciencia de la salud.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )

}

export default Index;