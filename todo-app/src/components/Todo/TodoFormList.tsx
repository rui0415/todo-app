import React, { useState } from "react";
import TodoItem, { Todo } from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoFormList(): JSX.Element {
  const [todoItemList, setTodoList] = useState<Todo[]>([]);
  const addTodoOnClick = (todo: Todo) => {
    const newTodoList = [...todoItemList];

    newTodoList.push(todo);
    setTodoList(newTodoList);
    console.log("追加");
  };

  return (
    <div>
      <div className="p-2 w-full border border-gray-600 max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-700 mb-1">
        {todoItemList.map((todo, i) => {
          return <TodoItem key={i} {...todo} />;
        })}
        <TodoForm addTodoOnClick={addTodoOnClick} />
      </div>
    </div>
  );
}
