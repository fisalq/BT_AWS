import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import storageSession from 'redux-persist/lib/storage/session'
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import {persistCombineReducers} from 'redux-persist'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootSaga from "./rootSaga";
import encryptStore from "../config/encryptStore";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const reducers = {
    authReducer,
    userReducer
};

const persistConfig = {
    key: 'root',
    storage: storageSession,
    version: 1,
    stateReconciler: autoMergeLevel2,
    transforms: [encryptStore]
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

// if (module.hot) {
//     module.hot.accept(reducers, () => {
//         store.replaceReducer(persistedReducer);
//     });
// }
