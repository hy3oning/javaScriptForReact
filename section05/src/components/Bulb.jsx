import { useState } from "react";
const Bulb = () => {
  const [light, setLight] = useState("ON");
  const onLightClick = (e) => {
    setLight(light === "ON" ? "OFF" : "ON");
  };
  return (
    <>
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>Bulb ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "black", color: "white" }}>Bulb OFF</h1>
        )}
        <button type="button" onClick={onLightClick}>
          {light === "ON" ? "OFF" : "ON"}
        </button>
      </div>
    </>
  );
};
export default Bulb;
