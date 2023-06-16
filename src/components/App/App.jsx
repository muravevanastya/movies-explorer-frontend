import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
  }

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
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
              />
              </>
            }
          />
          <Route path='/signin'
            element={<Login 
            onAuth={handleAuth}
            loginError={loginError}
            loginErrorMessage={loginErrorMessage}
          />}
          />
          <Route path='/signup'
            
            element={<Register
            onRegister={handleRegister}
            registrationError={registrationError}
            registrationErrorMessage={registrationErrorMessage}
          />}
          />
          <Route path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
