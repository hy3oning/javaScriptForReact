import TodoItem from "./TodoItem";
import "./../css/List.css";
import { useState } from "react";
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(null);
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  //주의 어려움
  const getFilterDate = () => {
    if (search === null) {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };
  const filterTodos = getFilterDate();
  return (
    <>
      <div className="List">
        <h3>Todo List🌱</h3>
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
