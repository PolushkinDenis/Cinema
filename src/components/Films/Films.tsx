import React, { FC, useState } from 'react'
import { searchFilms } from '../../data/searchFilm'
import FilmsItem from './FilmsItem/FilmsItem'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../hooks/redux'
import Spinner from '../UI/Spinner/Spinner'
import './Films.scss'
import Filters from '../Filters/Filters'

const Films: FC = () => {
    const store = useAppSelector(state => state.filmsReducer)
    const [filtersActive, setFiltersActive] = useState(false)

    const clickActive = () => {
        const body =  document.querySelector('body')
        if (body !== null && filtersActive === false) {
            body.style.overflowY = 'hidden'
        }
        else if (body !== null && filtersActive === true) {
            body.style.overflowY = ''
        }
        setFiltersActive(!filtersActive)
    }

    if (store.isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='films'>
            <h2>Все фильмы</h2>
            <button className='btn__filter-active' onClick={clickActive}>Фильтры</button>
            <div className='films__content'>
                <Filters active={filtersActive} onClick={clickActive}/>
                <div className='films__list'>
                    {store !== null && store.films?.items.map(film =>
                        <FilmsItem film={film} key={film.kinopoiskId} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Films