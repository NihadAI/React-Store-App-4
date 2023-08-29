import axios from 'axios';
import { setData } from '../store/features/dataSlice';

export const fetchData = () => {
    return async dispatch => {
        const response = await axios.get('/products.json');
        const data = response.data.products;
        dispatch(setData(data));
    };
};
