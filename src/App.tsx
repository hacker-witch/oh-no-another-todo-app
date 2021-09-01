import { FormEvent, useState, useEffect } from "react";
import styled from "styled-components";
import localforage from "localforage";
import { TodoList } from "components/TodoList";
import { Todo } from "types/Todo";

export const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    localforage.getItem("todos").then((todos) => {
      if (!todos) {
        return;
      }

      setTodos(todos as Todo[]);
    });
  }, []);

  useEffect(() => {
    localforage.setItem("todos", todos);
  }, [todos]);

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, { text: newTodoText, wasCompleted: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index: number) => {
    const newTodoList = todos.map((todo, currentIndex) => {
      if (currentIndex === index) {
        return { ...todo, wasCompleted: !todo.wasCompleted };
      }

      return todo;
    });

    setTodos(newTodoList);
  };

  const deleteTodo = (index: number) => {
    const newTodoList = todos.filter(
      (todo, currentIndex) => currentIndex !== index
    );

    setTodos(newTodoList);
  };

  const moveTodo = (oldIndex: number, newIndex: number) => {
    const reorderedTodos = todos.map((todo, index) => {
      if (index === oldIndex) {
        return todos[newIndex];
      }

      if (index === newIndex) {
        return todos[oldIndex];
      }

      return todo;
    });

    setTodos(reorderedTodos);
  };

  const handleNewTodoTextChange = (e: FormEvent<HTMLInputElement>) => {
    setNewTodoText(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ text: newTodoText, wasCompleted: false });
    setNewTodoText("");
  };

  return (
    <div>
      <Title>TODO</Title>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addTodo"
          aria-label="Write a new todo item"
          value={newTodoText}
          onChange={handleNewTodoTextChange}
          placeholder="Create a new todo..."
        />
      </form>

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        moveTodo={moveTodo}
      />

      <p>Drag and drop to reorder list</p>
      <p>
        Press <kbd>space</kbd> in a todo and move it with the arrow keys to
        reorder the list with the keyboard. To confirm the reordering, press{" "}
        <kbd>space</kbd> again.
      </p>
    </div>
  );
};

const Title = styled.h1`
  font-size: 1.6875rem;
  letter-spacing: 0.35em;
  margin: 3.125rem 0 0 0;
`;
