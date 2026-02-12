import { useParams } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  return (
    <>
      <Header
        title={"HEADER"}
        leftChild={
          <Button text={"back"} type={"POSITIVE"} onClick={() => nav("/")} />
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
