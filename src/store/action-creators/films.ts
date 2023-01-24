import axios from "axios";
import { IFilms } from "../../types/IFilms";
import { filmsSlice } from "../reducers/filmsSlice";
import { AppDispatch } from "../store";


export const fetchFilms = (url: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmsSlice.actions.filmsFetching())
        const responce = await axios.get<IFilms>(url, {
            headers: {
                'X-API-KEY': '860508a1-f8ad-4afb-b396-7e6cbe8a15ad',
                'Content-Type': 'application/json',
            },
        })

        console.log(responce.data)
        dispatch(filmsSlice.actions.filmsFetchingSuccess(responce.data))
    }
    catch (e) {
        dispatch(filmsSlice.actions.filmsFetchingError("Ошибка при загрузке"))
    }
}