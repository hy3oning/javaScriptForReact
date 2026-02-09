const Controller = ({ num1, num2, onClickCalculate, onChangeNum }) => {
  return (
    <>
      <div className="input_controller">
        <label htmlFor="num1">숫자 1</label>
        <input
          type="number"
          name="num1"
          id="num1"
          value={num1}
          onChange={onChangeNum}
        />
        <br />
        <label htmlFor="num1">숫자 2</label>
        <input
          type="number"
          name="num2"
          id="num2"
          value={num2}
          onChange={onChangeNum}
        />
        <br />
        <button type="button" value={"+"} onClick={onClickCalculate}>
          +
        </button>
        <button type="button" value={"-"} onClick={onClickCalculate}>
          -
        </button>
        <button type="button" value={"*"} onClick={onClickCalculate}>
          *
        </button>
        <button type="button" value={"/"} onClick={onClickCalculate}>
          /
        </button>
      </div>
    </>
  );
};
export default Controller;
