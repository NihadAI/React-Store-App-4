import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        openModal: state => true,
        closeModal: state => false,
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
