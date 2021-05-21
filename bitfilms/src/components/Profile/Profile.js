import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

const Profile = (props) => {

    const [values, setValues] = React.useState({
        name: '',
        email: ''
    });

    const [namelInputErrorMessage, setNameInputErrorMessage] = React.useState('');
    const [emailInputErrorMessage, setEmailInputErrorMessage] = React.useState('');
    const [nameInputIsValid, setNameInputIsValid] = React.useState(true);
    const [emailInputIsValid, setEmailInputIsValid] = React.useState(true);


    const handleChange = React.useCallback((e) => {
        const { name, value, validationMessage } = e.target;
        const { valid } = e.target.validity;

        setValues((v) => ({
            ...v,
            [name]: value
        }));

        if (name === 'name') {
            setNameInputErrorMessage(validationMessage);
            setNameInputIsValid(valid);
        } else {
            setEmailInputErrorMessage(validationMessage);
            setEmailInputIsValid(valid);
        }
    }, [setValues])


    const { name, email } = values;

    const isSubmitButtonDisabled = (props.currentUser.name === name || !nameInputIsValid  ) && (props.currentUser.email === email || !emailInputIsValid);

    React.useEffect(() => {
        setValues({
            name: props.currentUser.name,
            email: props.currentUser.email
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateUser({
            name,
            email
        })
    }

    return (
        <div className='profile'>
            <Header loggedIn={props.loggedIn} handleHamburgerClick={props.handleNavigation} />
            <div className='profile__container center'>
                <h3 className='profile__greeting'>{`Привет, ${props.currentUser.name}!`}</h3>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <div className='profile__form-input-area'>
                        <label className='profile__form-label' htmlFor='username'>Имя</label>
                        <input value={name} onChange={handleChange} name='name' id='username' className='profile__form-input' type="text" minLength='2' maxLength='40' pattern='^[A-Za-zА-Яа-яЁё\s\-]+$' required />
                    </div>
                    <span id='profile-form-input-error' className={`profile__form-input-error ${!nameInputIsValid ? 'profile__form-input-error_visible' : ''}`}>{namelInputErrorMessage}</span>
                    <div className='profile__form-input-area'>
                        <label className='profile__form-label' htmlFor='user-email'>E-mail</label>
                        <input value={email} onChange={handleChange} name='email' id='user-email' className='profile__form-input' type="email" required />
                    </div>
                    <span id='profile-form-input-error' className={`profile__form-input-error ${!emailInputIsValid ? 'profile__form-input-error_visible' : ''}`}>{emailInputErrorMessage}</span>
                    <p className='form__submit-error'>{props.updateUserResultMessage}</p>
                    <button type='submit' className={`profile__button profile__button_type_edit ${isSubmitButtonDisabled ? 'profile__button_disabled' : ''}`} disabled={isSubmitButtonDisabled}>Редактировать</button>
                </form>
                <button className='profile__button profile__button_type_logout' onClick={props.onLogout}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile;