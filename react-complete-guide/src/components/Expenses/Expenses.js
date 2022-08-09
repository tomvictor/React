import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilterDate(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={filterDate}
        onFilterDate={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
