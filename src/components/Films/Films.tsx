import React, { FC } from 'react'
import { searchFilms } from '../../data/searchFilm'
import FilmsItem from './FilmsItem/FilmsItem'
import {useSelector} from 'react-redux'
import { useAppSelector } from '../../hooks/redux'
import Spinner from '../UI/Spinner/Spinner'


const Films: FC = () => {
    const store = useAppSelector(state => state.filmsReducer)

    if(store.isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <div>
            {store !== null && store.films?.items.map(film => 
                <FilmsItem film={film} key={film.kinopoiskId}/>
                )}

        </div>
    )
}

export default Films