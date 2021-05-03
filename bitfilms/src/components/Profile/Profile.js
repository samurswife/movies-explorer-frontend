import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

const Profile = (props) => {

    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');

    const handleUserNameInputChange = (e) => {
        setUserName(e.target.value);
    }

    const handleUserEmailInputChange = (e) => {
        setUserEmail(e.target.value);
    }

    React.useEffect(() => {
        setUserName(props.user.name);
        setUserEmail(props.user.email);
    }, [props.user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Edited!');
    }

    const loggedIn = true;

    return (
        <div className='profile'>
            <Header loggedIn={loggedIn} handleHamburgerClick={props.handleNavigation} />
            <div className='profile__container center'>
                <h3 className='profile__greeting'>{`Привет, ${userName}!`}</h3>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <div className='profile__form-input-area'>
                        <label className='profile__form-label' htmlFor='username'>Имя</label>
                        <input value={userName} onChange={handleUserNameInputChange} id='username' className='profile__form-input' type="text" minLength='2' maxLength='40' required />
                    </div>
                    <div className='profile__form-input-area'>
                        <label className='profile__form-label' htmlFor='user-email'>E-mail</label>
                        <input value={userEmail} onChange={handleUserEmailInputChange} id='user-email' className='profile__form-input' type="email" required />
                    </div>
                    <span id='profile-form-input-error' className='profile__form-input-error'>Что-то пошло не так...</span>
                    <button type='submit' className='profile__button profile__button_type_edit'>Редактировать</button>
                </form>
                <button className='profile__button profile__button_type_logout'>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile;