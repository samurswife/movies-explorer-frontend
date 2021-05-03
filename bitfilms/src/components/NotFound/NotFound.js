import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();

    const goBack = () => history.goBack();

    return (
        <div className='not-found'>
            <h3 className='not-found__error'>404</h3>
            <p className='not-found__text'>Страница не найдена</p>
            <button to="/" className='not-found__return-button' onClick={goBack}>Назад</button>
        </div>
    )
}

export default NotFound;