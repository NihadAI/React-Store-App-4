import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, onClick, className, type }) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
