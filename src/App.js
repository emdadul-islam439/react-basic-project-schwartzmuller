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
  const [isDataShowingEnabled, setIsDataShowingEnabled] = useState(false);

  const toggleDataShowing = () =>
    setIsDataShowingEnabled(!isDataShowingEnabled);

  return (
    <div className="App">
      <h1>This is HomePage</h1>
      <p>This app is working properly!</p>
      <button
        onClick={() => {
          toggleDataShowing();
        }}
      >
        Toggle Showing Data
      </button>
      {isDataShowingEnabled &&
        personList.map((person) => (
          <Person key={person.id} name={person.name} age={person.age} />
        ))}
    </div>
  );
}

export default App;
