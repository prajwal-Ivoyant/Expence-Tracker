import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpence } from '../app/expenceSlice';
import type { expenceListTypes } from "./expenceTypes";

import '../css/expenceForm.css'


function ExpenseForm() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState<expenceListTypes["category"]>("Food");
    const [date, setDate] = useState("");

    const dispatch = useDispatch(); // dispatch use reducer to make changes in store

    const addExpenceHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tempExp = { title, amount: +amount, category, date };
        dispatch(addExpence(tempExp));

        setTitle("");
        setAmount("");
        setCategory("Food");
        setDate("");

    };

    return (
        <form onSubmit={addExpenceHandler}>

            <div>
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value as expenceListTypes["category"])}>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                    <option value="">Rent / EMI</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter expense title"
                    required
                />
            </div>

            <div>
                <label>Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="0.01"
                    step="0.01"
                    required
                />
            </div>

            <div>
                <label htmlFor="date">Date</label>
                <input
                    name="date"
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;

