import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="App">
      <Card name={name} number={number} month={month} year={year} cvc={cvc} />
      <Form
        setName={setName}
        setNumber={setNumber}
        setYear={setYear}
        setMonth={setMonth}
        setCvc={setCvc}
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
    </div>
  );
}

export default App;
