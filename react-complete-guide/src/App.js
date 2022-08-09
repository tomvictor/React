import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_DATA = [
  {
    id: 1,
    date: new Date(2022, 7, 8),
    title: "Car Insurance",
    amount: 90,
  },
];

const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const newExpenseHandler = (inputData) => {
    console.log("in App.js");
    console.log(inputData);
    setData((prevExpense) => {
      return [inputData, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses data={data} />
    </div>
  );
};

export default App;
