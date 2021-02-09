import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <Container>
      <Flex flexDirection="column">
        <Header />
        <TodoList />
      </Flex>
    </Container>
  );
};

export default App;
