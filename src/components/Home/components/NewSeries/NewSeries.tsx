import React, { Dispatch, FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { fetchSeries } from '../../../../store/action-creators/series'
import { IFilms } from '../../../../types/IFilms'
import MovieItem from '../MovieItem/MovieItem'
import Spinner from '../../../UI/Spinner/Spinner'
import '../NewFilms.scss'


const NewSeries: FC = () => {

    const { series, error, loading } = useAppSelector(state => state.seriesReducer)
    const dispatch = useAppDispatch()

    console.log(series)

    // const url = `https://api.kinopoisk.dev/movie?field=rating.kp&search=1-10&field=year&search=2021-2022&field=typeNumber&search=1&sortField=year&sortType=-1&sortField=votes.imdb&sortType=-1&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES&yearFrom=2022&yearTo=2022&order=NUM_VOTE`

    useEffect(() => {
        dispatch(fetchSeries(url))
    }, [])

    if(loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='home-film'>
            <div className='title-newfilms'>
                <h2>Новые сериалы</h2>
                <button>Смотреть все</button>
            </div>
            <div className='newFilms'>
                {series?.items.map((film) =>
                    <MovieItem film={film} key={film.kinopoiskId} />
                )}
            </div>
        </div>
    )
}

export default NewSeries