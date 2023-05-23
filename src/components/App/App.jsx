import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/'
          element={<Main />}
        />
        <Route path='/movies'
          element={<Movies />}
        />
        <Route path='/saved-movies'/>
        <Route path='/profile'/>
        <Route path='/signin'/>
        <Route path='/signup'/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
