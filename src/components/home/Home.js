import React from 'react';
import ImageSlider from "./ImageSlider";
import HomeEvents from "./HomeEvents";
import Places from "./Places";
import Categories from "./Categories";
import MainLayout from "../layouts/MainLayout";
import {useIsFetching} from 'react-query'
import Spinner from "../partials/Spinner";
import {useSelector} from "react-redux";

function Home() {


    const {isLoggedIn} = useSelector(state => state.authReducer)

    return (
        <>

            <MainLayout>
                <ImageSlider/>
                <HomeEvents/>
                {isLoggedIn && <Places/>}
                <Categories/>
            </MainLayout>
        </>
    );
}

export default Home;