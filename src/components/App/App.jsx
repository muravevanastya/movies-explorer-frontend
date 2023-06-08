import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [email, setEmail] = React.useState('')
  // const [signupSuccess, setSignupSuccess] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({})
  // const [error, setError] = React.useState('')

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if(res) {
            setCurrentUser(res.user)
            setIsLoggedIn(true);
            setEmail(res.email);
            // navigate('/', { replace: true })
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
      .then((res) => {
        // setSignupSuccess(true);
        navigate('/signin', { replace: true })
      })
      .catch((err) => {
        console.log(err);
        // setSignupSuccess(false);
      })
      // .finally(() => )
  }

  function handleAuth(password, email) {
    auth.authorize(password, email)
      .then(() => {
        api.getUserInfo()
          .then((res) => {
            setCurrentUser(res.user)
            setIsLoggedIn(true)
            setEmail(res.email)
            navigate('/movies', { replace: true })
          })
          .catch((err) => {
            console.log(err)
            // setError('Что-то пошло не так: ' + err.message)
          })
      })
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setEmail('');
    setIsLoggedIn(false);
    // setCurrentUser({});
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
              />
              </>
            }
          />
          <Route path='/signin'
            element={<Login 
            onAuth={handleAuth}
            // error={error}
          />}
          />
          <Route path='/signup'
            
            element={<Register
            onRegister={handleRegister}
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
