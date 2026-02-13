import { useParams } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Editor from "./Editor";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { DiaryStateContext, DiaryDispatchContext } from "./../App";
const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  //Edit 마운트가 되는순간 => parms.id 를 통해서 date에서 해당되는 항목을 찾고, currentDiaryItem 저장
  // useState와 useEffect를 제거하고 useMemo로 대체
  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(params.id));
  }, [data, params.id]); // data나 id가 바뀔 때만 다시 계산

  //삭제플래그
  const isDeleting = useRef(false);

  // 데이터 확인 및 리다이렉트 로직
  useEffect(() => {
    if (isDeleting.current) return;
    if (data.length > 0 && !curDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [data, curDiaryItem, nav]);

  // 데이터가 로드될 때까지 렌더링 방어
  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }
  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      isDeleting.current = true;
      onDelete(Number(params.id));
      nav("/", { replace: true });
    }
  };
  // Edit.jsx 수정
  // Edit.jsx
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        Number(params.id), // 반드시 Number로 변환!
        new Date(input.createdDate).getTime(),
        Number(input.emotionId),
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  return (
    <>
      <Header
        title={"일기 수정"}
        leftChild={
          <Button text={"back"} type={"POSITIVE"} onClick={() => nav(-1)} />
        }
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </>
  );
};

export default Edit;
