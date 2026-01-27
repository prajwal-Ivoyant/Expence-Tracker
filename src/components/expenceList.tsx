import { useSelector, useDispatch } from "react-redux";
import { deleteExpence } from "../app/expenceSlice";
import type { expenceListTypes } from "./expenceTypes";
import type { RootState } from "../app/store";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import EditExpanceForm from "./utils/editExpanceForm";
import "../css/expenceList.css"

function ExpenceList() {
    const expenceList = useSelector(
        (state: RootState) => state.expence.expenceList
    );

    const dispatch = useDispatch();

    const [editingExpence, setEditingExpence] = useState<expenceListTypes | null>(null);

    const handleDelete = (id: string) => {
        dispatch(deleteExpence(id));
    };

    const handleEdit = (exp: expenceListTypes) => {
        setEditingExpence(exp);
    }

    return (
        <div>
            <h2>Expense List</h2>

            {expenceList.length === 0 && <p>No expenses added yet.</p>}

            <ul>
                {expenceList.map((exp: expenceListTypes) => (
                    <li key={exp.id} className="expenceItem">
                        <div>
                            <strong>{exp.title}</strong> — ₹{exp.amount}
                            <br />
                            <small>
                                {exp.category} | {exp.date}
                            </small>
                        </div>

                        <button aria-label="Edit expense" onClick={() => handleEdit(exp)}>
                            <EditOutlined />
                        </button>

                        <button aria-label="Delete expense" onClick={() => handleDelete(exp.id)}>
                            <DeleteOutlined />
                        </button>
                    </li>


                ))}
            </ul>

            {editingExpence && (
                <EditExpanceForm
                    editingExpence={editingExpence}
                    onCancel={() => setEditingExpence(null)}
                />
            )}

        </div>


    );
}

export default ExpenceList;

