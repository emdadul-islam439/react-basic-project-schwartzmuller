import "./Person.css";

const person = (props) => {
  return (
    <div className="person">
      <p>
        This is "{props.name}", who is {props.age} years old.
      </p>
      <input
        type="textInput"
        onChange={(event) => props.onChange(event, props.idx)}
      />
    </div>
  );
};

export default person;
