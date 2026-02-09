const Controller = ({ onClickButton }) => {
  return (
    <>
      {/* {카운터이벤트버튼} */}
      <div className="controller">
        <button onClick={onClickButton} value={-1}>
          -1
        </button>
        <button onClick={onClickButton} value={-10}>
          -10
        </button>
        <button onClick={onClickButton} value={-100}>
          -100
        </button>
        <button onClick={onClickButton} value={100}>
          100
        </button>
        <button onClick={onClickButton} value={10}>
          10
        </button>
        <button onClick={onClickButton} value={1}>
          1
        </button>
      </div>
    </>
  );
};
export default Controller;
