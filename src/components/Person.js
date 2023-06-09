const person = (props) => {
  return (
    <div>
      <p>
        This is {props.name}, who is {props.age} years old.
      </p>
      <input type="textInput" />
    </div>
  );
};

export default person;
