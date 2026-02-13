import Header from "./Header";
import Button from "./Button";
import Viewer from "./Viewer";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { DiaryStateContext } from "../App";

//날짜를 문자열로 리턴하는 함수
const getStringDate = (date) => {
  const targetDate = new Date(date);

  let year = targetDate.getFullYear();
  let month = String(targetDate.getMonth() + 1).padStart(2, "0");
  let day = String(targetDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(params.id));
  }, [data, params.id]); // data나 id가 바뀔 때만 다시 계산
  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }
  const title = getStringDate(new Date(curDiaryItem.createdDate));
  return (
    <>
      <Header
        title={`${title} 일기`}
        leftChild={
          <Button text={"back"} type={"POSITIVE"} onClick={() => nav(-1)} />
        }
        rightChild={
          <Button
            text={"수정하기"}
            type={""}
            onClick={() => nav(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer
        emotionId={curDiaryItem.emotionId}
        content={curDiaryItem.content}
      />
    </>
  );
};
export default Diary;
