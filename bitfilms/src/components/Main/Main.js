import React from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = (props) => {

    return (
        <main className='main'>
            <Header loggedIn={props.loggedIn} handleHamburgerClick={props.handleNavigation} isMainPage={true}/>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}

export default Main;