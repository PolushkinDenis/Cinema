import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFilms } from "../../types/IFilms"

interface SeriesState {
    series: IFilms | null,
    loading: boolean,
    error: string
}

const initialState: SeriesState = {
    series: null,
    loading: false,
    error: ''
}

export const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        seriesFetch(state) {
            state.loading = true
        },
        seriesFetchSuccess(state, action: PayloadAction<IFilms>) {
            state.loading = false
            state.series = action.payload
            state.error = ''
        },
        seriesFetchError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default seriesSlice.reducer