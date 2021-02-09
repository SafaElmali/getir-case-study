import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <Container>
      <Flex flexDirection="column">
        <Header />
        <TodoList />
      </Flex>
      <Footer />
    </Container>
  );
};

export default App;
