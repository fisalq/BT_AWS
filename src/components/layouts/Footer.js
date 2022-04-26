import React from 'react';
import {Link} from "react-router-dom";
import {FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaSkype, FaYoutube} from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {showLoginModal} from "../../redux/reducers/authReducer";

function Footer() {
    const {isLoggedIn} = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    return (
        <div className="bg-primary relative">
            <div className="p-14">
                <div className="flex justify-between items-center">
                    <img alt="" src="assets/images/LENA_WEBSITE_IMAGES/image 4.png"/>
                    <div className="hidden md:flex space-x-6 justify-center items-center uppercase text-white">
                        <Link to="/" className="">
                            Home
                        </Link>
                        <Link to="/events" className="">
                            Events
                        </Link>
                        <Link to="/" className="">
                            Contact Us
                        </Link>
                        {!isLoggedIn &&
                            <>
                                <button type='button' className="uppercase border border-gray-100 rounded px-4 py-2 text-sm"
                                        onClick={() => dispatch(showLoginModal())}>
                                    Sign In
                                </button>
                                <Link to="/register" className="border border-gray-100 rounded px-4 py-2 text-sm">
                                    Sign Up
                                </Link>
                            </>
                        }
                    </div>
                </div>

                <div className="md:flex justify-between items-center mt-5">
                    <p className="text-xs text-gray-100 w-56 md:w-80">
                        Box Tickets is a market-leading provider of digital booking services, using proprietary tools
                        and
                        methodologies to generate high-value engagement for our customers.
                    </p>

                    <div className="mt-5 md:mt-0 flex space-x-4 justify-center items-center">
                        <FaFacebookF color="white"/>
                        <FaSkype color="white" size={23}/>
                        <FaYoutube color="white" size={23}/>
                        <FaGooglePlusG color="white" size={23}/>
                        <FaLinkedinIn color="white" size={20}/>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500 p-2"/>
        </div>
    );
}

export default Footer;