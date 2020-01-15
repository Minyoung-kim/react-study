import { useReReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}
export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const onChange = e => {
    dispatch(e.target);
  };
  return [state, onChange];
}
