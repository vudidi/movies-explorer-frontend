import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Favicon from 'react-favicon';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import * as MainApi from '../../utils/MainApi.js';
import { getAllMovies } from '../../utils/MoviesApi';
import * as constants from '../../utils/constants';
import { GetCardsCount, GetLoadingCardsCount } from '../../utils/getCardsCount';
import useWindowWidth from '../../hooks/getWindowWidth';
import { saveMoviesId, saveHexMoviesId } from '../../utils/getMoviesId';

function App() {
  const location = useLocation();
  const history = useNavigate();
  const path = location.pathname;
  const width = useWindowWidth();
  const cardsCount = GetCardsCount();
  const loadingCardsCount = GetLoadingCardsCount();

  // Общие стейты
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);
  const [token, setToken] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isUpdated, setUpdated] = React.useState(false);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [isPreloaderActive, setPreloaderActive] = React.useState(false);

  const [errorStatus, setErrorStatus] = React.useState(''); // Серверные ошибки
  const [isErrorActive, setErrorActive] = React.useState(false); // Общий стейт видимости ошибок

  // Стейты для страницы Фильмы
  const [allFoundMoviesLength, setAllFoundMoviesLength] = React.useState(0);
  const [visibleMovies, setVisibleMovies] = React.useState([]);
  const [visibleMoviesCount, setVisibleMoviesCount] =
    React.useState(cardsCount);
  const [isSearchText, setSearchText] = React.useState('');
  const [isShortFilmFilterMovies, setShortFilmFilterMovies] =
    React.useState(false);
  const [loadButtonIsHidden, setLoadButtonHidden] = React.useState(false);

  // Ошибки для страницы Фильмы
  const [isRequestError, setRequestError] = React.useState(false);
  const [isNoResult, setNoResult] = React.useState(false);
  const [isNoSearchText, setNoSearchText] = React.useState(false);

  // Стейты для страницы Сохраненные фильмы
  const [allSavedMoviesLength, setAllSavedMoviesLength] = React.useState(0);
  const [visibleSavedMovies, setVisibleSavedMovies] = React.useState([]);
  const [visibleSavedMoviesCount, setVisibleSavedMoviesCount] =
    React.useState(cardsCount);
  const [isSearchTextOnSaved, setSearchTextOnSaved] = React.useState('');
  const [isShortFilmFilterSavedMovies, setShortFilmFilterSavedMovies] =
    React.useState(false);
  const [loadButtonIsHiddenOnSaved, setLoadButtonHiddenOnSaved] =
    React.useState(false);

  // Ошибки для страницы Сохраненные фильмы
  const [isRequestErrorForSaved, setRequestErrorForSaved] =
    React.useState(false);
  const [isNoResultForSaved, setNoResultForSaved] = React.useState(false);
  const [isNoSearchTextForSaved, setNoSearchTextForSaved] =
    React.useState(false);

  function toggleBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  //  ...

  // Авторизация и регистрация пользователя, работа с профилем

  function loginUser(data) {
    setErrorActive(false);
    setSubmitting(true);

    MainApi.authorize(data.email, data.password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setToken(res.token);
        setLoggedIn(true);
        history('/movies');
        // tokenCheck();
      })
      .catch((err) => {
        console.log(err);
        setErrorStatus(err.status);
        setErrorActive(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  function registerUser(data) {
    setErrorActive(false);
    setSubmitting(true);
    MainApi.register(data.email, data.password, data.name)
      .then(() => {
        loginUser(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorStatus(err.status);
        setErrorActive(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  function tokenCheck() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      setToken(token);
      MainApi.getContent(token)
        .then((userData) => {
          setLoggedIn(true);
          setCurrentUser(userData);
          history(path);
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
        });
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function updateUser(data) {
    setErrorActive(false);
    MainApi.editProfile(data.name, data.email, token)
      .then((res) => {
        setCurrentUser(res);
        setUpdated(true);
        setTimeout(() => {
          setUpdated(false);
        }, 1200);
      })
      .catch((err) => {
        setErrorStatus(err.status);
        setErrorActive(true);
      });
  }

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('allFoundMovies');
    localStorage.removeItem('shortFilmFilterMovies');
    localStorage.removeItem('searchText');
    localStorage.removeItem('savedMovies');
    setVisibleMovies([]);
    setCurrentUser({});
    setAllFoundMoviesLength(0);
    setSearchText('');
    setSearchTextOnSaved('');
    setShortFilmFilterMovies(false);
    setShortFilmFilterSavedMovies(false);
    setLoggedIn(false);
    history('/');
  }

  //  ...

  // Работа с Сохраненными фильмами

  const handleInputChangeOnSaved = (e) => {
    setSearchTextOnSaved(e.target.value.toLowerCase());
    setErrorActive(false);
    setRequestErrorForSaved(false);
    setNoResultForSaved(false);
    setNoSearchTextForSaved(false);
  };

  function toggleShortFilmFilterSavedMovies(e) {
    setShortFilmFilterSavedMovies(e.target.checked);
  }

  function searchMoviesOnSaved() {
    const allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    if (!isSearchTextOnSaved) {
      setErrorActive(true);
      setNoSearchTextForSaved(true);
      return;
    }

    return allSavedMovies.filter((item) => {
      if (isShortFilmFilterSavedMovies) {
        return (
          item.nameRU.toLowerCase().includes(isSearchTextOnSaved) &&
          item.duration <= 40
        );
      }
      return item.nameRU.toLowerCase().includes(isSearchTextOnSaved);
    });
  }

  function filterSavedMovies() {
    const allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const filteredSavedMovies = searchMoviesOnSaved(allSavedMovies);

    if (!filteredSavedMovies) {
      return;
    } else {
      setVisibleSavedMovies(filteredSavedMovies);
      setAllSavedMoviesLength(filteredSavedMovies.length);

      if (filteredSavedMovies.length === 0) {
        setErrorActive(true);
        setNoResultForSaved(true);
      }
    }
  }

  function getSavedMoviesArray(arr) {
    return arr.movies.map((item) => {
      const movie = {
        _id: item._id,
        movieId: item.movieId,
        nameRU: item.nameRU,
        image: item.image,
        trailerLink: item.trailerLink,
        duration: item.duration,
      };
      return movie;
    });
  }

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([MainApi.getSavedMovies(token), MainApi.getContent(token)])
        .then(([moviesData, userData]) => {
          const movies = getSavedMoviesArray(moviesData);

          localStorage.setItem('savedMovies', JSON.stringify(movies));

          const currentMovies = movies.slice(0, visibleSavedMoviesCount);
          setAllSavedMoviesLength(movies.length);
          setVisibleSavedMovies(currentMovies);

          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('savedMovies');
          setVisibleSavedMovies([]);
          setAllSavedMoviesLength(0);
          setRequestErrorForSaved(true);
          setErrorActive(true);
        });
    }
  }, [loggedIn]);

  function getFavouriteMovies() {
    MainApi.getSavedMovies(token)
      .then((moviesData) => {
        const movies = getSavedMoviesArray(moviesData);

        localStorage.setItem('savedMovies', JSON.stringify(movies));

        setAllSavedMoviesLength(movies.length);

        setVisibleSavedMoviesCount(cardsCount);
        const currentMovies = movies.slice(0, visibleSavedMoviesCount);
        setVisibleSavedMovies(currentMovies);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem('savedMovies');
        setVisibleSavedMovies([]);
        setAllSavedMoviesLength(0);
        setRequestErrorForSaved(true);
        setErrorActive(true);
      });
  }

  React.useEffect(() => {
    allSavedMoviesLength <= visibleSavedMoviesCount
      ? setLoadButtonHiddenOnSaved(true)
      : setLoadButtonHiddenOnSaved(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSavedMovies, visibleSavedMoviesCount]);

  function getLocalSavedMovies() {
    const localMovies = localStorage?.getItem('savedMovies');
    const localParsedMovies = JSON.parse(localMovies);
    return localParsedMovies;
  }

  function loadMoreSavedMovies() {
    const localParsedMovies = getLocalSavedMovies();

    setVisibleSavedMoviesCount((prev) => prev + loadingCardsCount);

    const currentMovies = localParsedMovies?.slice(
      0,
      visibleSavedMoviesCount + cardsCount
    );

    setVisibleSavedMovies(currentMovies);
  }

  React.useEffect(() => {
    const localParsedMovies = getLocalSavedMovies();

    const currentMovies = localParsedMovies?.slice(0, cardsCount);

    setVisibleSavedMoviesCount(cardsCount);
    setVisibleSavedMovies(currentMovies);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  React.useEffect(() => {
    allFoundMoviesLength <= visibleMoviesCount
      ? setLoadButtonHidden(true)
      : setLoadButtonHidden(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleMovies, visibleMoviesCount]);

  React.useEffect(() => {
    const foundMovies = getLocalMovies();
    setAllFoundMoviesLength(foundMovies?.length || 0);
  }, []);

  function toggleSavedMovie(movie) {
    const localSavedMovies = localStorage.getItem('savedMovies');
    const localMovies = JSON.parse(localSavedMovies);
    const savedMoviesId = saveMoviesId(localMovies);
    const isLiked = savedMoviesId?.includes(movie.movieId);

    if (!isLiked) {
      MainApi.addFavouriteMovie(movie, token)
        .then(() => {
          return MainApi.getSavedMovies(token);
        })
        .then((res) => {
          localStorage.setItem('savedMovies', JSON.stringify(res.movies));
          getFavouriteMovies();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const savedHexMoviesId = saveHexMoviesId(localMovies, movie);
      MainApi.removeSavedMovie(savedHexMoviesId, token)
        .then(() => {
          return MainApi.getSavedMovies(token);
        })
        .then((res) => {
          localStorage.setItem('savedMovies', JSON.stringify(res.movies));
          getFavouriteMovies();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //  ...

  // Работа с Фильмами

  function getMoviesArray(arr) {
    return arr.map((item) => {
      const movie = {
        movieId: item.id,
        nameRU: item.nameRU || item.nameEN,
        nameEN: item.nameEN || item.nameRU,
        image:
          `${constants.movieImgUrl}${item.image.url}` ||
          'https://img2.freepng.ru/20180411/zdw/kisspng-film-reel-computer-icons-filmstrip-5acd9c16657f16.3895259415234242784157.jpg',
        trailerLink: item.trailerLink || 'https://www.youtube.com/',
        duration: item.duration || 0,
        country: item.country || '-',
        director: item.director || '-',
        year: item.year || '-',
        description: item.description || '-',
        thumbnail:
          `${constants.movieImgUrl}${item.image.formats.thumbnail.url}` ||
          'https://img2.freepng.ru/20180411/zdw/kisspng-film-reel-computer-icons-filmstrip-5acd9c16657f16.3895259415234242784157.jpg',
      };
      return movie;
    });
  }

  const handleInputChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
    setErrorActive(false);
    setRequestError(false);
    setNoResult(false);
    setNoSearchText(false);
  };

  function toggleShortFilmFilterMovies(e) {
    setShortFilmFilterMovies(e.target.checked);
  }

  React.useEffect(() => {
    const savedCheckboxFilter = JSON.parse(
      localStorage.getItem('shortFilmFilterMovies')
    );
    setShortFilmFilterMovies(savedCheckboxFilter);
    const savedSearchText = localStorage.getItem('searchText');
    setSearchText(savedSearchText);
  }, []);

  function searchMovies(arr) {
    if (!isSearchText) {
      setErrorActive(true);
      setNoSearchText(true);
      return;
    }

    return arr.filter((item) => {
      if (isShortFilmFilterMovies) {
        return (
          item.nameRU.toLowerCase().includes(isSearchText) &&
          item.duration <= 40
        );
      }
      return item.nameRU.toLowerCase().includes(isSearchText);
    });
  }

  function getMovies() {
    setVisibleMovies([]);
    setAllFoundMoviesLength(0);
    setPreloaderActive(true);
    getAllMovies()
      .then((res) => {
        const moviesArray = getMoviesArray(res);
        const searchResults = searchMovies(moviesArray);

        if (!searchResults) {
          return;
        } else {
          localStorage.setItem('allFoundMovies', JSON.stringify(searchResults));
          localStorage.setItem('searchText', isSearchText);
          localStorage.setItem(
            'shortFilmFilterMovies',
            isShortFilmFilterMovies
          );

          const currentMovies = searchResults.slice(0, visibleMoviesCount);
          setAllFoundMoviesLength(searchResults.length);
          setVisibleMovies(currentMovies);

          if (searchResults.length === 0) {
            setErrorActive(true);
            setNoResult(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem('allFoundMovies');
        setVisibleMovies([]);
        setRequestError(true);
        setErrorActive(true);
      })
      .finally(() => {
        setPreloaderActive(false);
        setVisibleMoviesCount(cardsCount);
      });
  }

  function getLocalMovies() {
    if (localStorage.getItem('allFoundMovies')) {
      const localMovies = localStorage.getItem('allFoundMovies');
      const localParsedMovies = JSON.parse(localMovies);
      return localParsedMovies;
    }
    return;
  }

  function loadMoreMovies() {
    const localParsedMovies = getLocalMovies();

    setVisibleMoviesCount((prev) => prev + loadingCardsCount);

    const currentMovies = localParsedMovies?.slice(
      0,
      visibleMoviesCount + cardsCount
    );

    setVisibleMovies(currentMovies);
  }

  React.useEffect(() => {
    const localParsedMovies = getLocalMovies();

    const currentMovies = localParsedMovies?.slice(0, cardsCount);

    setVisibleMoviesCount(cardsCount);
    setVisibleMovies(currentMovies);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  React.useEffect(() => {
    allFoundMoviesLength <= visibleMoviesCount
      ? setLoadButtonHidden(true)
      : setLoadButtonHidden(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleMovies, visibleMoviesCount]);

  React.useEffect(() => {
    const foundMovies = getLocalMovies();
    setAllFoundMoviesLength(foundMovies?.length || 0);
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Favicon url={require('../../styles/images/logo.png')}></Favicon>
        <Header
          onOpenMenu={toggleBurgerMenu}
          isMenuOpen={isBurgerMenuOpen}
          loggedIn={loggedIn}
        />
        <main>
          {' '}
          <Routes>
            <Route exact path="/" element={<Main />}></Route>

            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
              <Route
                path="/movies"
                element={
                  <Movies
                    onGetMovies={getMovies}
                    movies={visibleMovies}
                    moviesLength={allFoundMoviesLength}
                    inputChangeHandler={handleInputChange}
                    isPreloaderActive={isPreloaderActive}
                    handleLoadButton={loadMoreMovies}
                    isHidden={loadButtonIsHidden}
                    handleToggleMovie={toggleSavedMovie}
                    toggleCheckbox={toggleShortFilmFilterMovies}
                    isShortFilmFilter={isShortFilmFilterMovies}
                    SearchText={isSearchText}
                    isErrorActive={isErrorActive}
                    isRequestError={isRequestError}
                    isNoResult={isNoResult}
                    isNoSearchText={isNoSearchText}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <SavedMovies
                    onFilterMovies={filterSavedMovies}
                    movies={visibleSavedMovies}
                    moviesLength={allSavedMoviesLength}
                    handleLoadButton={loadMoreSavedMovies}
                    isHidden={loadButtonIsHiddenOnSaved}
                    handleToggleMovie={toggleSavedMovie}
                    inputChangeHandler={handleInputChangeOnSaved}
                    toggleCheckbox={toggleShortFilmFilterSavedMovies}
                    isShortFilmFilter={isShortFilmFilterSavedMovies}
                    SearchText={isSearchTextOnSaved}
                    isErrorActive={isErrorActive}
                    isRequestError={isRequestErrorForSaved}
                    isNoResult={isNoResultForSaved}
                    isNoSearchText={isNoSearchTextForSaved}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    onSignOut={signOut}
                    onUpdateUser={updateUser}
                    status={errorStatus}
                    isErrorActive={isErrorActive}
                    isUpdated={isUpdated}
                  />
                }
              />
            </Route>

            <Route
              path="/signup"
              element={
                <Register
                  handleRegister={registerUser}
                  status={errorStatus}
                  isErrorActive={isErrorActive}
                  isSubmitting={isSubmitting}
                />
              }
            ></Route>
            <Route
              path="/signin"
              element={
                <Login
                  handleLogin={loginUser}
                  status={errorStatus}
                  isErrorActive={isErrorActive}
                  isSubmitting={isSubmitting}
                />
              }
            ></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
