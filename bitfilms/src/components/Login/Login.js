import React from 'react';
import { useHistory } from 'react-router-dom';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Login.css';

const Login = (props) => {
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });

    const [emailInputErrorMessage, setEmailInputErrorMessage] = React.useState('');
    const [passwordInputErrorMessage, setPasswordInputErrorMessage] = React.useState('');
    const [emailInputIsValid, setEmailInputIsValid] = React.useState(false);
    const [passwordInputIsValid, setPasswordInputIsValid] = React.useState(false);
    const [error, setError] = React.useState('');

    const history = useHistory();

    const handleChange = React.useCallback((e) => {
        const { name, value, validationMessage } = e.target;
        const { valid } = e.target.validity;

        setValues(v => ({
            ...v,
            [name]: value
        }));

        if (name === 'email') {
            setEmailInputErrorMessage(validationMessage);
            setEmailInputIsValid(valid);
        } else {
            setPasswordInputErrorMessage(validationMessage);
            setPasswordInputIsValid(valid);
        }
    }, [setValues])


    const { email, password } = values;

    const isSubmitButtonDisabled = !emailInputIsValid || !passwordInputIsValid;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(values)
        .then(() => history.push('/movies'))
        .catch((err) => {
            setError(err);
            console.log(err);
        })
    }
    return (
        <PageWithForm greeting='Рады видеть!' formType='login' isSubmitButtonDisabled={isSubmitButtonDisabled} handleSubmit={handleSubmit}>
            <label className='form__label' htmlFor="email">E-mail</label>
            <input value={email} onChange={handleChange} name='email' id='email' className={`form__input ${!emailInputIsValid ? 'form__input_type_error' : ''}`} type='email' required />
            <span id='email-input-error' className={`form__input-error form__input-error_type_login ${!emailInputIsValid ? 'form__input-error_visible' : ''}`}>{emailInputErrorMessage}</span>
            <label className='form__label' htmlFor="password">Пароль</label>
            <input value={password} onChange={handleChange} name='password' id='password' className={`form__input ${!passwordInputIsValid ? 'form__input_type_error' : ''}`} type='password' minLength='8' maxLength='20' required />
            <span id='password-input-error' className={`form__input-error form__input-error_type_login ${!passwordInputIsValid ? 'form__input-error_visible' : ''}`}>{passwordInputErrorMessage}</span>
            <p className='form__submit-error'>{error}</p>
        </PageWithForm>
    )
}

export default Login;