import React from 'react';
import AuthLayout from "./AuthLayout";
import {Link} from "react-router-dom";

function Register(props) {
    return (
        <AuthLayout>
            <div className="flex-1 flex flex-col justify-center py-6 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="text-center">
                        {/*<img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"*/}
                        {/*     alt="Workflow"/>*/}
                        <h2 className="uppercase mt-6 text-3xl font-extrabold text-gray-900">
                            Box ticket
                        </h2>
                        <p className="mt-2 text-gray-600 max-w">
                            Create your account
                        </p>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">
                            <form  className="space-y-6 ">
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400"
                                                 data-todo-x-description="Heroicon name: solid/mail"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 aria-hidden="true">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path
                                                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                        <input type="email" name="email"

                                               className="appearance-none block w-full px-3 py-2 border border-gray-300 pl-10 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                               placeholder="you@example.com"/>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="h-5 w-5 text-gray-400"
                                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none"
                                                 strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <circle cx="8" cy="15" r="4"/>
                                                <line x1="10.85" y1="12.15" x2="19" y2="4"/>
                                                <line x1="18" y1="5" x2="20" y2="7"/>
                                                <line x1="15" y1="8" x2="17" y2="10"/>
                                            </svg>
                                        </div>
                                        <input type="password" name="password"

                                               className="appearance-none block w-full px-3 py-2 border border-gray-300 pl-10 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                               placeholder="Password"/>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary focus:outline-none focus:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                        </svg>
                                        Create Account
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-8 text-xs">
                            <button
                                className="w-full  flex bg-gray-50 justify-center items-center py-2 px-4 border  text-gray-900  rounded-md shadow-sm font-medium   focus:outline-none  focus:ring-offset-2 hover:ring-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                          clipRule="evenodd"/>
                                </svg>
                                Signup with Google
                            </button>
                            <button
                                className="mt-2 w-full  flex bg-gray-50 justify-center items-center py-2 px-4 border  text-gray-900  rounded-md shadow-sm font-medium   focus:outline-none  focus:ring-offset-2 hover:ring-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                          clipRule="evenodd"/>
                                </svg>
                                Signup with Facebook
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/register" className="flex justify-center items-center text-primary underline text-sm hover:text-blue-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-1"
                                    fill="none"
                                    viewBox="0 0 25 25"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                Login as Event Manger
                            </Link>
                        </div>

                        <div className="flex justify-center items-center mt-4">
                            <span className="font-semibold mr-2 text-gray-800 text-sm">Already have an account?</span>
                            <Link to="/login" className="flex justify-center items-center text-primary underline text-sm hover:text-blue-500">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Register;