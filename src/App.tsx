import { FormEvent, useState } from "react";
import styled from "styled-components";
import { TodoList } from "components/TodoList";
import { NewTodoTextInput } from "components/NewTodoTextInput";
import { useTodoList } from "hooks/useTodoList";
import mobileBackground from "img/bg-mobile-light.jpg";

export const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const { todoList, addTodo, toggleTodo, deleteTodo, moveTodo } = useTodoList();

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
          todos={todoList}
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
  background-size: 23.4375rem 12.5rem;
`;

const Main = styled.main`
  & > form {
    margin-top: 2rem;
  }

  & > ${TodoList} {
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.6875rem;
  letter-spacing: 0.35em;
  color: #fff;
  margin: 3rem 0 0 0;
`;

const Text = styled.p`
  font-size: 0.728125;
`;
