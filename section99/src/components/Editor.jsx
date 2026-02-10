import "./../css/Editor.css";
const Editor = () => {
  return (
    <>
      <div className="Editor">
        <label htmlFor="text">이름:</label>
        <input type="text" />
        <button type="button">다음</button>
      </div>
    </>
  );
};
export default Editor;
