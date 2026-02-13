import Button from "./Button";
import EmotionItem from "./EmotionItem";
import "./../css/Editor.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];
//날짜를 문자열로 리턴하는 함수
const getStringDate = (date) => {
  const targetDate = new Date(date);

  let year = targetDate.getFullYear();
  let month = String(targetDate.getMonth() + 1).padStart(2, "0");
  let day = String(targetDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();

  // const [createDate, setCreateDate] = useState(new Date());
  // const [emotionId, setImotionId] = useState(5);
  // const [content, setContent] = useState("");
  const [input, setInput] = useState({
    createdDate: getStringDate(new Date()),
    emotionId: 5,
    content: "",
  });
  const onChangeInput = (e) => {
    let { name, value } = e.target;

    // emotionId는 숫자로 저장되어야 비교 연산(===)이 잘 작동합니다.
    if (name === "emotionId") {
      value = Number(value);
    }

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //마운트기능(마운트가 되자마자 전달되는 initData값을 각각의 useState변수 저장해야한다.)
  useEffect(() => {
    if (initData) {
      // 기존 setInput 내부의 함수 호출 방식()을 객체 할당 방식(:)으로 수정
      setInput({
        createdDate: getStringDate(new Date(initData.createdDate)),
        emotionId: initData.emotionId,
        content: initData.content,
      });
    }
  }, [initData]);
  return (
    <>
      <div className="Editor">
        <section className="date_section">
          <h4>오늘의 날짜</h4>
          <input
            type="date"
            name="createdDate"
            onChange={onChangeInput}
            value={input.createdDate}
          />
        </section>
        <section className="emotion_section">
          <h4>오늘의 감정</h4>
          <div className="emotion_list_wrapper">
            {emotionList.map((item) => {
              return (
                <EmotionItem
                  key={item.emotionId}
                  onClick={() => {
                    onChangeInput({
                      target: { name: "emotionId", value: item.emotionId },
                    });
                  }}
                  {...item}
                  isSelected={item.emotionId === input.emotionId}
                />
              );
            })}
          </div>
        </section>
        <section className="content_section">
          <h4>오늘의 일기</h4>
          <textarea
            placeholder="오늘은 어땠나요?"
            onChange={onChangeInput}
            name="content"
            value={input.content}
          />
        </section>
        <section className="button_section">
          <Button text={"취소하기"} type={"NEGATIVE"} onClick={() => nav(-1)} />
          <Button
            text={"작성완료"}
            type={"POSITIVE"}
            onClick={() => {
              console.log("작성완료 클릭됨", input);
              onSubmit(input);
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Editor;
