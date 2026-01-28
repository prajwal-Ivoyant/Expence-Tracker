import { useSelector } from "react-redux";
import { selectSummary } from "../app/calculationSlice";
import "../css/summaryCards.css";

function SummaryCards() {
    const {
        totalIncome,
        totalExpense,
        balance,
        transactions,
    } = useSelector(selectSummary);

    return (
        <div className="summary-grid">

            <div className="summary-card income">
                <div className="icon">💰</div>
                <p className="label">TOTAL INCOME</p>
                <h2>₹{totalIncome.toLocaleString()}</h2>
                <span className="trend up">gain</span>
                <div className="bar" />
            </div>

            <div className="summary-card expense">
                <div className="icon">💸</div>
                <p className="label">TOTAL EXPENSES</p>
                <h2>₹{totalExpense.toLocaleString()}</h2>
                <span className="trend down">Spent</span>
                <div className="bar" />
            </div>

            <div className="summary-card balance">
                <div className="icon">💳</div>
                <p className="label">BALANCE</p>
                <h2>₹{balance.toLocaleString()}</h2>
                <span className="trend up">↑ Healthy savings rate</span>
                <div className="bar" />
            </div>

            <div className="summary-card neutral">
                <div className="icon">📊</div>
                <p className="label">TRANSACTIONS</p>
                <h2>{transactions}</h2>
                <span className="trend muted">This month</span>
                <div className="bar" />
            </div>

        </div>
    );
}

export default SummaryCards;
