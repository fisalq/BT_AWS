import React from 'react';
import {useIsFetching, useMutation, useQuery} from 'react-query'
import Search from "../partials/Search"
import {Link} from "react-router-dom"
import {BiLogIn} from "react-icons/bi"
import {postRequest} from "../../config/axiosClient";
import {useDispatch, useSelector} from "react-redux";
import {logout, showLoginModal} from "../../redux/reducers/authReducer";
import Spinner from "../partials/Spinner";

function Header() {

    const { data: { data } = [] } = useQuery(
        "countries",
        async () => await postRequest('/GetCountries'),
    )
    const { isLoggedIn, email, __token } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const isFetching = useIsFetching()

    return (
        <>
            {isFetching ? <Spinner/> : null}
            <div className="bg-white border flex justify-between items-center pl-4 pr-8">
                <div>
                    <Link to="/"><img alt="logo" src="/assets/images/LENA_WEBSITE_IMAGES/image 4.png"/></Link>
                </div>
                <div className="w-1/2 hidden md:block">
                    <Search placeholder="Search Event and more..."/>
                </div>
                <div className="hidden md:block">
                    <select className="bg-white p-2 text-xs text-gray-600 focus:outline-none">
                        <option>Choose Location</option>
                        {
                            data?.CountriesList?.map(({country_id, country_name}) => (
                                <option key={country_id} value={country_id}>{country_name}</option>
                            ))
                        }
                    </select>
                </div>
                <button className="underline hover:no-underline text-xs text-gray-700">
                    <b>English</b>/Arabic
                </button>
                {!isLoggedIn ?
                <div>
                    <button onClick={() => dispatch(showLoginModal())}
                            className="hover:bg-blue-500 bg-primary px-4 py-2.5 font-semibold text-sm text-white rounded flex items-center">
                        <BiLogIn className="mr-1.5" size={20}/>
                        Login/Register
                    </button>
                </div> :
                    <button type="button" onClick={() => dispatch(logout({ email, token: __token }))} className="underline hover:no-underline text-sm text-gray-700">
                        <b>Logout</b>
                    </button>
                }
            </div>
        </>

    );
}

export default Header;