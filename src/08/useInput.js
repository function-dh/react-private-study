import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInput(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
