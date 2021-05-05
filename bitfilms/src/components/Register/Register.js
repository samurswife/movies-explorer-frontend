import React from 'react';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registered!');
    }
    return (
        <PageWithForm greeting='Добро пожаловать!' formType='register' handleSubmit={handleSubmit}>
            <label className='form__label' htmlFor="name">Имя</label>
            <input id='name' className='form__input' type='text' minLength='2' maxLength='40' required />
            <span id='name-input-error' className='form__input-error'>Что-то пошло не так...</span>
            <label className='form__label' htmlFor="email">E-mail</label>
            <input id='email' className='form__input' type='email' required />
            <span id='email-input-error' className='form__input-error'>Что-то пошло не так...</span>
            <label className='form__label' htmlFor="password">Пароль</label>
            <input id='password' className='form__input form__input_type_error' type='password' minLength='8' maxLength='20' required />
            <span id='password-input-error' className='form__input-error form__input-error_visible'>Что-то пошло не так...</span>
        </PageWithForm>
    )
}

export default Register;