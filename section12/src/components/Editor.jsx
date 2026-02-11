import "./../css/Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeydown = (e) => {
    //Enter KeyCode ===13
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content.trim() === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
    inputRef.current.focus();
  };
  return (
    <>
      <div className="Editor">
        <input
          type="text"
          placeholder="새로운 Todo..."
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeydown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </>
  );
};
export default Editor;
