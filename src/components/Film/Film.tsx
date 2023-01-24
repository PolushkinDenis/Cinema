import React, { Dispatch, FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchFilm } from '../../store/action-creators/film'
import { IFilm } from '../../types/IFilm'
import Button from '../UI/Button/Button'
import Spinner from '../UI/Spinner/Spinner'
import './Film.scss'


const Film: FC = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { film, error, loading } = useAppSelector(state => state.filmReducer)

    const navigate = useNavigate()
    const onBack = () => navigate(-1)

    const filmId = location.state as IFilm
    const { id } = useParams()

    console.log(id)
    console.log(location)
    console.log(film)
    console.log(loading)

    useEffect(() => {
        dispatch(fetchFilm(id))
    }, [])

    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='film'>
            <div className='back'>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <button onClick={onBack}>
                    Назад
                </button>
            </div>
            <div className='filmContent'>
                {film?.coverUrl !== null ? (
                    <div className='logo' style={{ backgroundImage: `url(${film?.coverUrl})` }}>
                        <div className='content'>
                            {film?.logoUrl ? (
                                <div className='title'><img src={film?.logoUrl} alt={film?.nameRu}></img></div>
                            ) : (
                                <h1>{film?.nameRu}</h1>
                            )}

                            <p className='content-description'>{film?.shortDescription || film?.description}</p>

                            <div className='film-info_vatch'><NavLink className="film-info_link" to={`/player/${id}`}><Button title={"Смотреть"}></Button></NavLink></div>

                        </div>
                    </div>

                ) : (
                    <div className='logo-poster' style={{ backgroundImage: `url(${film?.posterUrl})` }}>
                         <div className='content'>
                            {film?.logoUrl ? (
                                <div className='title'><img src={film?.logoUrl} alt={film?.nameRu}></img></div>
                            ) : (
                                <h1>{film?.nameRu}</h1>
                            )}

                            <p className='content-description'>{film?.shortDescription || film?.description}</p>

                            <div className='film-info_vatch'><NavLink className="film-info_link" to={`/player/${id}`}><Button title={"Смотреть"}></Button></NavLink></div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )


    // return (
    //     <div className='film'>
    //         <div className='back'>
    //             <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
    //                 stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //                 <polyline points="15 18 9 12 15 6"></polyline>
    //             </svg>
    //             <button onClick={onBack}>
    //                 Назад
    //             </button>
    //         </div>
    //         <div className='filmContent'>
    //             <div className='content'>
    //                 {film?.logoUrl ? (
    //                     <div className='title'><img src={film?.logoUrl} alt={film?.nameRu}></img></div>
    //                 ) : (
    //                     <h1>{film?.nameRu}</h1>
    //                 )}

    //                 <p className='content-description'>{film?.shortDescription || film?.description}</p>

    //                 <div></div>
    //                 <div className='film-info_vatch'><NavLink className="film-info_link" to={`/player/${id}`}>Смотреть</NavLink></div>

    //             </div>
    //             {film?.coverUrl !== null ? (
    //                 <div className='logo' style={{ backgroundImage: `url(${film?.coverUrl})` }}></div>

    //             ) : (
    //                 <div className='logo-poster' style={{ backgroundImage: `url(${film?.posterUrl})` }}></div>
    //             )}
    //         </div>
    //     </div>
    // )

    // return (
    //     <div className='film'>
    //         <div className='back'>
    //             <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
    //                 stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //                 <polyline points="15 18 9 12 15 6"></polyline>
    //             </svg>
    //             <button onClick={onBack}>

    //                 Назад
    //             </button>
    //         </div>
    //         {film && (


    //             <div className='film-content'>
    //                 <div className='film-content_img'><img src={film?.posterUrl}></img></div>
    //                 <div className='film-info'>
    //                     <div className='film-info_name'>{film?.nameRu}</div>
    //                     <div className='film-info_nameEnglish'>{film?.nameEn}</div>
    //                     <div className='film-info_vatch'><NavLink className="film-info_link" to={`/player/${id}`}>Смотреть</NavLink></div>

    //                     <div className='film-info_about'>О фильме</div>
    //                     <ul>
    //                         {/* Раскрыть все страны  */}
    //                         <li><span>Страна </span><span>{film?.countries[0].country}</span></li>
    //                         {/* Раскрыть все жанры  */}
    //                         <li><span>Жанр </span><span>{film?.genres[0].genre}</span></li>
    //                         <li><span>Год </span><span>{film?.year}</span></li>
    //                         {film?.slogan && (
    //                             <li><span>Слоган </span><span>{film.slogan}</span></li>
    //                         )}
    //                         {film?.filmLength && (
    //                             <li><span>Время </span><span>{film.filmLength + " мин"}</span></li>

    //                         )}

    //                     </ul>

    //                 </div>

    //             </div>
    //         )}
    //     </div>
    // )
}

export default Film