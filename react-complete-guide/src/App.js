import ExpenceItem from "./components/ExpenceItem";

function App() {
  const data = [
    {
      id : 1,
      date : new Date(2022, 7, 8).toISOString(),
      title: "Car Insurance",
      description: "Volkswagen car",
      price: 90,
    },
    {
      id : 2,
      date : new Date(2022, 7, 8).toISOString(),
      title: "Paper",
      description: "Just paper",
      price: 4242,
    },
    {
      id : 3,
      date : new Date(2022, 7, 8).toISOString(),
      title: "Laptop",
      description: "Apple",
      price: 23424,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenceItem
        date={data[0].date}
        description={data[0].description}
        price={data[0].price}
      ></ExpenceItem>
      <ExpenceItem
        date={data[1].date}
        description={data[1].description}
        price={data[1].price}
      ></ExpenceItem>
      <ExpenceItem
        date={data[2].date}
        description={data[2].description}
        price={data[2].price}
      ></ExpenceItem>

    </div>
  );
}

export default App;
