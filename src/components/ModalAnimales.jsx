/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from '../img/logo.png';

const ModalAnimales = ({ showModalAnimales, setShowModalAnimales }) => {

    return (
        <>
            {showModalAnimales ? (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Animales Más Comúnes En La Terapia</h3>
                            <div className="mt-2 px-7 py-3 text-left">
                                <p className="text-sm text-gray-500">
                                    La Terapia Asistida por Animales usualmente recurre a animales, tales como:
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Perros: Los más comunes, conocidos por su capacidad para conectar con las personas.</li>
                                    <li>Caballos (Equinoterapia): Utilizados en terapias para mejorar el equilibrio, la postura y la autoconfianza.</li>
                                    <li>Gatos: Para personas que prefieren animales más tranquilos.</li>
                                    <li>Delfines: En algunos programas específicos, aunque más controvertidos.</li>
                                    <li>Animales de Granja: Como cabras, ovejas, que pueden ser terapéuticos en entornos rurales.</li>
                                </ul>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={() => setShowModalAnimales(false)}
                                    className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>

    );
}

export default ModalAnimales;