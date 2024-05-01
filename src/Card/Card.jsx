import React, { useEffect, useState } from 'react';
import { Data } from '../Constants/Data';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card({ events }
) {

    const displayEvents = events || Data;


    return (
        <div className="flex flex-wrap gap-6 py-6">
            {displayEvents.map((card, key) => (
                <Link
                    key={key}
                    to={`/EventDetails/${card.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg flex-shrink-0 w-64"
                >
                    <img
                        src={card.img}
                        className="w-full h-48 object-cover"
                        alt={card.heading}
                    />
                    <div className="p-4">
                        <h1 className="text-lg font-bold mb-2">{card.heading}</h1>
                        <div className="mb-2">
                            <p className="text-gray-600 font-semibold">{card.location}</p>
                            <p className="text-gray-600 font-semibold">{card.date.year}</p>
                        </div>
                        <p className="text-gray-700 text-sm">{card.detail}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Card;