import { BASE_MAIN_API_URL } from '../../utils/constants';
import './App.css';
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { moviesApi } from '../../utils/MoviesApi';
import { MainApi } from '../../utils/MainApi';
import * as auth from '../../utils/Auth';

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [isErrorMessageOpen, setIsErrorMessageOpen] = React.useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [isMoviesCardListVisible, setIsMoviesCardListVisible] = React.useState(false);
  const [isCheckBoxChecked, setIsCheckBoxChecked] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [searchResultMessage, setSearchResultMessage] = React.useState('');
  const [updateUserResultMessage, setUpdateUserResultMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [screenSize, setScreenSize] = React.useState(0);

  const history = useHistory();

  let mainApi = new MainApi({
    baseUrl: BASE_MAIN_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  const handleHamburgerButtonClick = () => {
    setIsNavigationOpen(true);
  }

  const handleCheckboxClick = (isChecked) => {
    setIsCheckBoxChecked(isChecked);
  }

  const closeNavigation = () => {
    setIsNavigationOpen(false);
  }

  const openErrorMessage = (message) => {
    setIsErrorMessageOpen(true);
    setErrorMessage(message);
  }

  const closeErrorMessage = () => {
    setIsErrorMessageOpen(false);
  }

  const handleRegister = (data) => {
    const { name, email, password } = data;
    return auth.register(name, email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res.token);
          getUserInfo(res.token);
          return res;
        }
      })
  }

  const handleLogin = (data) => {
    const { email, password } = data;
    return auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          getUserInfo(res.token);
        }
      })
  }

  const getUserInfo = (token) => {
    return auth.getContent(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
        }
      })
      .catch((err) => openErrorMessage(err));
  }

  const handleUpdateUser = (user) => {
    mainApi.setUserInfo(user)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          setUpdateUserResultMessage('Данные успешно изменены');
        }
      })
      .catch((err) => {
        openErrorMessage(err);
      })
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    setLoggedIn(false);
    history.push('/');
  }

  const handleSearchFormSubmit = (keyword) => {
    if (!keyword) {
      openErrorMessage('Нужно ввести ключевое слово');
    } else {
      setMovies([]);
      localStorage.removeItem('movies');
      setSearchResultMessage('');
      setIsPreloaderVisible(true);
      getAllMovies()
        .then((movies) => {
          let filteredMovies = filterMovies(movies, keyword);
          setSearchedMovies(filteredMovies);
          if (isCheckBoxChecked) {
            filteredMovies = handleCheckboxFilter(filteredMovies);
          }
          return filteredMovies;
        })
        .then((filteredMovies) => {
          if (!filteredMovies || filteredMovies.length === 0) {
            setIsPreloaderVisible(false);
            setSearchResultMessage('Ничего не найдено');
            return;
          }
          localStorage.setItem('movies', JSON.stringify(filteredMovies));
          setMovies(filteredMovies);
          setIsMoviesCardListVisible(true);
          setIsPreloaderVisible(false);
        })
        .catch((err) => {
          setIsPreloaderVisible(false);
          setSearchResultMessage(err);
        });
    }
  }

  const getAllMovies = () => {
    return moviesApi.getMovies()
      .then((movies) => {
        return movies;
      })
  }

  const getSavedMovies = () => {
    return mainApi.getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
        return savedMovies;
      })
      .catch((err) => {
        if (loggedIn) {
          openErrorMessage(err)
        }
        console.log(err);
      }
      );
  }

  const handleCheckboxFilter = (movies) => {
    return movies.filter((movie) => (movie.duration !== null) && (Number.parseInt(movie.duration) <= 40));
  }

  const filterMovies = (movies, keyword) => {
    let filteredMovies = [];
    movies.forEach((movie) => {
      if ((movie.nameRU !== null && movie.nameRU.toString().toLowerCase().includes(keyword.toLowerCase())) ||
        (movie.nameEN !== null && movie.nameEN.toString().toLowerCase().includes(keyword.toLowerCase)) ||
        (movie.description !== null && movie.description.toString().toLowerCase().includes(keyword.toLowerCase()))) {
        filteredMovies.push(movie);
      }
    });
    return filteredMovies;
  }

  const handleSaveMovie = (movieCard) => {
    mainApi.saveMovieCard(movieCard)
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => openErrorMessage(err));
  }

  const handleDeleteMovie = (movieCard) => {
    let movieToDelete = savedMovies.find((movie) => movie.movieId === (movieCard.id ? movieCard.id : movieCard.movieId));
    mainApi.deleteMovieCard(movieToDelete._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter((movie) => movie.movieId !== (movieCard.id ? movieCard.id : movieCard.movieId));
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => openErrorMessage(err));
  }

  React.useEffect(() => {
    if (isCheckBoxChecked && movies) {
      setMovies(handleCheckboxFilter(movies));
    } else {
      setMovies(searchedMovies);
    }
  }, [isCheckBoxChecked])

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserInfo(token);
    }
  }, []);

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      setMovies(movies);
      setSearchedMovies(movies);
      setIsMoviesCardListVisible(true);
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
    }
  }, [loggedIn])

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/movies');
    }
  }, [loggedIn, history]);

  React.useEffect(() => {
    setScreenSize(document.documentElement.clientWidth);
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setScreenSize(document.documentElement.clientWidth);
      }, 1000);
    })
  }, []);

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>

          <ProtectedRoute path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            savedMovies={savedMovies}
            isMoviesCardListVisible={isMoviesCardListVisible}
            isPreloaderVisible={isPreloaderVisible}
            handleSearchFormSubmit={handleSearchFormSubmit}
            searchResultMessage={searchResultMessage}
            onCkeckboxClick={handleCheckboxClick}
            screenSize={screenSize}
            onSaveMovieButtonClick={handleSaveMovie}
            onSavedMovieIconClick={handleDeleteMovie}
            handleNavigation={handleHamburgerButtonClick} />

          <ProtectedRoute path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={savedMovies}
            filterMovies={filterMovies}
            isCheckBoxChecked={isCheckBoxChecked}
            onCkeckboxClick={handleCheckboxClick}
            getSavedMovies={getSavedMovies}
            onDeleteButtonClick={handleDeleteMovie}
            onError={openErrorMessage}
            handleNavigation={handleHamburgerButtonClick} />

          <ProtectedRoute path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            currentUser={currentUser}
            updateUserResultMessage={updateUserResultMessage}
            onUpdateUser={handleUpdateUser} onLogout={handleLogout}
            handleNavigation={handleHamburgerButtonClick} />
          <Route path='*'>
            <NotFound />
          </Route>
          <Route>
            {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/' />}
          </Route>
        </Switch>
        <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
        <ErrorMessage message={errorMessage} isOpen={isErrorMessageOpen} onClose={closeErrorMessage} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
