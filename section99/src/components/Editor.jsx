import "./../css/Editor.css";

const Editor = ({
  input,
  onChangeInput,
  onSubmit,
  nameRef,
  korRef,
  engRef,
  matRef,
  editId,
}) => {
  return (
    <div className="Editor">
      <label>이름</label>
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={onChangeInput}
        ref={nameRef}
      />

      <label>국어</label>
      <input
        type="number"
        name="kor"
        value={input.kor}
        min={0}
        max={100}
        onChange={onChangeInput}
        ref={korRef}
      />

      <label>영어</label>
      <input
        type="number"
        name="eng"
        value={input.eng}
        min={0}
        max={100}
        onChange={onChangeInput}
        ref={engRef}
      />

      <label>수학</label>
      <input
        type="number"
        name="mat"
        value={input.mat}
        min={0}
        max={100}
        onChange={onChangeInput}
        ref={matRef}
      />

      <button type="button" onClick={onSubmit}>
        {editId === null ? "전송" : "수정"}
      </button>
    </div>
  );
};

export default Editor;
