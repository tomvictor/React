import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilterDate(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  });

  return (
    <div>
        <Card className="expenses">
            <ExpensesFilter
                selectedValue={filterDate}
                onFilterDate={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    </div>
  );
};

export default Expenses;
