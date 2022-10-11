import "./App.css";
import Card from "./components/Card";
const data = [
  {
    title: "Pen",
    price: 20,
    color: "blue",
    date: new Date(2022, 7, 5),
  },
  {
    title: "Paper",
    price: 20,
    color: "blue",
    date: new Date(2020, 3, 14),
  },
  {
    title: "Apple",
    price: 20,
    color: "blue",
    date: new Date(2021, 7, 24),
  },
];
function App() {
  return (
    <div className="App">
      {data.map((e) => {
        return ( <Card title={e.title} price={e.price} color={e.color} data={e.date} />)
      })}
    </div>
  );
}

export default App;
