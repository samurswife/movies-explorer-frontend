import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer center'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__copyright'>&copy; 2020</p>
                <nav className='footer__nav'>
                    <ul className='footer__links'>
                        <li className='footer__link-item'><a href='https://praktikum.yandex.ru/' target="_blank" rel="noopener noreferrer" className='footer__link'>Яндекс.Практикум</a></li>
                        <li className='footer__link-item'><a href='https://github.com/samurswife/' target="_blank" rel="noopener noreferrer" className='footer__link'>Github</a></li>
                        <li className='footer__link-item'><a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='footer__link'>Facebook</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;