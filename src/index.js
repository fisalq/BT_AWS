import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './redux/store'
import {QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter as Router } from 'react-router-dom'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import GlobalLoader from "./components/partials/GlobalLoader";

let persistor = persistStore(store);

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false, retry: 2}}})

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<GlobalLoader />} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <App/>
                </Router>
            </QueryClientProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
