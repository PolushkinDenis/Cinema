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

const App: FC = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>

  );
}

export default App;
