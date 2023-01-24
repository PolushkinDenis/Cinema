import { IFilms } from '../../types/IFilms'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface FilmsState {
    films: IFilms | null,
    isLoading: boolean,
    error: string,    
}

const initialState: FilmsState = {
    films: null,
    isLoading: false,
    error: '',
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filmsFetching(state) {
            state.isLoading = true
        },
        filmsFetchingSuccess(state, action: PayloadAction<IFilms>) {
            state.isLoading = false
            state.error = ''
            state.films = action.payload
        },
        filmsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
    
})

export default filmsSlice.reducer