import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput(value => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastNameInput,
  } = useInput(value => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
  } = useInput(value => value.includes("@"));

  const formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameInputHasError && "invalid"}`}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameInputHasError && <p className="error-text">Please enter your first name!</p>}
        </div>
        <div className={`form-control ${lastNameInputHasError && "invalid"}`}>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameInputHasError && <p className="error-text">Please enter your last name!</p>}
        </div>
      </div>
      <div className={`form-control ${emailInputHasError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Please enter a valid email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
