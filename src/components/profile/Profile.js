import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {postRequest} from "../../config/axiosClient";
import {useSelector} from "react-redux";
import GlobalLoader from "../partials/GlobalLoader";
import DatePicker from "react-datepicker";

function Profile() {
    const { user, loader } = useSelector(state => state.userReducer)
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        dob: new Date(),
        location: '',
        userType: '',
        image: ''
    })

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            firstName: user?.FirstName,
            lastName: user?.LastName,
            email: user?.Email,
            mobile: user?.Mobile,
            dob: new Date(user?.DateOfBirth).valueOf()
       }))
    }, [user]);

    const handleChange = event => {
        const { name, value } = event.target

        setState({...state, [name]: value })
    }

    const handleUploadImage = (event) => {
        const reader = new FileReader()
        const file = event.target.files[0]

        reader.onload = () => {
            if(reader.readyState === 2) {
                setState({...state, image: reader.result})
            }
        }

        reader.readAsDataURL(file)
        setState({...state, image: file})
    }

    const handleSubmit = event => {
        event.preventDefault()

        console.log(state)
    }

    if(loader) {
        return <GlobalLoader />
    }
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 ">
                <form
                    className="lg:col-span-12"
                    onSubmit={handleSubmit}
                   >
                    {/* Profile section */}
                    <div className="px-3">

                        <div className="mt-6 flex flex-col lg:flex-row">
                            <div className="flex-grow space-y-6">
                                <div className="md:flex gap-x-4">
                                    <div className="w-full">
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm  text-gray-700">
                                            <span className="text-red-600">*</span> First Name
                                        </label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            name="firstName"
                                            value={state.firstName}
                                            className="bg-gray-50 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm  text-gray-700">
                                            <span className="text-red-600">*</span> Last Name
                                        </label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            name="lastName"
                                            value={state.lastName}
                                            className="bg-gray-50 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="md:flex gap-x-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm text-gray-700">
                                            <span className="text-red-600">*</span> Email
                                        </label>
                                        <input
                                            type="email"
                                            onChange={handleChange}
                                            value={state.email}
                                            name="email"
                                            className="bg-gray-50 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="md:flex gap-x-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label
                                            htmlFor="mobile"
                                            className="block text-sm text-gray-700">
                                            Mobile No.
                                        </label>
                                        <input
                                            type="number"
                                            onChange={handleChange}
                                            name="mobile"
                                            value={state.mobile}
                                            className="bg-gray-50 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="w-full mt-4 md:mt-0">
                                        <label
                                            htmlFor="dob"
                                            className="block text-sm text-gray-700">
                                            Date of Birth
                                        </label>
                                        <DatePicker
                                            dateFormat="MMMM d, yyyy"
                                            selected={state.dob}
                                            defaultValue={state.dob}
                                            onChange={date => setState({...state, dob: date})}
                                            className="bg-gray-50 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="md:flex gap-x-4">
                                    <div className="w-full mt-4 md:mt-0">
                                        <label
                                            htmlFor="location"
                                            className="block text-sm text-gray-700">
                                            Location
                                        </label>
                                        <input
                                            type="input"
                                            onChange={handleChange}
                                            name="location"
                                            className="bg-gray-50 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="md:flex gap-x-4">
                                    <div className="mt-4 md:mt-0">
                                        <button
                                            type="button"
                                            onClick={() => setState({...state, userType: 'guest'})}
                                            className={`${state.userType === 'guest' ? 'text-white bg-primary' : 'text-primary'} border border-primary px-4 py-1.5 text-sm transition duration-150 ease-in-out  hover:bg-primary hover:text-white rounded-2xl `}>
                                            Guest
                                        </button>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <button
                                            type="button"
                                            onClick={() => setState({...state, userType: 'manager'})}
                                            className={`${state.userType === 'manager' ? 'text-white bg-primary' : 'text-primary'} border border-primary px-4 py-1.5 text-sm transition duration-150 ease-in-out  hover:bg-primary hover:text-white rounded-2xl `}>
                                            Event Manager
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                                <p
                                    className="text-sm font-medium text-gray-700"
                                    aria-hidden="true">
                                    Photo
                                </p>
                                <div className="mt-1 lg:hidden">
                                    <div className="flex items-center">
                                        <div
                                            className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                                            aria-hidden="true">
                                            <img
                                                className="rounded-full h-full w-full"
                                                src="/assets/images/profile.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-5 rounded-md shadow-sm">
                                            <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
                                                <label
                                                    htmlFor="user_photo"
                                                    className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none">
                                                    <span>Change</span>
                                                    <span className="sr-only">
                                                        {' '}
                                                        user photo
                                                    </span>
                                                </label>
                                                <input
                                                    id="user_photo"
                                                    name="user_photo"
                                                    type="file"
                                                    onChange={handleUploadImage}
                                                    className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden relative rounded-full overflow-hidden lg:block">
                                    <img
                                        className="relative rounded-full w-40 h-40"
                                        src="/assets/images/profile.jpg"
                                        alt=""
                                    />
                                    <label
                                        htmlFor="user-photo"
                                        className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100">
                                        <span>Change</span>
                                        <span className="sr-only">
                                            {' '}
                                            user photo
                                        </span>
                                        <input
                                            type="file"
                                            onChange={handleUploadImage}
                                            id="user-photo"
                                            name="user-photo"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="md:text-center mt-5 flex gap-x-4">
                            <button type="submit" className="bg-primary w-2/3 py-2 text-sm text-white rounded">Save</button>
                            <button type="button" className="bg-gray-100 px-4 py-2 text-gray-800 rounded text-sm">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;