import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
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
        <Route path='/profile'/>
        <Route path='/signin'/>
        <Route path='/signup'/>
      </Routes>
    </div>
  );
}

export default App;
