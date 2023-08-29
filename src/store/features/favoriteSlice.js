import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: JSON.parse(localStorage.getItem('favorite')) || [],
    reducers: {
        addToFavorite: (state, action) => {
            const cardId = action.payload;
            if (!state.includes(cardId)) {
                state.push(cardId);
                localStorage.setItem('favorite', JSON.stringify(state));
            }
        },
        removeFromFavorite: (state, action) => {
            const cardId = action.payload;
            const updatedFavorite = state.filter(id => id !== cardId);
            localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
            return updatedFavorite;
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
