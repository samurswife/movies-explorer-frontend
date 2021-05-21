import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
    return (
        <div className={`error-message ${props.isOpen ? 'error-message_opened' : ''}`}>
            <div className='error-message__container'>
                <button className='error-message__close-button' type='button' onClick={props.onClose}></button>
                <div className='error-message__text'>
                    <h3 className='error-message__heading'>Ошибка!</h3>
                    <p className='error-message__message'>{props.message}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage;