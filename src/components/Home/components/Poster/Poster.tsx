import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { fetchFilm } from '../../../../store/action-creators/film'
// import Loster from '../../../../../public/poster.jpg'
// import logo from '../../../../../public/logo192.png'
import './Poster.scss'

const Poster: FC = () => {
    // const { film, error, loading } = useAppSelector(state => state.filmReducer)
    // const dispatch = useAppDispatch()

    // console.log(film)

    // useEffect(() => {
    //     const id: string = '1219909'
    //     dispatch(fetchFilm(id))
    // }, [])

    return (
        // <div style={{backgroundImage: `url(${film?.posterUrl })`}}>
        <div>
            Poster
        </div>
    )
}

export default Poster