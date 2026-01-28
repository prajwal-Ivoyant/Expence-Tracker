import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
    setCategory,
    setDateRange,
    resetFilters,
    setType,
} from "../app/filterSlice";
import "../css/filterBar.css";
import { RedoOutlined } from "@ant-design/icons";

function FiltersBar() {
    const dispatch = useDispatch();
    const { category, dateRange, type } = useSelector(
        (state: RootState) => state.filters
    );

    return (
        <div className="filters-wrapper">
            <h4 className="filters-title">
                <label htmlFor="type-select" className="sr-only">
                    FILTER
                </label>
            </h4>

            <div className="filters-row">

                <select
                    id="type-select"
                    className="neon-select"
                    value={type}
                    onChange={(e) => dispatch(setType(e.target.value as any))}
                >
                    <option value="ALL">ALL TYPES</option>
                    <option value="income">💰 INCOME</option>
                    <option value="expence">💸 EXPENSE</option>
                </select>

                <select
                    id="type-select"
                    className="neon-select"
                    value={category}
                    onChange={(e) => dispatch(setCategory(e.target.value as any))}
                >
                    <option value="ALL">ALL CATEGORIES</option>
                    <option value="Food">🍔 FOOD</option>
                    <option value="Transport">🚗 TRANSPORT</option>
                    <option value="Entertainment">🎮 ENTERTAINMENT</option>
                    <option value="Bills">🏠 BILLS</option>
                    <option value="Shopping">🛍 SHOPPING</option>
                    <option value="Rent-Emi">🏦 RENT / EMI</option>
                    <option value="Others">📦 OTHERS</option>
                </select>

                <select
                    id="type-select"
                    className="neon-select"
                    value={dateRange}
                    onChange={(e) => dispatch(setDateRange(e.target.value as any))}
                >
                    <option value="thisMonth">📅 THIS MONTH</option>
                    <option value="thisWeek">📆 THIS WEEK</option>
                    <option value="ALL">🕒 ALL TIME</option>
                </select>

                <button
                    className="reset-btn"
                    onClick={() => dispatch(resetFilters())}
                >
                    <RedoOutlined />
                    <span>RESET</span>
                </button>
            </div>
        </div>
    );
}

export default FiltersBar;
