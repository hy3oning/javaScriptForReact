import Header from "./Header";
import Button from "./Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Diary = () => {
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
      <h1>{params.id}Diary</h1>
    </>
  );
};
export default Diary;
