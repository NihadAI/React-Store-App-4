import favoriteReducer, { addToFavorite, removeFromFavorite } from './favoriteSlice';

describe('favoriteSlice reducer', () => {
    it('should handle addToFavorite', () => {
        const initialState = [];
        const cardId = 1;
        const nextState = favoriteReducer(initialState, addToFavorite(cardId));
        expect(nextState).toContain(cardId);
    });

    it('should handle removeFromFavorite', () => {
        const initialState = [1, 2, 3];
        const cardId = 2;
        const nextState = favoriteReducer(initialState, removeFromFavorite(cardId));
        expect(nextState).not.toContain(cardId);
    });
});
