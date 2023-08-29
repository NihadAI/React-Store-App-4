import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/main/ProductCard';
import Button from '../components/UI/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../API/fetch';
import { removeFromBasket, removeAllFromBasket } from '../store/features/basketSlice';
import BuyForm from '../components/form/BuyForm';
import Modal from '../components/UI/modal/Modal';
import { openModal, closeModal } from '../store/features/modalSlice';

const BasketList = () => {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket);
    const products = useSelector(state => state.data.products);
    const isModalOpen = useSelector(state => state.modal);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const getBasketProducts = () => {
        return products.filter(card => basketItems.includes(card.id));
    };

    const basketProducts = getBasketProducts();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleRemoveFromBasket = cardId => {
        dispatch(removeFromBasket(cardId));
    };

    const handleOpenModal = card => {
        setSelectedCard(card);
        dispatch(openModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const handleBuyConfirm = card => {
        if (Array.isArray(card)) {
            handleRemoveAllFromBasket();
        } else {
            handleRemoveFromBasket(card.id);
        }
        handleCloseModal();
        alert('Thank you for buying our product!');
    };

    const handleBuyAll = () => {
        handleOpenModal(basketProducts);
    };

    const handleRemoveAllFromBasket = () => {
        dispatch(removeAllFromBasket());
        handleCloseModal();
    };

    return (
        <div className="card-list container">
            {basketProducts.length > 0 ? (
                basketProducts.map(card => (
                    <div className="card" key={card.id}>
                        <ProductCard {...card} hideStar buttonText="X" onButtonClick={() => handleRemoveFromBasket(card.id)} />

                        <Button className="card__footer-button buy-button" text="buy" onClick={() => handleOpenModal(card)} />
                    </div>
                ))
            ) : (
                <p className="empty-basket">Shopping basket is empty</p>
            )}
            {basketProducts.length > 0 && <Button className="card__footer-button buy-button" text="Buy All" onClick={handleBuyAll} />}
            {isModalOpen && selectedCard && <Modal header="Buy Confirm" closeButton text={<BuyForm card={selectedCard} onBuyConfirm={handleBuyConfirm} />} onClose={handleCloseModal} />}
        </div>
    );
};

BasketList.propTypes = {
    onBasketChange: PropTypes.func,
};

export default BasketList;
