import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/main/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../API/fetch';
import { addToBasket, removeFromBasket } from '../store/features/basketSlice';
import { addToFavorite, removeFromFavorite } from '../store/features/favoriteSlice';

const FavoriteList = ({ onFavoriteChange, onBasketChange }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.products);
    const favoriteItems = useSelector(state => state.favorite);
    const basketItems = useSelector(state => state.basket);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const getFavoriteProducts = () => {
        return products.filter(card => favoriteItems.includes(card.id));
    };

    const favoriteProducts = getFavoriteProducts();

    const handleAddToBasket = cardId => {
        dispatch(addToBasket(cardId));
        onBasketChange(basketItems);
    };

    const handleRemoveFromBasket = cardId => {
        dispatch(removeFromBasket(cardId));
        onBasketChange(basketItems);
    };

    const handleToggleFavorite = cardId => {
        if (favoriteItems.includes(cardId)) {
            dispatch(removeFromFavorite(cardId));
        } else {
            dispatch(addToFavorite(cardId));
        }
        onFavoriteChange(favoriteItems);
    };

    return (
        <div className="card-list container">
            {favoriteProducts.length > 0 ? (
                favoriteProducts.map(card => {
                    const isCardInBasket = basketItems.includes(card.id);

                    return (
                        <div className="card" key={card.id}>
                            <ProductCard
                                {...card}
                                onFavoriteChange={onFavoriteChange}
                                onBasketChange={onBasketChange}
                                buttonText={isCardInBasket ? 'Cart in basket' : 'Add to cart'}
                                onButtonClick={() => {
                                    isCardInBasket ? handleRemoveFromBasket(card.id) : handleAddToBasket(card.id);
                                }}
                                onFavoriteClick={() => handleToggleFavorite(card.id)}
                            />
                        </div>
                    );
                })
            ) : (
                <p className="empty-basket">Favorite is empty</p>
            )}
        </div>
    );
};

FavoriteList.propTypes = {
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
};

export default FavoriteList;
