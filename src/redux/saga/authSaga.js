import { takeLatest, call, put, fork, all } from "redux-saga/effects"
import { postRequest } from "../../config/axiosClient"
import {login, loginSuccess, loginFailure, loginError, logout, logoutSuccess} from "../reducers/authReducer"
import {loadUser} from "../reducers/userReducer";
// import {loadUser, userLoggedOutFailure, userLoggedOutSuccess} from "../user/userReducer";

function* loginUser(credentials) {
    const resp = yield call(() =>
        postRequest('/Login', credentials).then(
            (response) => response.data
        )
    )

    if (resp) {
        return resp
    }
}

function* loginWatcher() {
    yield takeLatest(login, function* (action) {
        try {
            const response = yield call(() => loginUser(action.payload))
            if(response.MethodStatus) {
                yield put(loginSuccess({ email: action.payload.Email, ...response }))
                yield put(loadUser({ email: action.payload.Email, token: response.Token }))
            } else {
                yield put(loginError(response))
            }
        } catch (e) {
            yield put(loginFailure())
        }
    })
}

function* logoutWatcher() {
    yield takeLatest(logout, function* (action) {
        try {
            const response = yield call(async () => {
                return await postRequest('/Logout', { Email: action.payload.email, Token: action.payload.token })
            })
            if(response.data.MethodStatus) {
                yield put(logoutSuccess())

                setTimeout(()=>{
                    window.location.reload()
                },400)
            }
        }catch (e) {
            console.log(e)
        }
    })
}
export default function* rootSaga() {
    yield all([fork(loginWatcher), fork(logoutWatcher)])
}