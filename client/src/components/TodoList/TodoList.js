import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoAction } from "../../features/todo/todoSlice";
import TodoItem from "./components/TodoItem";

// const todoList = [
//   {
//     id: 0,
//     content: "Getir",
//     checked: false,
//   },
//   {
//     id: 0,
//     content: "Getir Yemek",
//     checked: false,
//   },
//   {
//     id: 0,
//     content: "Getir Büyük",
//     checked: true,
//   },
//   {
//     id: 0,
//     content: "Getir Su",
//     checked: false,
//   },
//   {
//     id: 0,
//     content: "Getir Global",
//     checked: true,
//   },
// ];

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todoList);

  useEffect(() => {
    dispatch(fetchTodoAction());
  }, [dispatch]);

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
      {todoList.length > 0
        ? todoList.map((todo, index) => {
            return <TodoItem todo={todo} key={index} />;
          })
        : null}
    </Box>
  );
};
export default TodoList;
