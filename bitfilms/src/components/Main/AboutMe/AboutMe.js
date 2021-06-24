import React from 'react';
import Section from '../Section/Section';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <Section sectionClassName='about-me' sectionTitle='Студент'>
            <div className='about-me'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>Марина</h3>
                    <p className='about-me__description'>Фронтенд-разработчик, 33 года</p>
                    <p className='about-me__bio'>Я родилась и живу в Красноярске, закончила филологический факультет СФУ. Я люблю читать, 
                    путешествовать, увлекаюсь бегом. Недавно начала кодить. В июне 2021 года окончила курс по веб-разработке в Яндекс.Практикум и теперь планирую 
                    найти постоянную работу в этой сфере.</p>
                    <ul className='about-me__social-links'>
                        <li className='about-me__social-link-item'>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='about-me__social-link'>Facebook</a>
                        </li>
                        <li className='about-me__social-link-item'>
                            <a href="https://github.com/samurswife/" target="_blank" rel="noopener noreferrer" className='about-me__social-link'>Github</a>
                        </li>
                    </ul>
                </div>
                <div className='about-me__photo' alt='Фотография студента'></div>
            </div>
        </Section>
    )
}

export default AboutMe;