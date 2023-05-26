import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../Action/favoriteSlice'

export const store = configureStore({
    reducer:{
        favorites: favoriteReducer
    }
})