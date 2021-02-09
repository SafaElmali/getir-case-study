import React, { useRef, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Checkbox, Input } from "@chakra-ui/react";
import { BsFillTrashFill, BsPencilSquare, BsCheckBox } from "react-icons/bs";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(todo.content);
  const editInput = useRef();

  /* Get current input value from user */
  const handleTodoEdit = () => {
    setInputValue(editInput.current.value);
  };

  return (
    <Box marginTop="20px" padding={5} borderRadius={15} backgroundColor="#fff">
      <Flex
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        {!isEdit ? (
          <>
            <Flex flexGrow={1}>
              <Checkbox
                isChecked={isChecked}
                size="lg"
                icon={<CheckIcon />}
                colorScheme="purple"
                mr={3}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <Text
                cursor="pointer"
                onClick={() => setIsChecked(!isChecked)}
                className={isChecked ? "todo__text--checked" : null}
              >
                {todo.content}
              </Text>
            </Flex>
          </>
        ) : (
          <Flex alignItems="center" flexGrow={1}>
            <Input
              type="text"
              placeholder="edit to-do..."
              value={inputValue}
              ref={editInput}
              onChange={handleTodoEdit}
            />
            {}
            <BsCheckBox
              fill={"green"}
              size={"2em"}
              style={{ marginLeft: 15 }}
              onClick={() => setIsEdit(!isEdit)}
            />
          </Flex>
        )}
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          ml={4}
          className="todo__action-container"
          flexGrow={0.2}
          justifyContent="flex-end"
        >
          {!isEdit ? (
            <BsPencilSquare
              fill={"#3182ce"}
              size={"1.5em"}
              style={{ marginRight: 15 }}
              onClick={() => setIsEdit(!isEdit)}
            />
          ) : null}
          <BsFillTrashFill fill={"#e53e3e"} size={"1.5em"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoItem;
