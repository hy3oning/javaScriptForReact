import Button from "./Button";

const Header = ({ leftButton, rightButton }) => {
  return (
    <header className="home-header">
      <h1 className="home-logo">COMMUNITY</h1>

      <div className="home-header-btn">
        <Button text={leftButton} />
        <Button text={rightButton} />
      </div>
    </header>
  );
};

export default Header;
