import { getEmotionImage } from "./../util/GetEmotionImage.js";
import Button from "./Button.jsx";
import "./../css/DiaryItem.css";
import { useNavigate } from "react-router-dom";
const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  return (
    <>
      <div className="DiaryItem">
        <div className="img_section">
          <img
            src={getEmotionImage(emotionId)}
            onClick={() => nav(`/diary/${id}`)}
          />
        </div>
        <div className="info_section">
          <div className="created_date">
            {new Date(createdDate).toLocaleDateString()}
          </div>
          <div className="content">{content}</div>
        </div>
        <div className="button_section">
          <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
        </div>
      </div>
    </>
  );
};
export default DiaryItem;
