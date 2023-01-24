import { combineReducers,  configureStore} from "@reduxjs/toolkit"
import filmsReducer from "./reducers/filmsSlice"
import seriesReducer from "./reducers/seriesSlice"
import filmReducer from "./reducers/filmSlice"

const rootReducer = combineReducers({
    filmsReducer,
    seriesReducer,
    filmReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']