import React, { useContext } from 'react';
import './toggleCards.scss';
import { ToggleContext } from './ToggleCardsProvider';

const ToggleCards = () => {
    const { isCard, toggleView } = useContext(ToggleContext);

    return (
        <div className="toggle-cards">
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="grid-icon" className={`css-x8lixe ${isCard ? 'active' : ''}`} onClick={toggleView}>
                <path
                    d="m10 13 1 1v7l-1 1H3l-1-1v-7l1-1h7zm7.5 0c2.481 0 4.5 2.018 4.5 4.5S19.981 22 17.5 22a4.505 4.505 0 0 1-4.5-4.5c0-2.482 2.019-4.5 4.5-4.5zM9 15H4v5h5v-5zm8.5 0a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM10 2l1 1v7l-1 1H3l-1-1V3l1-1h7zm11 0 1 1v7l-1 1h-7l-1-1V3l1-1h7zM9 4H4v5h5V4zm11 0h-5v5h5V4z"
                    fill="currentColor"
                    fillRule="evenodd"
                ></path>
            </svg>
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="list-icon" className={`css-73cnv0 ${!isCard ? 'active' : ''}`} onClick={toggleView}>
                <path d="m21 13 1 1v7l-1 1H3l-1-1v-7l1-1h18zm-1 2H4v5h16v-5zm1-13 1 1v7l-1 1H3l-1-1V3l1-1h18zm-1 2H4v5h16V4z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
        </div>
    );
};

export default ToggleCards;
