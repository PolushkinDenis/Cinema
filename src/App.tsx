import React, { useEffect, FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Film from './components/Film/Film';
import Films from './components/Films/Films';
import Home from './components/Home/Home';
import Player from './components/Player/Player';
import './App.css';
import Header from './components/Header/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchFilms } from './store/action-creators/films';
import { filmsSlice } from './store/reducers/filmsSlice';
import { useTranslation } from "react-i18next";

const App: FC = () => {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Cinema" element={<Home />} />
        <Route path="/Cinema/films" element={<Films />} />
        <Route path="/Cinema/film/:id" element={<Film />} />
        <Route path="/Cinema/player/:id" element={<Player />} />
      </Routes>
    </>

  );
}

export default App;
