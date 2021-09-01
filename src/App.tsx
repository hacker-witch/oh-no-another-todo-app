import { FormEvent, useState, useEffect } from "react";
import styled from "styled-components";
import localforage from "localforage";
import { TodoList } from "components/TodoList";
import { Todo } from "types/Todo";
import { NewTodoTextInput } from "components/NewTodoTextInput";
import mobileBackground from "img/bg-mobile-light.jpg";

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
    const todosCopy = todos.slice();
    const deletedItems = todosCopy.splice(oldIndex, 1);
    const todoToBeMoved = deletedItems[0];
    todosCopy.splice(newIndex, 0, todoToBeMoved);

    setTodos(todosCopy);
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
    <Wrapper>
      <header>
        <Title>TODO</Title>
      </header>

      <Main>
        <form onSubmit={handleSubmit}>
          <NewTodoTextInput
            newTodoText={newTodoText}
            onChange={handleNewTodoTextChange}
          />
        </form>

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          moveTodo={moveTodo}
        />

        <Text>Drag and drop to reorder list</Text>
        <Text>
          Press <kbd>space</kbd> in a todo and move it with the arrow keys to
          reorder the list with the keyboard. To confirm the reordering, press{" "}
          <kbd>space</kbd> again.
        </Text>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5625rem;
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Main = styled.main`
  & > form {
    margin-top: 2.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.6875rem;
  letter-spacing: 0.35em;
  color: #fff;
  margin: 3.125rem 0 0 0;
`;

const Text = styled.p`
  font-size: 0.728125;
`;
