import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(2);
  const [completed, setCompleted] = useState(false);
  const initialList = data?.slice(0, index);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err));
  };
  const handleList = () => {
    setIndex((prev) => prev + 3);
    if (index >= data?.length) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {initialList?.map((item) => (
        <h2>{item?.id}</h2>
      ))}

      {completed ? "Over" : <button onClick={handleList}>Load More</button>}
    </div>
  );
}
