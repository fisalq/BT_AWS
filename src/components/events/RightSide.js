import React from 'react';
import {Link} from "react-router-dom";

function RightSide(props) {
    return (
        <div>
            <h1 className="font-medium text-gray-800">
                Events in <span className="text-primary">Riaydh</span>
            </h1>
            <div className="flex space-x-4 mt-2">
                <button
                    className="border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                    Music
                </button>
                <button
                    className="border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                    Live
                </button>
                <button
                    className="border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                    Theatre
                </button>
                <button
                    className="border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                    Performance
                </button>
            </div>

            <div className="py-4 grid grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10">

                <div className="flex flex-col mx-auto">
                    <div className="w-64 h-56 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <img
                            alt=""
                            src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 56 (1).jpg"
                            className="mx-auto rounded-lg w-full h-full object-cover"/>
                    </div>

                    <div className="mt-2 text-sm">
                        <Link to="/event" className="font-semibold hover:text-primary text-gray-800">BGMI Music - Everynight</Link>
                        <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                        <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span>
                        </p>
                        <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                    </div>
                </div>
                <div className="flex flex-col mx-auto">
                    <div className="w-64 h-56">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <img
                            alt=""
                            src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 57 (1).jpg"
                            className="mx-auto rounded-lg w-full h-full object-cover"/>
                    </div>

                    <div className="mt-2 text-sm">
                        <Link to="/event" className="font-semibold hover:text-primary text-gray-800">BGMI Music - Everynight</Link>
                        <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                        <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span>
                        </p>
                        <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                    </div>
                </div>
                <div className="flex flex-col mx-auto">
                    <div className="w-64 h-56 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <img
                            alt=""
                            src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 56.jpg"
                            className="mx-auto rounded-lg w-full h-full object-cover"/>
                    </div>

                    <div className="mt-2 text-sm">
                        <Link to="/event" className="font-semibold hover:text-primary text-gray-800">BGMI Music - Everynight</Link>
                        <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                        <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span>
                        </p>
                        <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                    </div>
                </div>
                <div className="flex flex-col mx-auto">
                    <div className="w-64 h-56 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <img
                            alt=""
                            src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 58.jpg"
                            className="mx-auto rounded-lg w-full h-full object-cover"/>
                    </div>

                    <div className="mt-2 text-sm">
                        <Link to="/event" className="font-semibold hover:text-primary text-gray-800">BGMI Music - Everynight</Link>
                        <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                        <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span>
                        </p>
                        <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                    </div>
                </div>
                <div className="flex flex-col mx-auto">
                    <div className="w-64 h-56 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <img
                            alt=""
                            src="https://media.istockphoto.com/photos/connected-diversity-picture-id576750018?s=612x612"
                            className="mx-auto rounded-lg w-full h-full object-cover"/>
                    </div>

                    <div className="mt-2 text-sm">
                        <Link to="/event" className="font-semibold hover:text-primary text-gray-800">BGMI Music - Everynight</Link>
                        <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                        <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span>
                        </p>
                        <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                    </div>
                </div><div className="flex flex-col mx-auto">
                    <div className="w-64 h-56 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 text-white relative cursor-pointer -mb-10 mr-2 mt-2 float-right left-0 bg-gray-300 bg-opacity-25 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <img
                            alt=""
                            src="https://media.istockphoto.com/photos/connected-diversity-picture-id576750018?s=612x612"
                            className="mx-auto rounded-lg w-full h-full object-cover"/>
                    </div>

                    <div className="mt-2 text-sm">
                        <Link to="/event" className="font-semibold hover:text-primary text-gray-800">BGMI Music - Everynight</Link>
                        <p className="text-gray-600 text-xs mt-1">Etihad Arena</p>
                        <p className="text-xs mt-1">From <span className="text-primary">Sep 1st</span>
                        </p>
                        <p><span className="text-primary text-xs mt-1">25 USD</span> onwards</p>
                    </div>
                </div>


            </div>
            <div className="text-center mx-auto w-1/2 mt-4">
                <button className="focus:outline-none border border-primary text-primary rounded-full py-1.5 w-full mx-auto text-sm hover:bg-primary hover:text-white">
                    Show more
                </button>
            </div>
        </div>
    );
}

export default RightSide;