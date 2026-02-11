import "./../css/Editor.css";
import { useState, useRef } from "react";
const Editor = ({ onCreate }) => {
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
    if (content === null) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
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
