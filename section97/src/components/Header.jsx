// Header.jsx
import "./../css/Header.css";

const Header = ({ title, rightChild, leftChild }) => {
  return (
    <header className="header">
      <div className="header_left">{leftChild}</div>
      <h1 className="header-title">{title}</h1>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
