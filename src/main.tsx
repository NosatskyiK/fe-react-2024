import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '@/store/store';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <HashRouter>
                <App />
            </HashRouter>
        </React.StrictMode>
    </Provider>,
);
