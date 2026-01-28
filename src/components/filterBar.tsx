import { Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setCategory, setDateRange } from "../app/filterSlice";

const { Option } = Select;

function FiltersBar() {
    const dispatch = useDispatch();
    const { category, dateRange } = useSelector(
        (state: RootState) => state.filters
    );

    return (
        <Space style={{ marginBottom: 16 }}>
            <Select
                value={category}
                style={{ width: 160 }}
                onChange={(value) => dispatch(setCategory(value))}
            >
                <Option value="ALL">All</Option>
                <Option value="Food">Food</Option>
                <Option value="Transport">Transport</Option>
                <Option value="Entertainment">Entertainment</Option>
                <Option value="Bills">Bills</Option>
                <Option value="Shopping">Shopping</Option>
                <Option value="Rent-Emi">Rent / EMI</Option>
                <Option value="Others">Others</Option>
            </Select>

            <Select
                value={dateRange}
                style={{ width: 160 }}
                onChange={(value) => dispatch(setDateRange(value))}
            >
                <Option value="ALL">All time</Option>
                <Option value="thisWeek">This week</Option>
                <Option value="thisMonth">This month</Option>
            </Select>
        </Space>
    );
}

export default FiltersBar;
