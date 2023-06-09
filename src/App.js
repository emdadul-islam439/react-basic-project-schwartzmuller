import { useState } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  const persons = [
    { id: "kjfkd", name: "John", age: "22" },
    { id: "kfkdk", name: "Abraham", age: "34" },
    { id: "mdd", name: "Grearson", age: "42" },
    { id: "fjdfj", name: "Oh My God", age: "15" },
  ];
  const [personList, setPersonList] = useState(persons);

  return (
    <div className="App">
      <h1>This is HomePage</h1>
      <p>This app is working properly!</p>
      <button onClick={() => {}}>Toggle Showing Data</button>
      {console.log("persons: " + persons)}
      {personList.map((person) => (
        <Person key={person.id} name={person.name} age={person.age} />
      ))}
      <p>experiments</p>
    </div>
  );
}

export default App;
