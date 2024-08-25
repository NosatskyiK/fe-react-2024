import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    burgerOpen: false
}

const burgerOpenSlice = createSlice({
    name: 'burgerOpen',
    initialState,
    reducers: {
        setBurgerOpen: (state, action) => {
            state.burgerOpen = action.payload;
        },
    },
})

export const { setBurgerOpen } = burgerOpenSlice.actions;

export default burgerOpenSlice.reducer;
