/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lectores from "../img/bg2.png";
import { FaSearch} from 'react-icons/fa';

const Libreria = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
          search +
          '&key=AIzaSyBpJDaP5XvcDqc0tYKyJMVjXUiXsxfisn0' +
          '&maxResults=40'
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Header />
           {/* Breadcrumb */}
      <div class="">
        <div class="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">

          <a href="/servicios" class="flex items-center text-blue-700 -px-2 hover:underline font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>

            <span class="mx-2">Servicios</span>
          </a>

          <span class="mx-5 text-blue-700 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </span>

          <a href="/libreria" class="flex items-center text-blue-700 -px-2 hover:underline font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>

            <span class="mx-2">Libreria</span>
          </a>

          
        </div>
      </div>

      {/*libreria */}
      <div className="bg-indigo-200">
        <div className="container mx-auto py-8">
          <div className="header bg-indigo-800 text-white p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Una habitación con libros, es como un cuerpo con alma.
                </h1>
              </div>
              <div className="text-right">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  Encuentra Tu Nuevo Libro Favorito
                </h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Nombre del libro"
                    className="border rounded-full p-3 pl-4 pr-10 focus:outline-none text-purple-600 bg-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={searchBook}
                  />
                  <button className="bg-blue-700 text-white rounded-full p-3 hover:bg-indigo-800 transition duration-300 ease-in-out">
                  <FaSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <img src={Lectores} alt="Lectores" className="max-w-xs mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <Card book={bookData} />
      </div>
      <Footer />
    </>
  );
};

export default Libreria;