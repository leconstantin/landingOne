import React from "react";
import { FaCheck, FaPen, FaTrash } from "react-icons/fa";
import { Ttodo } from "./TodoWrapper";
type Tprops = {
  props: Ttodo;
  toggleComplete: (createdAt: Date) => void;
  deleteTodo: (createdAt: Date) => void;
  editTodo: (createdAt: Date) => void;
};
const Todo = ({ props, toggleComplete, deleteTodo, editTodo }: Tprops) => {
  const { task, completed, createdAt, editedAt } = props;
  return (
    <div
      className={`text-white flex justify-between items-center mt-4 px-4 h-11 rounded-md ${completed ? "bg-green-400" : "bg-purple-600 "
        }`}
    >
      {/* */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        title={
          createdAt.getMilliseconds() !== editedAt.getMilliseconds()
            ? `  you edited it on ${editedAt}`
            : `  you created it on ${createdAt}`
        }
        onClick={() => toggleComplete(createdAt)}
      >
        <FaCheck className={completed ? "flex" : "hidden"} />
        <p>{task}</p>
      </div>

      <div className="flex gap-3">
        <FaPen
          className="cursor-pointer hover:scale-110 hover:text-black ease-in-out duration-500 "
          onClick={() => editTodo(createdAt)}
        />
        <FaTrash
          className="cursor-pointer hover:scale-105 hover:text-black ease-in-out duration-500 "
          onClick={() => deleteTodo(createdAt)}
        />
      </div>
    </div>
  );
};

export default Todo;
