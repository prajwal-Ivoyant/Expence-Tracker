import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface filterTypes {
    category: 'Food' | 'Transport' | 'Entertainment' | 'Bills' | 'Shopping' | 'Rent-Emi' | 'Others' | 'ALL';
    dateRange: 'thisMonth' | 'thisWeek' | 'ALL';
    type: 'income' | 'expence' | 'ALL'
}

const initialState: filterTypes = {
    category: "ALL",
    dateRange: 'ALL',
    type: 'ALL'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<filterTypes['category']>) => {
            state.category = action.payload;
        },
        setDateRange: (state, action: PayloadAction<filterTypes['dateRange']>) => {
            state.dateRange = action.payload;
        },
        setType: (state, action: PayloadAction<filterTypes['type']>) => {
            state.type = action.payload;
        },
        resetFilters: (state) => {
            state.category = 'ALL';
            state.dateRange = 'ALL';
        },
    },
});

export const {
    setCategory,
    setDateRange,
    resetFilters,
    setType
} = filtersSlice.actions;

export default filtersSlice.reducer;