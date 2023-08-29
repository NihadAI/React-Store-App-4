import React, { createContext, useState } from 'react';

const ToggleContext = createContext();

const ToggleCardsProvider = ({ children }) => {
    const [isCard, setIsCard] = useState(true);

    const toggleView = () => {
        setIsCard(prevState => !prevState);
    };

    return <ToggleContext.Provider value={{ isCard, toggleView }}>{children}</ToggleContext.Provider>;
};

export { ToggleContext, ToggleCardsProvider };
