import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        date={props.data[0].date}
        description={props.data[0].description}
        price={props.data[0].price}
      />
      <ExpenseItem
        date={props.data[1].date}
        description={props.data[1].description}
        price={props.data[1].price}
      />
      <ExpenseItem
        date={props.data[2].date}
        description={props.data[2].description}
        price={props.data[2].price}
      />
    </div>
  );
}

export default Expenses;
