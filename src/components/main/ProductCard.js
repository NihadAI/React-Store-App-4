import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/button/Button';
import Modal from '../UI/modal/Modal';
import './productCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/features/basketSlice';
import { addToFavorite, removeFromFavorite } from '../../store/features/favoriteSlice';
import { ToggleContext } from '../UI/toggle/ToggleCardsProvider';

const ProductCard = ({ id, image, name, genre, price, hideStar, hideButton, buttonText }) => {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket);
    const favoriteItems = useSelector(state => state.favorite);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isCard } = useContext(ToggleContext);

    const isCardInBasket = basketItems.includes(id);
    const isCardInFavorite = favoriteItems.includes(id);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFavorite = () => {
        if (isCardInFavorite) {
            dispatch(removeFromFavorite(id));
        } else {
            dispatch(addToFavorite(id));
        }
    };

    const handleBasket = () => {
        if (isCardInBasket) {
            dispatch(removeFromBasket(id));
        } else {
            dispatch(addToBasket(id));
        }
        handleCloseModal();
    };

    const cardClassName = isCard ? 'card' : 'card-list';

    return (
        <div className={cardClassName}>
            <div className="card__img-container">
                <img className="card__img" src={image} alt="" />
            </div>

            <div className="card__main">
                {!hideStar && <img className="card__main-favorite-icon" src={isCardInFavorite ? '/img/star-colored.svg' : '/img/star-black.svg'} onClick={handleFavorite} alt="favorite star" />}
                <h1 className="card__main-name">{name}</h1>
                <p className="card__main-genre">{genre}</p>
            </div>
            <div className="card__footer">
                <p className="card__footer-price">{price} $</p>
                {!hideButton && <Button className="card__footer-button" text={buttonText} onClick={handleOpenModal} />}
                {isModalOpen && (
                    <Modal
                        header={name}
                        closeButton={true}
                        onClose={handleCloseModal}
                        text={isCardInBasket ? 'Are you sure you want to remove this game from your shopping basket?' : 'Are you sure you want to add this game to your shopping basket?'}
                        actions={
                            <div className="modal__footer">
                                <Button className="card__footer-button" text="Yes" onClick={handleBasket} />
                                <Button className="card__footer-button" text="No" onClick={handleCloseModal} />
                            </div>
                        }
                    />
                )}
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
    hideStar: PropTypes.bool,
    hideButton: PropTypes.bool,
    buttonText: PropTypes.string,
};

ProductCard.defaultProps = {
    hideStar: false,
    hideButton: false,
    buttonText: '',
};

export default ProductCard;
