import type { expenceState } from "./expenceSlice";

const STORAGE_KEY = "expense_tracker_expence";

export const loadExpenceState = (): expenceState | undefined => {
    try {
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Failed to load from localStorage", e);
        return undefined;
    }
};

export const saveExpenceState = (state: expenceState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STORAGE_KEY, serializedState);
    } catch (e) {
        console.error("Failed to save to localStorage", e);
    }
};
