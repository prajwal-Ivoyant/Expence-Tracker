import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import type { expenceListTypes } from "../components/expenceTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

interface expenceState {
    expenceList: expenceListTypes[];
}

export const initialState: expenceState = {
    expenceList: [
        { id: "1", title: "rent", amount: 4000, category: 'Rent-Emi', date: '12/2/26' }
    ]


}

const expenceSlice = createSlice({
    name: "expence",
    initialState,
    reducers: {
        addExpence: (state, action: PayloadAction<Omit<expenceListTypes, "id">>) => {
            const expence: expenceListTypes = {
                id: nanoid(),
                ...action.payload,
            };
            state.expenceList.push(expence)
        },
        deleteExpence: (state, action: PayloadAction<string>) => {
            state.expenceList = state.expenceList.filter((expence) => {
                expence.id != action.payload;
            })
        },
        editExpence: (state, action: PayloadAction<expenceListTypes>) => {
            const index = state.expenceList.findIndex(
                (e) => e.id === action.payload.id
            );

            if (index !== -1) {
                state.expenceList[index] = action.payload;
            }
        }
    }
})

export const { addExpence, deleteExpence, editExpence } = expenceSlice.actions;
export default expenceSlice.reducer;