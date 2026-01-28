import { useSelector, useDispatch } from "react-redux";
import { deleteExpence } from "../app/expenceSlice";
import type { expenceListTypes } from "./expenceTypes";
//import type { RootState } from "../app/store";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import EditExpanceForm from "./utils/editExpanceForm";
import { Card, Row, Col } from 'antd';

import "../css/expenceList.css"
import { selectFilteredExpenses } from "../app/selectors";





function ExpenceList() {
    const expenceList = useSelector(selectFilteredExpenses);

    const dispatch = useDispatch();

    const [editingExpence, setEditingExpence] = useState<expenceListTypes | null>(null);

    const handleDelete = (id: string) => {
        console.log(id);
        dispatch(deleteExpence(id));
    };

    const handleEdit = (exp: expenceListTypes) => {
        setEditingExpence(exp);
    }

    return (
        <div>
            {expenceList && (
                <>
                    <h2>Expense List</h2>

                    {expenceList.length === 0 && (
                        <p>No expenses added yet.</p>
                    )}

                    <Row gutter={[16, 16]}>
                        {expenceList.map((exp: expenceListTypes) => (
                            <Col key={exp.id} xs={24} sm={12} md={8}>
                                <Card
                                    title={exp.title}
                                    variant="borderless"
                                    actions={[
                                        <EditOutlined
                                            key="edit"
                                            onClick={() => handleEdit(exp)}
                                        />,
                                        <DeleteOutlined
                                            key="delete"
                                            onClick={() => handleDelete(exp.id)}
                                        />,
                                    ]}
                                >
                                    <p><strong>₹ {exp.amount}</strong></p>
                                    <p>{exp.category}</p>
                                    <p>{exp.date}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}

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

