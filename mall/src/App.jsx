import { RouterProvider } from "react-router-dom";
import Root from "./router/Root";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={Root} />
    </>
  );
}

export default App;
