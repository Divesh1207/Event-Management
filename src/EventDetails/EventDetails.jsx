import React, { useEffect, useState } from 'react';
import { Data } from '../Constants/Data';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Start the animation shortly after the component mounts
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 250); // Start after 100ms

        return () => clearTimeout(timer);
    }, []);
    const { id } = useParams();
    const event = Data.find((item) => item.id === parseInt(id));

    if (!event) {
        return <div>Event not found</div>;
    }

    const { heading, date, location, img, description, detail } = event;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out"
                style={{
                    transform: animate ? 'translateY(0)' : 'translateY(-100vh)',
                    boxShadow: animate ? '0 10px 30px rgba(0, 0, 0, 0.2)' : '0 0 0 rgba(0, 0, 0, 0)',
                }}
            >
                <div className="relative">
                    <img
                        src={img}
                        className="w-full h-64 object-cover"
                        alt={heading}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <h1 className="text-2xl font-bold text-white mb-2">{heading}</h1>
                        <p className="text-gray-300">{location}</p>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 text-gray-500 mr-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <p className="text-gray-600 font-semibold">{date.year} {date.month}</p>

                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">Details</h2>
                    <p className="text-gray-700 mb-4">{description}</p>

                    <p className="text-gray-700">{detail}</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;