import React from 'react';
import Section from '../Section/Section';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <Section sectionClassName='about-me' sectionTitle='Студент'>
            <div className='about-me'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>Виталий</h3>
                    <p className='about-me__description'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании 
                    «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с 
                    постоянной работы.</p>
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