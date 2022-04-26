import React from 'react';
import {Link} from "react-router-dom";

function EventsNearYou(props) {
    return (
        <>
            <div>
                <div className="w-50 md:w-70 h-38 md:h-56">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg"
                         viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                    <img
                        alt=""
                        src="assets/images/LENA_WEBSITE_IMAGES/Rectangle 56.jpg"
                        className="mx-auto rounded-lg w-full h-full object-cover"/>
                </div>

                <div className="mt-2 text-sm">
                    <Link to={`/event/${3}`} className="hover:text-primary font-semibold text-gray-800 text-xs md:text-base">BGMI
                        Music - Everynight</Link>
                    <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                    <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span></p>
                    <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                </div>
            </div>
            <div>
                <div className="w-50 md:w-70 h-38 md:h-56">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg"
                         viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                    <img
                        alt=""
                        src="assets/images/LENA_WEBSITE_IMAGES/Rectangle 56 (1).jpg"
                        className=" rounded-lg w-full h-full object-cover"/>
                </div>
                <div className="mt-2 text-sm">
                    <Link to="/event" className="hover:text-primary font-semibold text-gray-800 text-xs md:text-base">BGMI
                        Music - Everynight</Link>
                    <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                    <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span></p>
                    <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                </div>
            </div>
            <div>
                <div className="w-50 md:w-70 h-38 md:h-56">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg"
                         viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                    <img
                        alt=""
                        src="assets/images/LENA_WEBSITE_IMAGES/Rectangle 56 (2).jpg"
                        className=" rounded-lg w-full h-full object-cover"/>
                </div>

                <div className="mt-2 text-sm">
                    <Link to="/event" className="hover:text-primary font-semibold text-gray-800 text-xs md:text-base">BGMI
                        Music - Everynight</Link>
                    <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                    <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span></p>
                    <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                </div>
            </div>
            <div>
                <div className="w-50 md:w-70 h-38 md:h-56">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg"
                         viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                    <img
                        alt=""
                        src="assets/images/LENA_WEBSITE_IMAGES/Rectangle 56.jpg"
                        className=" rounded-lg w-full h-full object-cover"/>
                </div>

                <div className="mt-2 text-sm">
                    <Link to="/event" className="hover:text-primary font-semibold text-gray-800 text-xs md:text-base">BGMI
                        Music - Everynight</Link>
                    <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                    <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span></p>
                    <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                </div>
            </div>
        </>
    );
}

export default EventsNearYou;