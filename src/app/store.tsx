import { configureStore } from "@reduxjs/toolkit";
import expenceReducer from "./expenceSlice";

export const store = configureStore({
    reducer: {
        expence: expenceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
