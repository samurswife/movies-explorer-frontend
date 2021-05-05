import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Movies/Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage'

import { movies, savedMovies, user } from '../../utils/data';

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [isErrorMessageOpen, setIsErrorMessageOpen] = React.useState(false);

  const handleHamburgerButtonClick = () => {
    setIsNavigationOpen(true);
  }

  const closeNavigation = () => {
    setIsNavigationOpen(false);
  }

  const closeErrorMessage = () => {
    setIsErrorMessageOpen(false);
  }

  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies movies={movies} handleNavigation={handleHamburgerButtonClick} />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies movies={savedMovies} fromSavedMovies={true} handleNavigation={handleHamburgerButtonClick} />
        </Route>
        <Route path='/profile'>
          <Profile handleNavigation={handleHamburgerButtonClick} user={user} />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
      <Preloader />
      <ErrorMessage isOpen={isErrorMessageOpen} onClose={closeErrorMessage}/>
    </div>
  );
}

export default App;
