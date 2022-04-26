import React from 'react';

function Categories(props) {
    return (
        <div className="mt-4  pb-8 px-4 md:px-12 mx-auto">
            <h2 className="font-semibold text-lg text-gray-800">Categories</h2>
            <div className="flex rounded-lg overflow-hidden w-full h-80 mt-2">
                <div className={`relative  w-full bg-indigo-200`} >
                    <img src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 104.jpg" alt="category1"
                         className="object-cover w-full h-full"/>
                    <div
                        className="absolute w-full font-bold text-2xl  py-2.5 inset-0 flex justify-center items-center text-gray-100 text-lg font-bold  leading-4">Music
                    </div>
                </div>
                <div className={`relative w-48 hover:w-full transform duration-500 ease-in`} >
                    <img src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 58.png" alt="category2"
                         className="object-cover w-full h-full"/>
                    <div
                        className="absolute hover:rotate-0 w-full transform -rotate-90 py-2.5 inset-0 flex justify-center items-center text-gray-50 text-2xl font-medium  leading-4">Live
                    </div>
                </div>
                <div className="w-48 hover:w-full transform duration-500 ease-in">
                    <img src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 57 (1).jpg" alt="category3"
                         className="object-cover w-full h-full bg-opacity-750 "/>
                    <div
                        className="absolute hover:rotate-0 w-full transform -rotate-90 py-2.5 inset-0 flex justify-center items-center text-gray-50 text-2xl font-medium  leading-4">Theatre
                    </div>
                </div>
                <div className="w-48 hover:w-full transform duration-500 ease-in">
                    <img src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 59 (1).jpg" alt="category4"
                         className="object-cover w-full h-full"/>
                    <div
                        className="absolute hover:rotate-0 w-full transform -rotate-90 py-2.5 inset-0 flex justify-center items-center text-gray-50 text-2xl font-medium  leading-4">Solo
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;