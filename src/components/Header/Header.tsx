import React, { Dispatch, FC, useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchFilms } from '../../store/action-creators/films'
import './Header.scss'

const Header: FC = () => {

    const dispatch = useAppDispatch()
    const {films, error, isLoading} = useAppSelector(state => state.filmsReducer)
    const [search, setSearch] = useState('')

    console.log(films)

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${search}`

    // useEffect(() => {
    //     dispatch(fetchFilms(url))
    // }, [])

    const navigate = useNavigate()
  
    const searchFilms = () => {
        dispatch(fetchFilms(url))
        console.log('fetch')
        navigate("/films")

    }
    console.log(search)

    return (
        <div className='header'>
            <div className='header-home'><NavLink to='/'>Домой</NavLink></div>
            <div className='header-search'>
                <input type="text" value={search} onChange={e => onChangeInput(e)} placeholder="Поиск..." />
                <button onClick={searchFilms}><svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Поиск</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg></button>
            </div>
        </div>
    )
}

export default Header