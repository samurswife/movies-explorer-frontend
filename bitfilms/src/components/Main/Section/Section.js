import React from 'react';
import './Section.css';

const Section = (props) => {
    return (
        <section className={`section section_${props.sectionClassName} center`}>
            <h2 className={`section__title ${props.sectionSubtitle ? 'section__title_small' : ''}`}>{props.sectionTitle}</h2>
            {props.children}
        </section>
    )
}

export default Section;