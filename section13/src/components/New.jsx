import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const param = useParams();
  const nav = useNavigate();
  console.log(param);

  //버튼 전송 (onCreate 생성)
  const onSubmit = (input) => {
    const createdDate = new Date(input.createdDate);

    onCreate(createdDate.getTime(), input.emotionId, input.content);

    nav("/", { replace: true });
  };

  return (
    <>
      <Header
        title={"새 일기쓰기"}
        leftChild={
          <Button text={"back"} type={"POSITIVE"} onClick={() => nav(-1)} />
        }
      />
      <Editor onSubmit={onSubmit} />
    </>
  );
};
export default New;
