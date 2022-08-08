import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);

  const buttonHandler = () => {
    console.log("Clicked!!!") ;
    setTitle('Updated !!!') ;
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonHandler}>Click me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
