import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./../css/DiaryList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ monthlyDate }) => {
  //정렬이벤트
  const [sortType, setSortType] = useState("latest");
  //asc,desc
  const getSortedMonthlyDate = () => {
    return monthlyDate.toSorted((a, b) => {
      if (sortType === "oldest") {
        return a.createdDate - b.createdDate;
      } else {
        return b.createdDate - a.createdDate;
      }
    });
  };
  //페이지 라우터
  const nav = useNavigate();
  const sortedMonthlyDate = getSortedMonthlyDate();
  return (
    <>
      <div className="DiaryList">
        <div className="menu_bar">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value={"latest"}>LATEST</option>
            <option value={"oldest"}>OLDEST</option>
          </select>
          <Button
            text={"새 일기쓰기"}
            type={"POSITIVE"}
            onClick={() => nav("/new")}
          />
        </div>
        <div className="list_wrapper">
          {sortedMonthlyDate.map((item) => (
            <DiaryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default DiaryList;
