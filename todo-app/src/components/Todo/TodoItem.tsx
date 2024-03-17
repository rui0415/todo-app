import { FaCheckCircle } from "react-icons/fa";
import { TbProgressCheck } from "react-icons/tb";
import { MdIncompleteCircle } from "react-icons/md";
import Button from "../Button/Button";
import { useState } from "react";

type Status = "Done" | "Progress" | "Incomplete";

export type Todo = {
  title: string;
  content: string;
  status: Status;
};

export default function TodoItem(props: Todo): JSX.Element {
  const [todo, setTodo] = useState<Todo>(props);

  const onClickHandler = () => {
    const newTodo = { ...todo };
    {
      newTodo.status === "Incomplete"
        ? (newTodo.status = "Progress")
        : newTodo.status === "Progress"
        ? (newTodo.status = "Done")
        : (newTodo.status = "Incomplete");
    }
    setTodo(newTodo);
  };

  let statusClassName = {
    text: "",
    textColor: "",
    bgColor: "",
  };

  switch (todo.status) {
    case "Done":
      statusClassName.text = "完了";
      statusClassName.textColor = "text-emerald-500";
      statusClassName.bgColor = "bg-emerald-500";
      break;
    case "Progress":
      statusClassName.text = "実行中";
      statusClassName.textColor = "text-blue-600";
      statusClassName.bgColor = "bg-blue-600";
      break;
    case "Incomplete":
      statusClassName.text = "未対応";
      statusClassName.textColor = "text-gray-600";
      statusClassName.bgColor = "bg-gray-600";
      break;
  }

  return (
    <div className="relative flex w-full border border-gray-600 max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-1">
      <div
        className={`flex items-center justify-center w-12 ${statusClassName.bgColor}`}
      >
        {todo.status === "Done" ? (
          <FaCheckCircle className="w-6 h-6 text-white fill-current" />
        ) : todo.status === "Incomplete" ? (
          <TbProgressCheck className="w-7 h-7 text-white"></TbProgressCheck>
        ) : (
          <MdIncompleteCircle className="w-6 h-6 text-white"></MdIncompleteCircle>
        )}
      </div>

      <div className="px-4 py-2 w-80">
        <div className="mx-3">
          <span className={`absolute top-1 right-2`}>
            <Button
              text={statusClassName.text}
              handlerOnClick={onClickHandler}
              color={statusClassName.textColor}
            ></Button>
          </span>
          <p className="me-1 mb-0 text-gray-600 dark:text-gray-200">
            {todo.title}
          </p>
          <span className="text-sm  text-gray-600 dark:text-gray-200 me-1">
            {todo.content}
          </span>
        </div>
      </div>
    </div>
  );
}
