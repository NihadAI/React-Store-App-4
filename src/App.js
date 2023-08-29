import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import BasketList from './pages/BasketList';
import FavoriteList from './pages/FavoriteList';
import './App.scss';
import { ToggleCardsProvider } from './components/UI/toggle/ToggleCardsProvider';

const App = () => {
    const basketItems = useSelector(state => state.basket);
    const favoriteItems = useSelector(state => state.favorite);

    return (
        <ToggleCardsProvider>
            <Router>
                <div className="App">
                    <Header favoriteCount={favoriteItems.length} shoppingBasketCount={basketItems.length} />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/basket" element={<BasketList />} />
                        <Route path="/favorite" element={<FavoriteList />} />
                    </Routes>
                </div>
            </Router>
        </ToggleCardsProvider>
    );
};

App.propTypes = {
    favoriteCount: PropTypes.number,
    shoppingBasketCount: PropTypes.number,
};

export default App;
