import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    loader: false,
    loginModal: false,
    email: '',
    __token: '',
    authErrors: {}
}

const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        login: state => {
            state.loader = true
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = !!action.payload
            state.loader = false
            state.__token = action.payload.Token
            state.email = action.payload.email
            state.authErrors = ''
            state.loginModal = false
        },
        showLoginModal: state => {
            state.loginModal = !state.loginModal
            state.authErrors = {}
        },
        loginFailure: (state) => {
            state.loader = false
        },
        loginError: (state, action) => {
            state.loader = false
            state.authErrors = action.payload
            state.isLoggedIn = false
        },
        logout: state => {
            state.loader = true
        },
        logoutSuccess: state => {
            state.__token = ''
            state.loader = false
            state.isLoggedIn = false
            state.email = ''
        }
    }
})

export const { login, loginSuccess, loginFailure, loginError, showLoginModal, logout, logoutSuccess } = authReducer.actions
export default authReducer.reducer