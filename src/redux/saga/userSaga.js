import { takeLatest, call, put, fork, all } from "redux-saga/effects"
import { postRequest } from "../../config/axiosClient"
import { loadUser, loadUserSuccess } from "../reducers/userReducer"

function* loadUserWatcher() {
    yield takeLatest(loadUser, function* (action) {
        try {
            const resp = yield call(async () => await postRequest('/GetGuestUserProfileInfos', { Email: action.payload.email, Token: action.payload.token }))
            if(resp.data.MethodStatus) {
                yield put(loadUserSuccess(resp.data.GuestProfile))
            }
        }catch (e) {
            console.log(e)
        }
    })
}

export default function* rootSaga() {
    yield all([fork(loadUserWatcher)])
}