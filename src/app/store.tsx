import { configureStore } from "@reduxjs/toolkit";
import expenceReducer, { initialState as expenceInitialState } from "./expenceSlice";
import filterReducer from "./filterSlice";
import { loadExpenceState, saveExpenceState } from "./localStorage";

const preloadedState = {
    expence: loadExpenceState() ?? expenceInitialState,
};

export const store = configureStore({
    reducer: {
        expence: expenceReducer,
        filters: filterReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveExpenceState(store.getState().expence);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
