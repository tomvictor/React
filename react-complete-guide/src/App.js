import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const data = [
    {
      id: 1,
      date: new Date(2022, 7, 8),
      title: "Car Insurance",
      description: "Volkswagen car",
      price: 90,
    },
    {
      id: 2,
      date: new Date(2022, 4, 23),
      title: "Paper",
      description: "Just paper",
      price: 4242,
    },
    {
      id: 3,
      date: new Date(2022, 5, 7),
      title: "Laptop",
      description: "Apple",
      price: 23424,
    },
  ];

  const newExpenseHandler = (inputData) => {
    console.log("in App.js");
    console.log(inputData);
  };
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses data={data} />
    </div>
  );
};

export default App;
