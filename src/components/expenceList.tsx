import { useSelector, useDispatch } from "react-redux";
import { deleteExpence } from "../app/expenceSlice";
import type { expenceListTypes } from "./expenceTypes";
import { CloseOutlined } from "@ant-design/icons";
import { selectFilteredExpenses } from "../app/selectors";
import "../css/expenceList.css";

const formatINR = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(amount);

function ExpenceList() {
    const dispatch = useDispatch();
    const expenceList = useSelector(selectFilteredExpenses);

    return (
        <div className="transactions-wrapper">
            <div className="transactions-header">
                <h2>TRANSACTIONS</h2>
                <span>{expenceList.length} TRANSACTIONS</span>
            </div>

            {expenceList.length === 0 && (
                <p className="empty-text">No transactions added yet.</p>
            )}

            <div className="transactions-list">
                {expenceList.map((exp: expenceListTypes) => (
                    <div className="transaction-row" key={exp.id}>

                        <div className="left">
                            <p className="title">{exp.title}</p>

                            <div className="meta">
                                <span className="badge">{exp.category.toUpperCase()}</span>
                                <span className="date">📅 {exp.date}</span>
                            </div>
                        </div>


                        <div className="right">
                            <p
                                className={`amount ${exp.type === "income" ? "income" : "expense"
                                    }`}
                            >
                                {exp.type === "income" ? "+" : "-"}
                                {formatINR(exp.amount)}
                            </p>

                            <span
                                className={`type-tag ${exp.type === "income" ? "income" : "expense"
                                    }`}
                            >
                                {exp.type.toUpperCase()}
                            </span>

                            <CloseOutlined
                                className="delete"
                                onClick={() => dispatch(deleteExpence(exp.id))}
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpenceList;
