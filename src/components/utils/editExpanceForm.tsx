import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editExpence } from "../../app/expenceSlice";
import type { expenceListTypes } from "../expenceTypes";
import "../../css/editExpenceForm.css"


interface EditExpanceFormProps {
    editingExpence: expenceListTypes;
    onCancel: () => void;
}

function EditExpanceForm({ editingExpence, onCancel }: EditExpanceFormProps) {
    const dispatch = useDispatch();

    const [localExpence, setLocalExpence] = useState<expenceListTypes>(editingExpence);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editExpence(localExpence));
        onCancel();
    };

    return (
        <div >
            <h3>Edit Expense</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={localExpence.title}
                        onChange={(e) =>
                            setLocalExpence({ ...localExpence, title: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        value={localExpence.amount}
                        onChange={(e) =>
                            setLocalExpence({
                                ...localExpence,
                                amount: +e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        value={localExpence.date}
                        onChange={(e) =>
                            setLocalExpence({ ...localExpence, date: e.target.value })
                        }
                    />
                </div>

                <div >
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel} >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditExpanceForm;
