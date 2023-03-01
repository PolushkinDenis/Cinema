import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { fetchFilm } from '../../../../store/action-creators/film'
// import Loster from '../../../../../public/poster.jpg'
// import logo from '../../../../../public/logo192.png'
import './Poster.scss'

const Poster: FC = () => {
    const { film, error, loading } = useAppSelector(state => state.filmReducer)
    const dispatch = useAppDispatch()

    console.log(film)

    useEffect(() => {
        const id: string = '505898'
        dispatch(fetchFilm(id))
    }, [])

    return (
        //<div className='header__poster' style={{backgroundImage: `url(${film?.posterUrl })`}}>

        <div className='header__poster'>
            <div className='header__poster-text'>
                <h1>{film?.nameRu}</h1>
                <p>{film?.description}</p>
                <button>Подробнее</button>
            </div>
        </div>
    )
}

export default Poster