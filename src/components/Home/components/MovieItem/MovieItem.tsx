import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilm, IFilms } from '../../../../types/IFilms'
import './MovieItem.scss'

interface HomeComponentProps {
    film: IFilm
}



const MovieItem: FC<HomeComponentProps> = ({ film }) => {

    const navigate = useNavigate()

    const gotoFilm = () => {
        navigate(`/film/${film.kinopoiskId}`, { state: film })
    }

    return (
        <div className='homeComponent' onClick={gotoFilm}>
            <div className='homeComponent_img'>
                <img src={film.posterUrlPreview}></img>
                <div className='homeComponent_reting'>{film.ratingKinopoisk}</div>
            </div>
            <div className='homeComponent-info'>
                <div className='homeComponent-info_name'>{film.nameRu}</div>
                <div className='homeComponent-info_year'>{film.year + ", " + film.type}</div>
            </div>
        </div>
    )
}

export default MovieItem