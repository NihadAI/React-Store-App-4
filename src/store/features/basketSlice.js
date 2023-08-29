import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: JSON.parse(localStorage.getItem('basket')) || [],
    reducers: {
        addToBasket: (state, action) => {
            const cardId = action.payload;
            console.log(cardId);
            if (!state.includes(cardId)) {
                state.push(cardId);
                localStorage.setItem('basket', JSON.stringify(state));
            }
        },
        removeFromBasket: (state, action) => {
            const cardIds = Array.isArray(action.payload) ? action.payload : [action.payload];
            const updatedBasket = state.filter(id => !cardIds.includes(id));
            localStorage.setItem('basket', JSON.stringify(updatedBasket));
            return updatedBasket;
        },
        removeAllFromBasket: state => {
            localStorage.removeItem('basket');
            return [];
        },
    },
});

export const { addToBasket, removeFromBasket, removeAllFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
