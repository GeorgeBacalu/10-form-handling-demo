import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameWasTouched;
  const formIsValid = enteredNameIsValid;

  const nameChangeHandler = event => setEnteredName(event.target.value);
  const nameBlurHandler = () => setEnteredNameWasTouched(true);

  const submitHandler = event => {
    event.preventDefault();
    setEnteredNameWasTouched(true);
    if (!formIsValid) return;
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameWasTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameInputIsInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
