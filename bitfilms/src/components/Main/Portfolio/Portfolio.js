import React from 'react';
import Section from '../Section/Section';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <Section sectionClassName='portfolio' sectionTitle='Портфолио' sectionSubtitle={true}>
            <ul className='portfolio'>
                <li className='portfolio__item'>
                    <p className='portfolio__item-text'>Статичный сайт</p>
                    <a href='https://github.com/samurswife/how-to-learn/' target="_blank" rel="noopener noreferrer">
                        <div className='portfolio__link' alt='Link to portfilio'></div>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__item-text'>Адаптивный сайт</p>
                    <a href='https://github.com/samurswife/russian-travel/' target="_blank" rel="noopener noreferrer">
                        <div className='portfolio__link' alt='Link to portfilio'></div>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__item-text'>Одностраничное приложение</p>
                    <a href='https://github.com/samurswife/react-mesto-api-full/' target="_blank" rel="noopener noreferrer">
                        <div className='portfolio__link' alt='Link to portfilio'></div>
                    </a>
                </li>
            </ul>
        </Section>
    )
}

export default Portfolio;