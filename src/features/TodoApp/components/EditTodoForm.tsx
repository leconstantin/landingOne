"use client";
import React, { useState } from "react";
import { Ttodo } from "./TodoWrapper";
type Tprops = {
  props: Ttodo;
  editTodo: (task: string, createdAt: Date, editedAt: Date) => void;
};
const EditTodoForm = ({ props, editTodo }: Tprops) => {
  const { task, createdAt } = props;
  const [value, setValue] = useState(task);
  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedAt = new Date();
    editTodo(value, createdAt, editedAt);
  };
  return (
    <form className="flex h-10 my-8 md:min-w-[500px]" onSubmit={handleEdit}>
      <input
        type="text"
        name="value"
        placeholder="What is the task to day?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-full md:w-full bg-transparent border border-purple-600 outline-none min-w-80 text-white px-4 rounded-s-lg"
      />
      <button
        type="submit"
        className="md:w-full bg-purple-600 disabled:bg-purple-400 text-white px-4 h-full rounded-e-lg"
      >
        Edit Task
      </button>
    </form>
  );
};

export default EditTodoForm;
