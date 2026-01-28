import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectFilteredExpenses = createSelector(
    [
        (state: RootState) => state.expence.expenceList,
        (state: RootState) => state.filters,
    ],
    (expenses, filters) => {
        const { category, dateRange } = filters;

        return expenses.filter((exp) => {
            // category filter
            if (category !== 'ALL' && exp.category !== category) {
                return false;
            }

            // date filter 
            if (dateRange === 'ALL') return true;

            const expDate = new Date(exp.date);
            const now = new Date();

            if (dateRange === 'thisWeek') {
                const weekAgo = new Date();
                weekAgo.setDate(now.getDate() - 7);
                return expDate >= weekAgo;
            }

            if (dateRange === 'thisMonth') {
                return (
                    expDate.getMonth() === now.getMonth() &&
                    expDate.getFullYear() === now.getFullYear()
                );
            }

            return true;
        });
    }
);
