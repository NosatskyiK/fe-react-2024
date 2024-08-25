import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme';
import burgerOpenReducer from './reducers/burger';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        burgerOpen: burgerOpenReducer,
    },
});

export default store;
