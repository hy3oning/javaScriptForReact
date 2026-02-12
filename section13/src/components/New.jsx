import Header from "./Header";
import Button from "./Button";

import { useParams } from "react-router-dom";
const New = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header
        title={"HEADER"}
        leftChild={
          <Button
            text={"LEFT"}
            type={"POSITIVE"}
            onClick={(e) => {
              alert(e.target.innerText);
            }}
          />
        }
        rightChild={
          <Button
            text={"RIGHT"}
            type={"NEGATIVE"}
            onClick={(e) => {
              alert(e.target.innerText);
            }}
          />
        }
      />
      <h1>{param.id}New</h1>
    </>
  );
};
export default New;
