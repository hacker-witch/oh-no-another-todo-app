import { FormEvent, useState } from "react";
import styled from "styled-components";
import { Container } from "components/Container";
import { Spinner } from "components/Spinner";
import { TodoList } from "components/TodoList";
import { NewTodoTextInput } from "components/NewTodoTextInput";
import { ErrorAlertDialog } from "components/ErrorAlertDialog";
import { useTodoList } from "hooks/useTodoList";
import mobileBackground from "img/bg-mobile-light.jpg";

export const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const {
    todoList,
    error,
    isLoading,
    addTodo,
    toggleTodo,
    deleteTodo,
    moveTodo,
    clearError,
  } = useTodoList();

  const handleNewTodoTextChange = (e: FormEvent<HTMLInputElement>) => {
    setNewTodoText(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText("");
  };

  return (
    <Wrapper>
      {error ? <ErrorAlertDialog message={error} close={clearError} /> : null}

      <Header>
        <Title>TODO</Title> {isLoading ? <Spinner /> : null}
      </Header>

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
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: 23.4375rem 12.5rem;
`;

const Header = styled.header`
  margin-top: 3rem;
  display: flex;
  align-items: center;

  ${Spinner} {
    position: relative;
    top: -0.3125rem;
    margin-left: 0.5rem;
  }
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
  margin: 0;
  font-size: 1.6875rem;
  letter-spacing: 0.35em;
  color: #fff;
`;

const Text = styled.p`
  font-size: 0.728125rem;
  text-align: center;
`;
