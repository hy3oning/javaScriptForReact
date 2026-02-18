export const initialPosts = [
  {
    id: 1,
    title: "useState랑 useReducer 차이 질문",
    content: "언제 useRedecer 쓰는 게 좋아요?",
    author: "user01",
    createdAt: Date.now(),
  },
  {
    id: 2,
    title: "포트폴리오 피드백 부탁",
    content: "프로젝트 구성 어떻게 잡는 게 좋나요?",
    author: "user02",
    createdAt: Date.now(),
  },
];
export const initialAnswers = [
  {
    id: 101,
    postId: 1,
    content: "상태 전이가 복잡하거나 액션이 명확하면 useReducer가 좋아요",
    author: "mentor01",
    createdAt: Date.now(),
  },
];
