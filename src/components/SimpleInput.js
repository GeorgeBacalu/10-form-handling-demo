import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput(value => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
  } = useInput(value => value.includes("@"));

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log(enteredName, enteredEmail);
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameInputHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className={`form-control ${emailInputHasError && "invalid"}`}>
        <label htmlFor="email">Your E-Mail</label>
        <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Please enter a valid email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
