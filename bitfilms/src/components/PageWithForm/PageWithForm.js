import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './PageWithForm.css';

const PageWithForm = (props) => {
    return (
        <div className='page-with-form center'>
            <div className='page-with-form__header'>
                <Logo />
                <h3 className='page-with-form__greeting'>{props.greeting}</h3>
            </div>
            <form className={`form form_type_${props.formType}`} name={props.formType} method='POST' onSubmit={props.handleSubmit}>
                {props.children}
                <button type="submit" className="form__button">{props.formType === 'register' ? 'Зарегистрироваться' : 'Войти'}</button>
            </form>
            { props.formType === 'register' ?
                <p className='page-with-form__hint'>Уже зарегистрированы?<Link to='/signin' className='page-with-form__hint-link'>Войти</Link></p> :
                <p className='page-with-form__hint'>Ещё не зарегистрированы?<Link to='/signup' className='page-with-form__hint-link'>Регистрация</Link></p>
            }
        </div>
    )
}

export default PageWithForm;