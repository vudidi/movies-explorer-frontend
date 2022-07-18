import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import MessagePopup from '../MessagePopup/MessagePopup.js';

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  function toggleBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div className="app">
      <Header onOpenMenu={toggleBurgerMenu} isMenuOpen={isBurgerMenuOpen} />
      <main>
        {' '}
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/saved-movies" element={<SavedMovies />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </main>
      <Footer />
      <MessagePopup />
    </div>
  );
}

export default App;
