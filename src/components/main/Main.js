import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';
import './main.scss';
import ToggleCards from '../UI/toggle/ToggleCards';

const Main = () => {
    return (
        <div className="main">
            <div className="main__content container">
                <h1 className="main__content-title">
                    WELCOME TO<span> GSTORE, </span>CHECK OUR LATEST games
                </h1>
                <div className="main__content-cards">
                    <div className="main__content-cards__title-content">
                        <h1 className="main__content-cards__title">
                            LATEST ARRIVALS IN <span>G</span>STORE
                        </h1>
                    </div>
                    <ToggleCards />
                    <ProductsList />
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
};

export default Main;
