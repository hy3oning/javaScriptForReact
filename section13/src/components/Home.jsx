import Header from "./Header";
import Button from "./Button";
import DiaryList from "./DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
const Home = () => {
  //props가져오기
  const state = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  // 이전달, 다음달 이벤트처리
  const onDecreaseMonth = (e) => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const onIncreaseMonth = (e) => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  //26년 2월달에(시작일~끝나는일) 해당되는 것만 필터링하기
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  const monthlyDate = state.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime,
  );
  return (
    <>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList monthlyDate={monthlyDate} />
    </>
  );
};
export default Home;
