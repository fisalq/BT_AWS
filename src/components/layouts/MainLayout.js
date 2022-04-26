import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Modal from "../partials/Modal";
import Login from "../auth/Login";
import {useDispatch, useSelector} from "react-redux";
import {showLoginModal} from "../../redux/reducers/authReducer";

function MainLayout({children}) {
    // const [showLoginModal, setShowLoginModal] = useState(false)
    const { loginModal } = useSelector(state => state.authReducer)

    const dispatch = useDispatch()

    return (
        <div className="bg-small-pattern bg-no-repeat bg-gray-70">
            <Header />
                {children}

                <Modal width="w-11/12" title="Login" showModal={loginModal} setShowModal={() => dispatch(showLoginModal())}>
                    <Login />
                </Modal>
            <Footer />
        </div>
    );
}

export default MainLayout;