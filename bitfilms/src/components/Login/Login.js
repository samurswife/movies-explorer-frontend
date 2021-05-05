import React from 'react';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Login.css';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logged in!');
    }
    return (
        <PageWithForm greeting='Рады видеть!' formType='login' handleSubmit={handleSubmit}>
            <label className='form__label' htmlFor="email">E-mail</label>
            <input id='email' className='form__input' type='email' required />
            <span id='email-input-error' className='form__input-error'>Что-то пошло не так...</span>
            <label className='form__label' htmlFor="password">Пароль</label>
            <input id='password' className='form__input form__input_type_error' type='password' minLength='8' maxLength='20' required />
            <span id='password-input-error' className='form__input-error form__input-error_visible form__input-error_form_login'>Что-то пошло не так...</span>
        </PageWithForm>
    )
}

export default Login;