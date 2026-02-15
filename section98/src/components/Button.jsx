import "./../css/Button.css";
const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="login-button">
        {text}
      </button>
    </>
  );
};
export default Button;
