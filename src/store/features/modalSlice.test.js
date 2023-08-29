import modalReducer, { openModal, closeModal } from './modalSlice';

describe('modalSlice reducer', () => {
    it('should handle openModal', () => {
        const initialState = false;
        const nextState = modalReducer(initialState, openModal());
        expect(nextState).toBe(true);
    });

    it('should handle closeModal', () => {
        const initialState = true;
        const nextState = modalReducer(initialState, closeModal());
        expect(nextState).toBe(false);
    });
});
