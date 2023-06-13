import React, { FC, useState } from 'react'
import RangeSlider from '../UI/RangeSlider/RangeSlider';
import './Filters.scss'

interface FiltersProps {
    active: boolean,
    onClick: () => void
}

const Filters: FC<FiltersProps> = ({ active, onClick }) => {

    const [minRating, setMinRating] = useState(5)
    const [maxRating, setMaxRating] = useState(10)
    const [startYear, setStartYear] = useState(1920)
    const [endYear, setEndYear] = useState(2023)
    const [sort, setSort] = useState("RATING")

    console.log(active)


    const onChangeMinRating = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rating = +(e.target.value)
        if (rating && (rating >= 1 && rating <= 10)) {
            if (rating <= maxRating) {
                setMinRating(+(e.target.value))
            }
        }
    }
    const onChangeMaxRating = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rating = +(e.target.value)
        if (rating && (rating >= 1 && rating <= 10)) {
            if (rating >= minRating) {
                setMaxRating(+(e.target.value))
            }
        }
    }
    const onChangeStartYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const year = +(e.target.value)
        if (year) {
            setStartYear(+(e.target.value))
        }
    }
    const checkStartYear = () => {
        if (startYear < 1920 || startYear > 2023) {
            setStartYear(1920)
        }
    }
    const onChangeEndYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const year = +(e.target.value)
        if (year) {
            setEndYear(+(e.target.value))
        }
    }
    const checkEndYear = () => {
        if (endYear < 1920 || endYear > 2023) {
            setEndYear(2023)
        }
    }
    return (
        <div className={active ? 'filters filters__active' : 'filters'}>
            <div className='filters__exit'>
                <p>Фильтры</p>
                <button className='filters__exit-active' onClick={onClick}>x</button>
            </div>
            <div className='filters__filter filters__rating'>
                <p className='filter__title'>Рейтинг</p>
                <div className='filters_input'>
                    <div>
                        <p>От</p>
                        <input type="number" className="filter__min" placeholder='мин' min="1" max="10" onChange={e => onChangeMinRating(e)} value={minRating} ></input>
                    </div>
                    <div>
                        <p>До</p>
                        <input type="number" className="filter__max" placeholder='макс' min="1" max="10" onChange={e => onChangeMaxRating(e)} value={maxRating}></input>
                    </div>
                </div>
            </div>
            <div className='filters__filter filters__years'>
                <p>Год выпуска</p>
                <div className='filters_input'>
                    <div>
                        <p>От</p>
                        <input type="number" className="filter__min" placeholder='мин' min="1920" max="2023" onChange={e => onChangeStartYear(e)} value={startYear} onBlur={checkStartYear}></input>
                    </div>
                    <div>
                        <p>До</p>
                        <input type="number" className="filter__max" placeholder='макс' min="1920" max="2023" onChange={e => onChangeEndYear(e)} value={endYear} onBlur={checkEndYear}></input>
                    </div>
                </div>
            </div>
            <div className='filters__sort'>
                <p>Сортировка</p>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                    <option className='option' value="RATING">По рейтингу</option>
                    <option className='option' value="NUM_VOTE">По голосам</option>
                    <option className='option' value="YEAR">По году</option>
                </select>
            </div>
            <div className='filters__buttons'>
                <button className="btn_search">Найти</button>
                <button className="btn_reset">Сбросить</button>
            </div>
        </div>
    )
}

export default Filters



{/* <RangeSlider
                    min={1}
                    max={10}
                    curMin={minRating}
                    curMax={maxRating}
                    onChange={({ min, max }: { min: number; max: number }) =>
                        {setMinRating(min); setMaxRating(max)}
                    }
                /> */}