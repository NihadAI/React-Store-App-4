import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import '../button/button.scss';

const Modal = ({ header, closeButton, text, actions, onClose }) => {
    const handleClose = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleClose} data-testid="modal">
            <div className="modal__header">
                <h1 className="modal__header-title">{header}</h1>
                {closeButton && (
                    <button className="modal__header-close" onClick={onClose}>
                        &times;
                    </button>
                )}
            </div>
            <div className="modal__main">
                <div className="modal__main-content">{text}</div>
            </div>
            {actions}
        </div>
    );
};

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    actions: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    closeButton: false,
    actions: null,
};

export default Modal;
