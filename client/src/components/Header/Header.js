import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Checkbox,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../features/todo/todoSlice";
import "./Header.css";

const Header = () => {
  const [todo, setTodo] = useState({ content: "", isChecked: false });
  const userInput = useRef();
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodoAction(todo));
    setTodo({ content: "", isChecked: false });
  };

  const handleUserInput = () => {
    setTodo((prevTodo) => {
      return { ...prevTodo, content: userInput.current.value };
    });
  };

  return (
    <header>
      <Flex
        mt={5}
        fontStyle="italic"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color={"#FFD300"}>Getir</Heading>
        <Text
          ml={3}
          mr={3}
          mt={2}
          fontSize="2xl"
          fontWeight="bold"
          color={"#fff"}
        >
          Todo
        </Text>
      </Flex>
      <Box mt={5} padding={5} borderRadius={15} backgroundColor="#fff">
        <Box>
          <Heading fontSize={"xl"}>Enter a to-do</Heading>
          <Box>
            <Flex className="header__form">
              <Box flexGrow={8}>
                <Input
                  placeholder="enter a to-do..."
                  value={todo.content}
                  ref={userInput}
                  onChange={handleUserInput}
                />
              </Box>
              <Divider mt={3} mb={3} />
              <Flex alignItems="center" flexGrow={2} justifyContent="flex-end">
                <Checkbox
                  colorScheme="purple"
                  mr={3}
                  onChange={(e) =>
                    setTodo((prevTodo) => {
                      return { ...prevTodo, isChecked: !todo.isChecked };
                    })
                  }
                  isChecked={todo.isChecked}
                >
                  Completed ?{" "}
                </Checkbox>
                <Button
                  onClick={handleAddTodo}
                  backgroundColor="#FFD300"
                  color="#5E3EBC"
                >
                  Save
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
