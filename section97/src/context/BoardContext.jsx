import { createContext, useReducer, useRef } from "react";
import { mockBoardData } from "../mock/mockBoardData";

export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, ...action.data } : item,
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);

    // state(게시글 배열)를 map으로 순회할 때, 현재 꺼낸 게시글 1개를 board라고 부름
    // map은 모든 board를 반환값으로 모아서 '새 state 배열'을 만들어준다(불변성 유지)
    case "CREATE_COMMENT":
      return state.map((board) => {
        if (board.id !== action.boardId) return board;
        const prev = Array.isArray(board.comments) ? board.comments : [];
        return { ...board, comments: [action.data, ...prev] };
      });

    case "DELETE_COMMENT":
      return state.map((board) => {
        if (board.id !== action.boardId) return board;
        const prev = Array.isArray(board.comments) ? board.comments : [];
        return {
          ...board,
          comments: prev.filter((c) => c.id !== action.commentId),
        };
      });

    default:
      return state;
  }
}

export const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, mockBoardData);

  const idRef = useRef(4);
  const commentIdRef = useRef(1);

  const onCreate = (author, title, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        author,
        title,
        content,
        createdAt: Date.now(),
        comments: [],
      },
    });
  };

  const onUpdate = (targetId, author, title, content) => {
    dispatch({
      type: "UPDATE",
      targetId,
      data: {
        author,
        title,
        content,
        updatedAt: Date.now(),
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };

  const onCreateComment = (boardId, author, content) => {
    dispatch({
      type: "CREATE_COMMENT",
      boardId,
      data: {
        id: commentIdRef.current++,
        author,
        content,
        createdAt: Date.now(),
      },
    });
  };

  const onDeleteComment = (boardId, commentId) => {
    dispatch({ type: "DELETE_COMMENT", boardId, commentId });
  };

  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
          onCreateComment,
          onDeleteComment,
        }}
      >
        {children}
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  );
};
