import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../API/fetch';

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.products);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const productCards = products.map(card => {
        const basketCards = JSON.parse(localStorage.getItem('basket')) || [];
        const isCardInBasket = basketCards.includes(card.id);

        return <ProductCard key={card.id} {...card} buttonText={isCardInBasket ? 'Cart in basket' : 'Add to cart'} />;
    });

    return <div className="products">{productCards}</div>;
};

ProductsList.propTypes = {
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
};

export default ProductsList;
