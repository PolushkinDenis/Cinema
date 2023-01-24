import axios from "axios";
import { IFilm } from "../../types/IFilm";
import { filmSlice } from "../reducers/filmSlice";
import { AppDispatch } from "../store";


export const fetchFilm = (id: string | undefined) => async (dispatch: AppDispatch ) => {
    try {
        dispatch(filmSlice.actions.filmFetching())
        const responce = await axios.get<IFilm>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            headers: {
                'X-API-KEY': '860508a1-f8ad-4afb-b396-7e6cbe8a15ad',
                'Content-Type': 'application/json',
            },
        })
        dispatch(filmSlice.actions.filmFetchingSuccess(responce.data))
    }
    catch (e) {
        dispatch(filmSlice.actions.filmFetchError("Ошибка при загрузке данных"))
    }
}
