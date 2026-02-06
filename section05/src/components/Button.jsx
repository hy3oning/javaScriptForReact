const Button = ({ text, color = "black", children }) => {
  const onClickButton = (e) => {
    alert(`${text}+${color}`);
    //매우중요
    console.log(e);
  };
  return (
    <button onClick={onClickButton} style={{ color: color }} type="button">
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
