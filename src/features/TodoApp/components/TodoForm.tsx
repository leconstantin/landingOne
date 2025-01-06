"use client";
import React, { useState } from "react";
type TaddTodo = {
  addTodo: any;
};
const TodoForm = ({ addTodo }: TaddTodo) => {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    addTodo(value);
    setValue("");
    setIsSubmitting(false);
  };
  return (
    <form
      className="flex flex-col mb-8 border-b-2 border-purple-400/45"
      onSubmit={handleSubmit}
    >
      <div className="flex h-10 mb-4 md:min-w-[500px]">
        <input
          type="text"
          name="value"
          placeholder="What is the task to day?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-full md:w-full bg-transparent border border-purple-600 outline-none md:min-w-80 text-white px-4 rounded-s-lg"
        />
        <button
          type="submit"
          disabled={isSubmitting || value.trim() === ""}
          className="md:w-full bg-purple-600 disabled:bg-purple-500 disabled:cursor-not-allowed text-white px-4 h-full rounded-e-lg "
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
