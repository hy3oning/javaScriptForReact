import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (e) => {
    setCount(count + parseInt(e.target.value));
    console.log(e);
  };
  console.log(`App 리랜더링 ${count}`);
  return (
    <>
      <div className="app">
        {/* {제목} */}
        <h1>카운터앱</h1>
        {/* {카운터뷰} */}
        <Viewer count={count} />
        <Controller onClickButton={onClickButton} />
      </div>
    </>
  );
}

export default App;
