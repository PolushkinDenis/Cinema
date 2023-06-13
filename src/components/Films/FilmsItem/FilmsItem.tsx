import React, { FC, useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilms, IFilm } from '../../../types/IFilms'
import './FilmsItem.scss'

interface FilmsItemProps {
    film: IFilm
}

const FilmsItem: FC<FilmsItemProps> = ({ film }) => {

    const [genres, setGenres] = useState("")
    const navigate = useNavigate()

    const getFilm = () => {
        navigate(`/film/${film.kinopoiskId}`)
    }

    const createGenres = () => {
        let newGenres = ""
        film.genres.map((genre, index) => {
            if (index === film.genres.length-1) {
                newGenres += genre.genre
            }
            else {
                newGenres += genre.genre + ", "
            }
        })
        setGenres(newGenres)
    }

    useEffect(() => {
        createGenres()
    }, [])

    console.log(film)

    return (
        <div className='filmItem'>
            <div className='filmItem_container_left' onClick={getFilm}>
                <div className='filmItem-img'>
                    <img src={film.posterUrlPreview} alt="logo"></img>
                </div>
                <div className='filmItem-info'>
                    <div className='filmItem-info_name'>{film.nameRu}</div>
                    <div className='filmItem-info-year_lenght'>
                        <div className='filmItem-info-year_lenght_year'>{film.year}</div>
                    </div>
                    <div className='filmItem-genres'>
                        {genres}
                        {/* {film.genres.map((genre, index) => {
                            console.log("Индес" + index)
                            console.log("Массив" + film.genres.length)

                            if (index === film.genres.length-1) {
                                return <span key={index}>{genre.genre} </span>
                            }
                            else {
                                return <span key={index}>{genre.genre + "," }&nbsp;</span>
                            }
                        }
                        )} */}
                    </div>


                </div>
            </div>
            <div className='filmItem_container_right'>
                <div className='filmItem-rating'>{film.ratingKinopoisk}</div>
            </div>

        </div>
    )
}

export default memo(FilmsItem)