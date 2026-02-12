import { useParams } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const Edit = () => {
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
      <h2>{params.id} EDIT</h2>
    </>
  );
};

export default Edit;
