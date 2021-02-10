import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoAction } from "../../services/todos";
import TodoItem from "./components/TodoItem";

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoAction());
  }, []);

  return (
    <Box mt={5}>
      <Flex fontStyle={"italic"} justifyContent="center" alignItems="center">
        <Heading color={"#FFD300"}>To-do</Heading>
        <Text
          ml={3}
          mr={3}
          mt={2}
          fontSize="2xl"
          fontStyle="italic"
          fontWeight="bold"
          color={"#fff"}
        >
          List
        </Text>
      </Flex>
      {todoList.length > 0 ? (
        todoList.map((todo, index) => {
          return <TodoItem item={todo} key={index} />;
        })
      ) : (
        <Box mt={4} color="#fff">
          <Text textAlign="center">There is no to-do item...</Text>
        </Box>
      )}
    </Box>
  );
};
export default TodoList;
