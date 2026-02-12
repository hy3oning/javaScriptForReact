import Header from "./Header";
import Button from "./Button";
import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
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
      <h1>{params.id}Diary</h1>
    </>
  );
};
export default Diary;
