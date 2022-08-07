import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={data[0].date}
        description={data[0].description}
        price={data[0].price}
      />
      <ExpenseItem
        date={data[1].date}
        description={data[1].description}
        price={data[1].price}
      />
      <ExpenseItem
        date={data[2].date}
        description={data[2].description}
        price={data[2].price}
      />
    </div>
  );
}

export default App;
