import "./Person.css"

const person = (props) => {
  return (
    <div className="person">
      <p>
        This is {props.name}, who is {props.age} years old.
      </p>
      <input type="textInput" />
    </div>
  );
};

export default person;
