import React, {useState} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

export default function ImageSlider() {
    const [slide, setSlide] = useState(1)

    return (
        <div className="p-3 md:pt-8">
            <div className="relative w-full h-56 md:h-100 overflow-hidden ">
                <div className="container mx-auto">
                    <div
                        onClick={() => setSlide(1)}
                        className={`${slide === 1 ? 'z-0 min-w-0 max-w-4xl' : slide === 2 ? 'z-30 max-w-6xl absolute top-12 md:left-px md:right-px' : 'z-10 max-w-5xl absolute top-6 md:left-6 md:right-6'} transition-all duration-500 ease-linear rounded-t-xl overflow-hidden mx-auto`}>
                        <img alt="slide1" className="w-full h-full"
                             src="/assets/images/LENA_WEBSITE_IMAGES/image 2.png"/>
                    </div>
                    <div
                        onClick={() => setSlide(2)}
                        className={`${slide === 1 ? 'z-10 max-w-5xl absolute top-6 md:left-6 md:right-6' : slide === 2 ? 'z-0 min-w-0 max-w-4xl' : 'z-30 max-w-6xl absolute top-12 md:left-px md:right-px'} transition-all duration-500 ease-linear rounded-t-xl overflow-hidden mx-auto`}>
                        <img alt="slide2" className="w-full h-full"
                             src="/assets/images/LENA_WEBSITE_IMAGES/image 2.jpg"/>
                    </div>
                    <div
                        onClick={() => setSlide(3)}
                        className={`${slide === 1 ? ' z-30 max-w-6xl absolute top-12 md:left-px md:right-px' : slide === 2 ? 'z-10 max-w-5xl absolute top-6 md:left-6 md:right-6' : 'z-0 min-w-0 max-w-4xl'} transition-all duration-500 ease-linear rounded-t-xl overflow-hidden mx-auto`}>
                        <img alt="slide3" className="w-full h-full"
                             src="/assets/images/LENA_WEBSITE_IMAGES/image 3.jpg"/>
                    </div>
                </div>
                <div className="hidden md:flex w-16 bottom-0 absolute right-0 flex flex-col gap-y-2 ">
                    <button onClick={() => setSlide(slide === 3 ? 1 : slide + 1)}
                            className="relative bg-blue-100 focus:outline-none text-gray-700 w-5 h-5 rounded-full text-center">
                        <FaChevronUp size={13} style={{marginLeft: '3px', marginBottom: '2px'}}/>
                    </button>
                    <button onClick={() => setSlide(slide === 1 ? 3 : slide - 1)}
                            className="relative bg-blue-100 focus:outline-none text-center text-gray-700 w-5 h-5 rounded-full text-center">
                        <FaChevronDown size={13} style={{marginLeft: '3px', marginTop: '2px'}}/>
                    </button>
                </div>
            </div>
        </div>
    );
}
