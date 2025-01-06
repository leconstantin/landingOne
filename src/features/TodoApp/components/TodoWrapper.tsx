"use client";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
export type Ttodo = {
  task: string;
  completed: boolean;
  isEditing: boolean;
  createdAt: Date;
  editedAt: Date;
};
const TodoWrapper = () => {
  const [todos, setTodos] = useState<Ttodo[]>([]);
  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      {
        task: todo,
        completed: false,
        isEditing: false,
        createdAt: new Date(),
        editedAt: new Date(),
      },
    ]);
  };

  const toggleComplete = (createdAt: Date) => {
    setTodos(
      todos.map((todo) =>
        todo.createdAt === createdAt
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };
  const deleteTodo = (createdAt: Date) => {
    setTodos(
      todos.filter((todo) => (todo.createdAt === createdAt ? false : true))
    );
  };

  const isEditTodo = (createdAt: Date) => {
    setTodos(
      todos.map((todo) =>
        todo.createdAt === createdAt
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      )
    );
  };
  const editTodo = (task: string, createdAt: Date, editedAt: Date) => {
    setTodos(
      todos.map((todo) =>
        todo.createdAt === createdAt
          ? {
              ...todo,
              task: task,
              editedAt: editedAt,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  return (
    <div className="bg-zinc-900 text-white p-4 sm:p-6 rounded-lg md:min-w-[500px]">
      <h1 className="text-center text-2xl mb-8">Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length < 1 && (
        <div className="text-white text-center flex flex-col items-center justify-center min-h-[200px] gap-7">
          <p className="text-xl font-semibold">No Todos have already created</p>
        </div>
      )}
      {todos.reverse().map((todo) => (
        <div key={todo.createdAt.getMilliseconds()}>
          {todo.isEditing ? (
            <EditTodoForm props={todo} editTodo={editTodo} />
          ) : (
            <Todo
              props={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={isEditTodo}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoWrapper;
