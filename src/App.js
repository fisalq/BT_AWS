import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Events from "./components/events/Events";
import Event from "./components/events/Event";
import OrderConfirmation from "./components/orders/OrderConfirmation";
import OrderConfirmed from "./components/orders/OrderConfirmed";
import ProfileLayout from "./components/profile/ProfileLayout";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector} from "react-redux";
import PrivateRoute from "./config/PrivateRoute";
import ScrollTop from "./utils/ScrollTop";

function App() {

    const {isLoggedIn} = useSelector(state => state.authReducer)

    return (
        <div className="font-inter">
            <ScrollTop />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    exact
                    path="/events"
                    component={Events}
                />
                <Route
                    exact
                    path="/event/:id"
                    component={Event}
                />
                <Route
                    exact
                    path="/order-confirmation/:eventId"
                    component={OrderConfirmation}
                />
                <PrivateRoute
                    exact
                    path="/order-confirmed"
                    component={OrderConfirmed}
                    isAuthenticated={isLoggedIn}
                />
                <PrivateRoute
                    exact
                    path="/profile"
                    component={ProfileLayout}
                    isAuthenticated={isLoggedIn}
                />
            </Switch>
        </div>
    );
}

export default App;
