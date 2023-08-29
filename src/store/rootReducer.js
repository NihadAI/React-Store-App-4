import { combineReducers } from 'redux';
import modalReducer from './features/modalSlice';
import dataReducer from './features/dataSlice';
import basketReducer from './features/basketSlice';
import favoriteReducer from './features/favoriteSlice';

const rootReducer = combineReducers({
    modal: modalReducer,
    data: dataReducer,
    basket: basketReducer,
    favorite: favoriteReducer,
});

export default rootReducer;
