import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    console.log("on expenses.js");
    console.log(selectedYear);
    setFilterDate(selectedYear);
    console.log(filterDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={filterDate}
        onFilterDate={filterChangeHandler}
      />

      {props.data.map((expense) => {
        return <ExpenseItem
        key = {expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />;
      })};

    </Card>
  );
};

export default Expenses;
