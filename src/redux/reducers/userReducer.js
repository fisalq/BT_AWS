import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    loader: false
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loadUser: state => {
            state.loader = true
        },
        loadUserSuccess: (state, action) => {
            state.loader = false
            state.user = action.payload
        }
    }
})

export const { loadUser, loadUserSuccess } = userReducer.actions
export default userReducer.reducer