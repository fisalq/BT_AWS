import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { FaEyeSlash, FaEye, FaEnvelope } from "react-icons/fa";
import { BsKeyFill } from "react-icons/bs";
import { ImSpinner8 } from "react-icons/im";
import formValidation from "../partials/formValidation";
import AuthLayout from "./AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { login, loginFailure } from "../../redux/reducers/authReducer";

function Login() {
    const [inputs, setInputs] = useState({
        Email: '',
        Password: '',
    })
    const [errors, setErrors] = useState({Email: '', Password: ''})
    const [showPassword, setShowPassword] = useState(false)
    const {loader, authErrors} = useSelector(state => state.authReducer)
    const [, setServerAuthErrors] = useState({})

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loginFailure())

        return () => {
            setServerAuthErrors({authErrors})
        }
    },[authErrors, dispatch])

    const handleChange = (event) => {
        const { name, value } = event.target

        setInputs({...inputs, [name]: value})
        if(value) {
            setErrors({...errors, [name]: ''})
        } else {
            setErrors({...errors, [name]: `${name} is Required`})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const validate = formValidation(inputs, { errors })
        if (validate.isErrorChanged) {
            setErrors(validate.errors)
            return false;
        }

        setErrors({ Email: '', Password: '' })

        dispatch(login(inputs))
    }

    return (
        <AuthLayout>
            <div className="flex-1 flex flex-col justify-center py-6 px-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="text-center">
                        <h2 className="uppercase mt-6 text-3xl font-extrabold text-gray-900">
                            Box ticket
                        </h2>
                        <p className="mt-2 text-gray-600 max-w">
                            Login as a Guest
                        </p>
                    </div>
                    { authErrors?.ErrorMessage &&
                    <div className="text-center mt-4 text-red-600 text-sm">
                        <li>{authErrors?.ErrorMessage}</li>
                    </div>}
                    <div className="mt-8">
                        <div className="mt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1 relative rounded-md">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope
                                                className={`${errors.Email ? 'text-red-600' : 'text-gray-400'} text-gray-400`}/>
                                        </div>
                                        <input type="email"
                                               name="Email"
                                               onChange={handleChange}
                                               className={`${errors.Email ? 'border-2 border-red-400 focus:ring-1 focus:ring-red-400' : 'border border-gray-300 focus:ring-1 focus:border-indigo-600 '} pl-10 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
                                               placeholder="you@example.com"
                                        />
                                    </div>
                                    <div className="text-red-400 text-sm font-medium mt-1">
                                        <div role="alert">{errors.Email && errors.Email}</div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password"
                                           className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="mt-1 relative rounded-md ">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <BsKeyFill
                                                className={`${errors.Password ? 'text-red-600' : 'text-gray-400'} text-gray-400`}
                                                size={20}/>
                                        </div>
                                        <input
                                            type={`${showPassword ? 'text' : 'password'}`}
                                            name="Password"
                                            onChange={handleChange}
                                            className={`${errors.Password ? 'border-2 border-red-400 focus:ring-1 focus:ring-red-400' : 'border border-gray-300 focus:ring-1 focus:border-indigo-600 '} pl-10 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
                                            placeholder="Password"
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 px-3 flex items-center border-l">
                                            {!showPassword ?
                                                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                                    <FaEyeSlash className="text-gray-800 cursor-pointer"/>
                                                </button> :
                                                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                                    <FaEye className="text-gray-800 cursor-pointer"/>
                                                </button>
                                            }
                                        </div>
                                    </div>
                                    <div className="text-red-400 text-sm font-medium">
                                        <div role="alert">{errors.Password && errors.Password}</div>
                                    </div>
                                </div>

                                {/*<div className="flex items-center justify-between">*/}
                                {/*    <div className="flex items-center">*/}
                                {/*        <input id="remember_me" name="remember_me" type="checkbox"*/}
                                {/*               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>*/}
                                {/*        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">*/}
                                {/*            Remember me*/}
                                {/*        </label>*/}
                                {/*    </div>*/}

                                {/*    <div className="text-sm">*/}
                                {/*        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                                {/*            Forgot your password?*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div>
                                    <button type="submit"
                                            disabled={loader}
                                            className={`${loader && 'cursor-not-allowed bg-blue-500'} w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary focus:outline-none focus:bg-blue-500`}>
                                        {loader ? <ImSpinner8 size={22} className="mr-1.5 animate-spin"/>
                                            : <BiLogIn className="mr-1.5" size={20}/>}
                                        Sign in
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
                                Login with Google
                            </button>
                            <button
                                className="mt-2 w-full  flex bg-gray-50 justify-center items-center py-2 px-4 border  text-gray-900  rounded-md shadow-sm font-medium   focus:outline-none  focus:ring-offset-2 hover:ring-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                          clipRule="evenodd"/>
                                </svg>
                                Login with Facebook
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/register"
                                  className="flex justify-center items-center text-primary underline text-sm hover:text-blue-500">
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
                            <span className="font-semibold mr-2 text-gray-800 text-sm">New here?</span>
                            <Link to="/register"
                                  className="flex justify-center items-center text-primary underline text-sm hover:text-blue-500">
                                Create an account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Login;