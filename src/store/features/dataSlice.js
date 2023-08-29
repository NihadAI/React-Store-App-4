import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        products: [],
    },
    reducers: {
        setData: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
