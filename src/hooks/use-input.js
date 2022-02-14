import { useReducer } from "react";

const initialInputState = { value: "", wasTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT_VALUE") return { value: action.value, wasTouched: state.wasTouched };
  else if (action.type === "INPUT_BLUR") return { value: state.value, wasTouched: true };
  else if (action.type === "INPUT_RESET") return initialInputState;
  return initialInputState;
};

const useInput = validateValue => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.wasTouched;

  const valueChangeHandler = event => dispatch({ type: "INPUT_VALUE", value: event.target.value });
  const inputBlurHandler = () => dispatch({ type: "INPUT_BLUR" });
  const resetInput = () => dispatch({ type: "INPUT_RESET" });

  return { value: inputState.value, isValid: valueIsValid, hasError, valueChangeHandler, inputBlurHandler, resetInput };
};

export default useInput;
