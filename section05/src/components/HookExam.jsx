import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
    console.log(e);
  };
  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} type="text" />
      <input value={input2} onChange={onChange2} type="text" />
    </div>
  );
};
export default HookExam;
