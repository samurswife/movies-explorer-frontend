import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Hamburger from '../../images/hamburger.svg'
import './Header.css';

const Header = (props) => {

    return (
        <header className={ `header ${ !props.isMainPage ? 'header_white' : '' } center` }>
            <nav className='header-nav'>
                <Logo />
                {
                    props.loggedIn ?
                        <>
                            <div className='header-nav__movie-buttons'>
                                <Link to='/movies' className='header-nav__movie-button header-nav__movie-button_type_movies'>Фильмы</Link>
                                <Link to='/saved-movies' className='header-nav__movie-button header-nav__movie-button_type_saved-movies'>Сохранённые фильмы</Link>
                            </div>
                            <Link to='/profile' className='header-nav__profile-button'>Аккаунт</Link>
                            <button className='header-nav__hamburger' onClick={props.handleHamburgerClick}><img src={Hamburger} alt='hamburger-button'/></button>
                        </> :
                        <>
                            <div className='header-nav__enter-buttons'>
                                <Link to='/signup' className='header-nav__enter-button header-nav__enter-button_type_signup'>Регистрация</Link>
                                <Link to='/signin' className='header-nav__enter-button header-nav__enter-button_type_signin'>Войти</Link>
                            </div>
                        </>
                }
            </nav>
        </header>
    )
}

export default Header;