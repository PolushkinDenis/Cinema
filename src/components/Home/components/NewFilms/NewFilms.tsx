import React, { FC, useEffect, Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { fetchFilms } from '../../../../store/action-creators/films'
import { IFilms } from '../../../../types/IFilms'
import Spinner from '../../../UI/Spinner/Spinner'
import MovieItem from '../MovieItem/MovieItem'
import '../NewFilms.scss'


const NewFilms: FC = () => {

    const {films,error, isLoading} = useAppSelector(state => state.filmsReducer)
    const dispatch = useAppDispatch()
    console.log(films)

    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&yearFrom=2022&yearTo=2022&order=NUM_VOTE`

    useEffect(() => {
        dispatch(fetchFilms(url))
    }, [])

    if(isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='home-film'>
            <div className='title-newfilms'>
                <h2>Новые фильмы</h2>
                <button>Смотреть все</button>
            </div>
            <div className='newFilms'>
                {films?.items.map((film) =>
                    <MovieItem film={film} key={film.kinopoiskId} />
                )}
            </div>
        </div>
    )
}

export default NewFilms