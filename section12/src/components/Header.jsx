import "./../css/Header.css";
import { memo } from "react";

const Header = ({ count }) => {
  console.log(`header ${count}`);
  const today = new Date().toLocaleDateString();
  return (
    <div className="Header">
      <h2>오늘은 📆</h2>
      <h1>{today}</h1>
    </div>
  );
};

export default memo(Header);
