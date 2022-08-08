import Expenses from "./components/Expenses/Expenses";

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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={data} />
    </div>
  );
}

export default App;
