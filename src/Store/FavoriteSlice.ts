import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface FavoriteState {
    favorites: Array<any>
}


const initialState: FavoriteState = {
    favorites: []
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const { id } = action.payload;
            if (state.favorites.length <= 0) {
                state.favorites.push(action.payload)
            } else {
                const newArr = state.favorites.filter((item) => item.id !== id)
                newArr.push(action.payload)
                state.favorites = newArr;
            }
        },
        deleteFavorite: (state, action) => {
            const id = action.payload;
            const newFavorites = state.favorites.filter((item) => item.id !== id);
            state.favorites = newFavorites;
        }
    }
})

export const { addFavorite , deleteFavorite } = favoriteSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFavorites = (state: RootState) => state.favorites.favorites

export default favoriteSlice.reducer