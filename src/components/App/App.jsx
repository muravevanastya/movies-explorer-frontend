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

function App() {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [email, setEmail] = React.useState('')
  // const [signupSuccess, setSignupSuccess] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({})



  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if(res) {
            setCurrentUser(res.user)
            setIsLoggedIn(true);
            setEmail(res.email);
            navigate('/', { replace: true })
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
          })
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path='/'
            element={<Main />}
          />
          <Route path='/movies'
            element={<Movies />}
          />
          <Route path='/saved-movies'
            element={<SavedMovies />}
          />
          <Route path='/profile'
            element={<Profile />}
          />
          <Route path='/signin'
            element={<Login 
            onAuth={handleAuth}
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
