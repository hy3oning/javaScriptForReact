import { getEmotionImage } from "../util/GetEmotionImage";
import "./../css/EmotionItem.css";
const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <>
      <div
        className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
        onClick={onClick}
      >
        <img className="emotion_img" src={getEmotionImage(emotionId)} />
      </div>
      <div className="emotion_name">{emotionName}</div>
    </>
  );
};
export default EmotionItem;
