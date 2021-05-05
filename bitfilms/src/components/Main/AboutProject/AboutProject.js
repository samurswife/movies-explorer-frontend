import React from 'react';
import Section from '../Section/Section';
import './AboutProject.css';

const AboutProject = () => {
    return (
        <Section sectionClassName='about-project' sectionTitle='О проекте'>
            <div className='about-project'>
                <div className='about-project__text'>
                    <div className='about-project__text-column'>
                        <p className='about-project__text-item'>Дипломный проект включал 5 этапов</p>
                        <p className='about-project__text-item-decription'>Составление плана, работу
                        над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='about-project__text-column'>
                        <p className='about-project__text-item'>На выполнение диплома ушло 5 недель</p>
                        <p className='about-project__text-item-decription'>У каждого этапа был мягкий
                        и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className='about-project__timeline'>
                    <p className='about-project__timeline-weeks about-project__timeline-weeks_dark'>1 неделя</p>
                    <p className='about-project__timeline-weeks'>4 недели</p>
                    <p className='about-project__timeline-devs'>Back-end</p>
                    <p className='about-project__timeline-devs'>Front-end</p>
                </div>
            </div>
        </Section>
    )
}

export default AboutProject;