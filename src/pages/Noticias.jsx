import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/noticias.css";
import Header from "../components/Header";
import Footer from '../components/Footer';
import NoticiasHeader from '../components/NoticiasHeader';

const NewsAPI = () => {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(10); // Estado para controlar el número de noticias visibles

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=salud&language=es&apiKey=96350a2f61524e0cb013b80301ec3e4c`)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error('Error al obtener las noticias', error);
      });
  }, []);

  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 10);
  };

  return (
    <>
      <Header></Header>
      {/* Breadcrumb */}
      <div>
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

          <a href="/libros" class="flex items-center text-blue-700 -px-2 hover:underline font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" fill="#1976d2" />
            </svg>

            <span class="mx-2">Noticias</span>
          </a>

        </div>
      </div>

      <section className="">
        <NoticiasHeader></NoticiasHeader>
        <h1
          className="bg-gradient-to-r from-cyan-800 via-blue-700 to-purple-700 bg-clip-text text-3xl mt-6 font-extrabold text-transparent text-center sm:text-4xl"
        >
          Noticias Destacadas:
        </h1>
        <div className="container px-14 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8  lg:grid-cols-2">
            {news.slice(0, visible).map((article, index) => (
              <div key={index} className="bg-blue-800 border-2 border-blue-300 rounded-md p-4">
                <img
                  className="relative z-10 object-cover w-full rounded-md h-96 animacion"
                  src={article.urlToImage}
                  alt="Imagen"
                />
                <div className="relative z-20 max-w-lg min-h-lg p-3 mx-auto -mt-24 font-bold text-lg text-center bg-white border-2 border-black rounded-md shadow ">
                  {article.title}
                  <p className="mt-3 text-sm text-justify text-gray-900 font-medium md:text-sm">
                    {article.description}
                  </p>
                  <a
                    className="group relative inline-flex items-center overflow-hidden rounded bg-blue-800 px-6 py-3 mt-1 text-white focus:outline-none focus:ring active:bg-indigo-500"
                    href={article.url}
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:me-4">
                      Seguir leyendo
                    </span>
                  </a>
                </div>

              </div>
            ))}
          </div>

          {visible < news.length && (
            <div className="text-center mt-8">
              <button onClick={loadMore} className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-black">
                Cargar más
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default NewsAPI;

