/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../pages/Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {book.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <img src={thumbnail} alt={item.volumeInfo.title} className="w-full h-48 object-contain" />
              <div className="mt-2">
                <h3 className="text-lg font-semibold  text-gray-800">{item.volumeInfo.title}</h3>
                <p className="text-sm font-bold text-indigo-600">&#8377;{amount}</p>
              </div>
            </div>
          );
        }

        return null; // Agrega un retorno nulo para evitar problemas si no se cumple la condición.
      })}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </div>
  );
};

export default Card;