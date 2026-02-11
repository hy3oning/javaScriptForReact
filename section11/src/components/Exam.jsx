import { useReducer, useState } from "react";
const Exam = () => {
  /* useState
   const [count, setCount] = useState(0);
   const onClictPlus = () => {
     setCount(count + 1);
   };
   const onClictMinus = () => {
     setCount(count - 1);
   };
   */
  function reducer(count, action) {
    switch (action.type) {
      case "PLUS":
        return count + Number(action.data);
      case "MINUS":
        return count - Number(action.data);
      default:
        return count;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  const onClickPlus = (e) => {
    dispatch({ type: "PLUS", data: e.target.value });
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button type="button" onClick={onClickPlus} value={2}>
          +
        </button>
        <button
          type="button"
          onClick={(e) => {
            dispatch({ type: "MINUS", data: e.target.value });
          }}
          value={3}
        >
          -
        </button>
      </div>
    </>
  );
};
export default Exam;
