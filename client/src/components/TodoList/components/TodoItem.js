import React, { useRef, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Checkbox, Input } from "@chakra-ui/react";
import { BsFillTrashFill, BsPencilSquare, BsCheckBox } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoAction, editTodoAction } from "../../../services/todos";


const TodoItem = ({ item }) => {
  const [todo, setTodo] = useState(item);
  const [isEdit, setIsEdit] = useState(false);
  const editInput = useRef();
  const dispatch = useDispatch();

  const handleTodoInput = () => {
    setTodo((prevTodo) => {
      return {
        ...prevTodo,
        content: editInput.current.value,
      };
    });
  };

  const handleUpdateTodo = () => {
    dispatch(editTodoAction(todo));
    setIsEdit(false);
  };

  const handleTodoDelete = () => {
    dispatch(deleteTodoAction(todo.id));
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
                isChecked={todo.isChecked}
                size="lg"
                icon={<CheckIcon />}
                colorScheme="purple"
                mr={3}
                onChange={() => {
                  dispatch(
                    editTodoAction({
                      ...todo,
                      isChecked: !todo.isChecked,
                    })
                  );
                  setTodo((prevTodo) => {
                    return {
                      ...prevTodo,
                      isChecked: !todo.isChecked,
                    };
                  });
                }}
              />
              <Text
                cursor="pointer"
                onClick={() => {
                  dispatch(
                    editTodoAction({
                      ...todo,
                      isChecked: !todo.isChecked,
                    })
                  );
                  setTodo((prevTodo) => {
                    return {
                      ...prevTodo,
                      isChecked: !todo.isChecked,
                    };
                  });
                }}
                className={todo.isChecked ? "todo__text--checked" : null}
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
              value={todo.content}
              ref={editInput}
              onChange={handleTodoInput}
            />
            {}
            <BsCheckBox
              cursor="pointer"
              fill={"green"}
              size={"2em"}
              style={{ marginLeft: 15 }}
              onClick={handleUpdateTodo}
            />
            <MdCancel
              cursor="pointer"
              fill={"gray"}
              size={"2em"}
              style={{ marginLeft: 15 }}
              onClick={() => setIsEdit(!isEdit)}
            />
          </Flex>
        )}
        <Flex
          flexDirection="row"
          alignItems="center"
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
          <BsFillTrashFill
            fill={"#e53e3e"}
            size={"1.5em"}
            onClick={handleTodoDelete}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoItem;
