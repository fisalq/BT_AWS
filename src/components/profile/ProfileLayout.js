import React, { useState } from 'react';
import { FaArchive, FaCalendarAlt, FaInfoCircle, FaKey, FaPowerOff, FaUserAlt } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import Profile from "./Profile";
import BookingHistory from "./BookingHistory";
import ChangePassword from "./ChangePassword";
import MyEvents from "./MyEvents";
import CreateEvent from "./CreateEvent";
import { logout } from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

function ProfileLayout() {
    const [component, setComponent] = useState('profile')
    const { email, __token } = useSelector(state => state.authReducer)
    const { user } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const renderComponent = () => {
        switch (component) {
            case 'profile':
                return <Profile />
            case 'booking':
                return <BookingHistory />
            case 'password':
                return <ChangePassword />
            case 'events':
                return <MyEvents component={component} setComponent={setComponent} />
            case 'create':
                return <CreateEvent component={component} setComponent={setComponent} />
            default:
                return <Profile />
        }
    }

    return (
        <MainLayout>
            <div className="p-3 md:px-10 md:py-10">
                <div className="px-4 md:px-10 relative ">
                    <div className="flex flex-col md:flex-row gap-x-4 gap-y-6 md:gap-y-6">
                        <div className="bg-white border w-full md:w-1/4 h-1/2">
                            <div className="flex  p-5">
                                <div className="h-16 w-16">
                                    <img alt="profile" src="/assets/images/profile.jpg"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600">Hello</p>
                                    <h1 className="uppercase text-gray-800 text-sm font-medium">{user.FirstName + ' ' + user.LastName}</h1>
                                </div>
                            </div>
                            <nav className="mt-2">
                                <div className="border-b p-3">
                                    <button onClick={() => setComponent('profile')}
                                            className={`${component === 'profile' && 'text-primary'} flex text-sm hover:text-primary items-center focus:outline-none text-gray-700`}>
                                        <FaUserAlt className="mr-2"/>
                                        My Profile
                                    </button>
                                </div>
                                <div className=" border-b p-3">
                                    <button onClick={() => setComponent('booking')}
                                            className={`${component === 'booking' && 'text-primary'} flex text-sm hover:text-primary items-center focus:outline-none text-gray-700`}>
                                        <FaArchive className="mr-2"/>
                                        Booking History
                                    </button>
                                </div>
                                <div className=" border-b p-3">
                                    <button onClick={() => setComponent('events')}
                                            className={`${component === 'events' && 'text-primary'} flex text-sm hover:text-primary items-center focus:outline-none text-gray-700`}>
                                        <FaCalendarAlt className="mr-2"/>
                                        My Events
                                    </button>
                                </div>

                                <div className=" border-b p-3">
                                    <button onClick={() => setComponent('password')}
                                            className={`${component === 'password' && 'text-primary'} flex text-sm hover:text-primary items-center focus:outline-none text-gray-700`}>
                                        <FaKey className="mr-2"/>
                                        Change Password
                                    </button>
                                </div>
                                <div className=" border-b p-3">
                                    <button onClick={() => setComponent('')}
                                            className={`${component === '' && 'text-primary'} flex text-sm hover:text-primary items-center focus:outline-none text-gray-700`}>
                                        <FaInfoCircle className="mr-2"/>
                                        Need Help
                                    </button>
                                </div>
                                <div className="p-3">
                                    <button type="button" onClick={() => dispatch(logout({ email, token: __token }))}
                                        className="flex text-sm hover:text-primary items-center focus:outline-none text-gray-700">
                                        <FaPowerOff className="mr-2"/>
                                        Logout
                                    </button>
                                </div>
                            </nav>
                        </div>

                        <div className="bg-white border p-8 w-full md:w-3/4">
                            {renderComponent()}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ProfileLayout;