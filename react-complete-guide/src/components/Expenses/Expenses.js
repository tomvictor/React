import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate,setFilterDate] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    console.log('on expenses.js')
    console.log(selectedYear);
    setFilterDate(selectedYear);
    console.log(filterDate);
  };

  return (      
      <Card className="expenses">
      <ExpensesFilter selectedValue={filterDate} onFilterDate={filterChangeHandler}/>
        <ExpenseItem
          date={props.data[0].date}
          title={props.data[0].title}
          price={props.data[0].price}
        />
        <ExpenseItem
          date={props.data[1].date}
          title={props.data[1].title}
          price={props.data[1].price}
        />
        <ExpenseItem
          date={props.data[2].date}
          title={props.data[2].title}
          price={props.data[2].price}
        />
      </Card>
  );
};

export default Expenses;
