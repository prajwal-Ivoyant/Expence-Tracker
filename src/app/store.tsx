import { configureStore } from "@reduxjs/toolkit";
import expenceReducer from "./expenceSlice";
import filterReducer from "./filterSlice"

export const store = configureStore({
    reducer: {
        expence: expenceReducer,
        filters: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
