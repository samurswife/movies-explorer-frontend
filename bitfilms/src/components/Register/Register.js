import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css';

const Register = (props) => {
    const history = useHistory();

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const [nameInputErrorMessage, setNameInputErrorMessage] = React.useState('');
    const [emailInputErrorMessage, setEmailInputErrorMessage] = React.useState('');
    const [passwordInputErrorMessage, setPasswordInputErrorMessage] = React.useState('');
    const [nameInputIsValid, setNameInputIsValid] = React.useState(false);
    const [emailInputIsValid, setEmailInputIsValid] = React.useState(false);
    const [passwordInputIsValid, setPasswordInputIsValid] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleChange = useCallback((e) => {
        const { name, value, validationMessage } = e.target;
        const { valid } = e.target.validity;

        setValues(values => ({
            ...values,
            [name]: value
        }));

        if (name === 'name') {
            setNameInputErrorMessage(validationMessage);
            setNameInputIsValid(valid)
        } else if (name === 'email') {
            setEmailInputErrorMessage(validationMessage);
            setEmailInputIsValid(valid)
        } else {
            setPasswordInputErrorMessage(validationMessage);
            setPasswordInputIsValid(valid);
        }
    }, [setValues, setNameInputErrorMessage]);


    const { name, email, password } = values;

    const isSubmitButtonDisabled = !nameInputIsValid || !emailInputIsValid || !passwordInputIsValid;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(values)
            .then((res) => {
                if (res) {
                    history.push('/movies');
                }
            })
            .catch ((err) => {
                setError(err);
                console.log(err);
            });
    }

return (
    <PageWithForm greeting='Добро пожаловать!' formType='register' isSubmitButtonDisabled={isSubmitButtonDisabled} handleSubmit={handleSubmit}>
        <label className='form__label' htmlFor="name">Имя</label>
        <input value={name} name='name' onChange={handleChange} id='name' className={`form__input ${!nameInputIsValid ? 'form__input_type_error' : ''}`} type='text' minLength='2' maxLength='40' pattern='^[A-Za-zА-Яа-яЁё\s\-]+$' required />
        <span id='name-input-error' className={`form__input-error ${!nameInputIsValid ? 'form__input-error_visible' : ''}`}>
            {nameInputErrorMessage}
        </span>
        <label className='form__label' htmlFor="email">E-mail</label>
        <input value={email} name='email' onChange={handleChange} id='email' className={`form__input ${!emailInputIsValid ? 'form__input_type_error' : ''}`} type='email' required />
        <span id='email-input-error' className={`form__input-error ${!emailInputIsValid ? 'form__input-error_visible' : ''}`}>
            {emailInputErrorMessage}
        </span>
        <label className='form__label' htmlFor="password">Пароль</label>
        <input value={password} name='password' onChange={handleChange} id='password' className={`form__input ${!passwordInputIsValid ? 'form__input_type_error' : ''}`} type='password' minLength='8' maxLength='20' required />
        <span id='password-input-error' className={`form__input-error ${!passwordInputIsValid ? 'form__input-error_visible' : ''}`}>
            {passwordInputErrorMessage}
        </span>
        <p className='form__submit-error'>{error}</p>
    </PageWithForm>
)
}

export default Register;