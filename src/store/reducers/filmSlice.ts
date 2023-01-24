import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../../types/IFilm";


interface FilmState {
    film: IFilm | null,
    loading: boolean,
    error: string
}

const initialState: FilmState = {
    film: null,
    loading: false,
    error: ''
}

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        filmFetching(state) {
            state.loading = true
        },
        filmFetchingSuccess(state, action: PayloadAction<IFilm>) {
            state.film = action.payload
            state.loading = false
            state.error = ''
        },
        filmFetchError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        }
    }
})

export default filmSlice.reducer