import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchFilms } from '../../store/action-creators/films'
import NewFilms from './components/NewFilms/NewFilms'
import NewSeries from './components/NewSeries/NewSeries'
import Poster from './components/Poster/Poster'
import './Home.scss'

const Home: FC = () => {


    // const {films,error, isLoading} = useAppSelector(state => state.filmsReducer)
    // const dispatch = useAppDispatch()
    // console.log(films)

    // const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films`

    // useEffect(() => {
    //     dispatch(fetchFilms(url))
    // }, [])

    // console.log(films)

    return (
        <div className='home'>
            <Poster />
            <NewFilms /> 
            <NewSeries />
        </div>
    )
}

export default Home