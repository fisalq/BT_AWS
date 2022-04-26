import { all } from 'redux-saga/effects'
import authSaga from './saga/authSaga'
import userSaga from './saga/userSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        userSaga()
    ])
}