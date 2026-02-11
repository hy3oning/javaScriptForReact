import TodoItem from "./TodoItem";
import "./../css/List.css";
import { useMemo, useState } from "react";
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  //주의 어려움
  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };
  const filterTodos = getFilterData();

  //useMemo
  //전체리스트갯수, 완료된갯수, 미완료된객수
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    let totalCount = todos.length;
    let doneCount = todos.filter((todo) => todo.isDone === true).length;
    let notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);
  return (
    <>
      <div className="List">
        <h3>Todo List🌱</h3>
        <div>
          <p>total:{totalCount}</p>
          <p>done:{doneCount}</p>
          <p>notDone:{notDoneCount}</p>
        </div>
        <input
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={onChangeSearch}
        />
        <div className="todos_wrapper">
          {filterTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default List;
