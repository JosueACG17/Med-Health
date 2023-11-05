/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
  let truncatedDescription = truncateText(item.volumeInfo.description, 250);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gradient-to-b from-opacity-20 to-opacity-20">
      <div className="modal-overlay fixed top-0 left-0 w-full h-auto bg-opacity-75 bg-black"></div>
      <div className="modal-container bg-white w-700 h-550 p-6 relative box-border overflow-hidden text-base">
        <div className="flex justify-end p-4">
          <button
            className="text-gray-900 text-2xl bg-gray-200 rounded-full p-2 px-4 hover:bg-gray-300"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
        <div className="modal-content py-4 px-6">
          <img src={thumbnail} alt={item.volumeInfo.title} className="w-full h-48 object-contain" />
          <div className="text-center mt-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{item.volumeInfo.title}</h1>
            <h3 className="text-lg text-indigo-600">{item.volumeInfo.authors}</h3>
            <h4 className="text-base text-gray-600">{item.volumeInfo.publisher}<span className="ml-2 text-gray-400">{item.volumeInfo.publishedDate}</span></h4>
            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-indigo-500 text-white rounded-full px-6 py-2 hover:bg-indigo-700 transition duration-300 ease-in-out">
              Ver Más
            </a>
          </div>
          <p className="text-gray-700 text-lg mt-4">{truncatedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;