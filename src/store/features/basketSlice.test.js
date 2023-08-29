import basketReducer, { addToBasket, removeFromBasket, removeAllFromBasket } from './basketSlice';
import 'jest-localstorage-mock';

describe('basketSlice reducer', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('should handle addToBasket', () => {
        const initialState = [];
        const cardId = 1;
        const nextState = basketReducer(initialState, addToBasket(cardId));
        expect(nextState).toContain(cardId);
        expect(localStorage.setItem).toHaveBeenCalledWith('basket', JSON.stringify(nextState));
    });

    it('should handle removeFromBasket', () => {
        const initialState = [1, 2, 3];
        const cardIds = [2];
        const nextState = basketReducer(initialState, removeFromBasket(cardIds));
        expect(nextState).toEqual([1, 3]);
        expect(localStorage.setItem).toHaveBeenCalledWith('basket', JSON.stringify(nextState));
    });

    it('should handle removeAllFromBasket', () => {
        const initialState = [1, 2, 3];
        const nextState = basketReducer(initialState, removeAllFromBasket());
        expect(nextState).toEqual([]);
        expect(localStorage.removeItem).toHaveBeenCalledWith('basket');
    });
});
