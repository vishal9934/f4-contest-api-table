import TableRow from "./components/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        )
        .then((res) => setData(res.data));
    } catch (error) {
      console.log("error");
    }
  }, []);

  console.log(data);

  return (
    <div className="App">
      {/* <TableRow/> */}
      <h1>Cryptocurrency Data</h1>
      <table>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
