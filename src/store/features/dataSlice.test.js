import dataReducer, { setData } from './dataSlice';

describe('dataSlice reducer', () => {
    it('should handle setData', () => {
        const initialState = {
            products: [],
        };
        const payload = ['product1', 'product2'];
        const nextState = dataReducer(initialState, setData(payload));
        expect(nextState.products).toEqual(payload);
    });
});
