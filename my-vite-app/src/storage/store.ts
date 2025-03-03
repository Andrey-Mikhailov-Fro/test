import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import categoriesReducer from './slices/categoriesSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        categories: categoriesReducer,
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;