import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectSummary = createSelector(
    [(state: RootState) => state.expence.expenceList],
    (expencelist) => {
        const income = expencelist
            .filter((i) => i.type === "income")
            .reduce((sum, i) => sum + i.amount, 0);

        const expense = expencelist
            .filter((i) => i.type === "expense")
            .reduce((sum, i) => sum + i.amount, 0);

        return {
            totalIncome: income,
            totalExpense: expense,
            balance: income - expense,
            transactions: expencelist.length,
        };
    }
);
