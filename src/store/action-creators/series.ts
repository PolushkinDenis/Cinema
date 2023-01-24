import axios from "axios";
import { Dispatch } from "react";
import { IFilms } from "../../types/IFilms";
import {seriesSlice} from "../reducers/seriesSlice";
import { AppDispatch } from "../store";



export const fetchSeries = (url: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(seriesSlice.actions.seriesFetch())
        const responce = await axios.get<IFilms>(url, {
            headers: {
                'X-API-KEY': '860508a1-f8ad-4afb-b396-7e6cbe8a15ad',
                'Content-Type': 'application/json',
            }
    })
        dispatch(seriesSlice.actions.seriesFetchSuccess(responce.data))
    }
    catch (e) {
        dispatch(seriesSlice.actions.seriesFetchError("Ошибка при загрузке"))
    }
}