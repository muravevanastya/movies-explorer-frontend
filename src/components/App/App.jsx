import React from 'react';
import { Route, Routes, useNavigate, useLocation, HashRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/MainApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { moviesApi } from '../../utils/MoviesApi';

function App() {
  const navigate = useNavigate()
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [loginError, setLoginError] = React.useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = React.useState('');

  const [registrationError, setRegistrationError] = React.useState(false);
  const [registrationErrorMessage, setRegistrationErrorMessage] = React.useState('');

  const [editErrorMessage, setEditErrorMessage] = React.useState('');
  const [editSuccessMessage, setEditSuccessMessage] = React.useState('');
  const [isEditProfileSuccessful, setIsEditProfileSuccessful] = React.useState(false);

  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [preloader, setPreloader] = React.useState(false);

  const [loadingError, setLoadingError] = React.useState('');

  function checkToken() {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if(res) {
            setCurrentUser(res.user)
            setIsLoggedIn(true);
            navigate(path, { replace: true })
          }
        })
        .catch(err => console.log(err));
    }
  }

  React.useEffect(() => {
    checkToken()
  }, [])

  function handleRegister({ password, email, name }) {
    auth.register({ password, email, name })
      .then(() => {
        handleAuth({password, email})
      })
      .catch((err) => {
        console.log(err);
        setRegistrationError(true);
        setRegistrationErrorMessage('Не удалось зарегистрироваться')
      })
  }

  function handleAuth({ password, email }) {
    auth.authorize({ password, email })
      .then(() => {
        api.getUserInfo()
          .then((res) => {
            setCurrentUser(res.user);
            setIsLoggedIn(true);
            navigate('/movies', { replace: true });
            console.log(res.user);
          })
      })
      .catch((err) => {
        setLoginError(true);
        setLoginErrorMessage('Не удалось войти. Пожалуйста, проверьте данные');
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setLoginErrorMessage('');
    setCurrentUser({});
    localStorage.removeItem('allMovies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('filterIsOn');
    localStorage.removeItem('filteredShortMovies');
    setAllMovies([]);
    setFilteredMovies([]);
    setSavedMovies([]);
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      const path = location.pathname;
      if (path === '/signin' || path === '/signup') {
        navigate('/movies', { replace: true });
      }
    }
  }, [isLoggedIn, location, navigate]);

  function handleEditUser(userData) {
    api.setUserInfoApi(userData.name, userData.email)
      .then((data) => {
        setIsEditProfileSuccessful(true);
        setCurrentUser({
          ...currentUser,
          name: data.user.name,
          email: data.user.email,
        })
        setEditSuccessMessage('Данные успешно отредактированы')
      })
      .catch((err) => {
        setIsEditProfileSuccessful(false);
        setEditErrorMessage('Что-то пошло не так... Пожалуйста, проверьте данные');
        console.log(err);
      })
  }

  function getAllMovies() {
    moviesApi.getMovies()
      .then((allMoviesData) => {
        localStorage.setItem('allMovies', JSON.stringify(allMoviesData));
        setAllMovies(allMoviesData);
        setFilteredMovies(allMoviesData);
      })
      .catch(() => {
        localStorage.removeItem('allMovies');
        setLoadingError(true)
      })
  }

  function searchFilter(data, searchQuery) {
    if (searchQuery) {
      return data.filter((item) => item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return [];
  };

  function handleSearch(searchQuery) {
    setPreloader(true);
    setTimeout(() => {
      const filtered = searchFilter(allMovies, searchQuery);
      setFilteredMovies(filtered);
      localStorage.setItem('filteredMovies', JSON.stringify(filtered));
      setPreloader(false);
    }, 600);
  }

  React.useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('filteredMovies'));
    if (storedResults) {
      setFilteredMovies(storedResults);
    }
  }, [])

  function getSavedMovies() {
    api.getSavedMovies()
      .then((data) => {
        const savedArray = data.map((item) => ({ ...item, id: item.movieId }));
        setSavedMovies(savedArray);
      })
      .catch(() => {
        localStorage.removeItem('savedMovies');
        setLoadingError(true)
      })
  }

  React.useEffect(() => {
    const allMoviesArr = JSON.parse(localStorage.getItem('allMovies'));
    if (allMoviesArr) {
      setAllMovies(allMoviesArr);
    } else {
      getAllMovies();
    }

    const savedMoviesArr = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMoviesArr) {
      setSavedMovies(savedMoviesArr);
    } else {
      getSavedMovies();
    }
  }, [])

  React.useEffect(() => {
    if (isLoggedIn) {
      getAllMovies();
      getSavedMovies();
    }
  }, [isLoggedIn])

  const isMovieAdded = (movie) => savedMovies.some((item) => item.id === movie.id);

  function saveMovie(movie) {
    api.saveMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      movie.image,
      movie.trailerLink,
      movie.nameRU,
      movie.nameEN,
      movie.id
    )
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteMovie(movie) {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
    api.deleteMovie(movieId)
      .then((res) => {
        if (res) {
          const newArray = savedMovies.filter((item) => item.movieId !== res.movieId);
          setSavedMovies(newArray);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const saveHandler = (movie, isAdded) => (isAdded ? saveMovie(movie) : deleteMovie(movie));

  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies])
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {/* <HashRouter> */}
          <Routes>
            <Route path='/'
              element={
                <>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
                </>
              }
            />
            <Route path='/movies'
              element={
                <>
                <Header isLoggedIn={isLoggedIn} />
                <ProtectedRouteElement 
                  component={Movies}
                  isLoggedIn={isLoggedIn}
                  movies={filteredMovies}
                  onSubmitSearch={handleSearch}
                  preloader={preloader}
                  setPreloader={setPreloader}
                  isMovieAdded={isMovieAdded}
                  savedMovies={false}
                  onSaveClick={saveHandler}
                  loadingError={loadingError}
                />
                <Footer />
                </>
              }
            />
            <Route path='/saved-movies'
              element={
                <>
                <Header isLoggedIn={isLoggedIn} />
                <ProtectedRouteElement 
                  component={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  isMovieAdded={isMovieAdded}
                  movies={savedMovies}
                  savedMovies={savedMovies}
                  onSaveClick={saveHandler}
                  loadingError={loadingError}
                />
                <Footer />
                </>
              }
            />
            <Route path='/profile'
              element={
                <>
                <Header isLoggedIn={isLoggedIn} />
                <ProtectedRouteElement 
                  component={Profile}
                  isLoggedIn={isLoggedIn}
                  handleSignOut={handleSignOut}
                  onEdit={handleEditUser}
                  editErrorMessage={editErrorMessage}
                  editSuccessMessage={editSuccessMessage}
                  isEditProfileSuccessful={isEditProfileSuccessful}
                  setIsEditProfileSuccessful={setIsEditProfileSuccessful}
                />
                </>
              }
            />
            <Route path='/signin'
              element={<Login 
              onAuth={handleAuth}
              loginError={loginError}
              loginErrorMessage={loginErrorMessage}
              setLoginErrorMessage={setLoginErrorMessage}
            />}
            />
            <Route path='/signup'
              
              element={<Register
              onRegister={handleRegister}
              registrationError={registrationError}
              registrationErrorMessage={registrationErrorMessage}
              setRegistrationErrorMessage={setRegistrationErrorMessage}
            />}
            />
            <Route path='*'
              element={<NotFound />}
            />
          </Routes>
        {/* </HashRouter> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;