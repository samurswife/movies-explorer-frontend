import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import closeButton from '../../images/close-button.svg';

const Navigation = (props) => {
    return (
        <div className={`navigation ${ props.isOpen ? 'navigation_opened' : '' }`}>
            <div className='navigation__bar'>
                <button className='navigation__close-button' onClick={props.onClose}><img src={closeButton} alt='close-button'/></button>
                <nav className='navigation__links'>
                    <NavLink exact to='/' className='navigation__link' activeClassName='navigation__link_active' onClick={props.onClose}>Главная</NavLink>
                    <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active' onClick={props.onClose}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className='navigation__link' activeClassName='navigation__link_active' onClick={props.onClose}>Сохранённые фильмы</NavLink>
                    <NavLink to='/profile' className='navigation__link navigation__link_type_profile' activeClassName='navigation__link_active' onClick={props.onClose}>Аккаунт</NavLink>
                </nav>
            </div>
        </div>
    )
}
export default Navigation;