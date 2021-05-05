import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/logo.svg';

const Logo = () => {
    return (
        <Link to='/' className='logo'>
            <img src={logo} alt='Logo' />
        </Link>
    )
}

export default Logo;