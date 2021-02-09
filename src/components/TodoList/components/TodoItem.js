import React, { useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Checkbox } from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  return (
    <Box marginTop="20px" padding={5} borderRadius={15} backgroundColor="#fff">
      <Flex
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Flex>
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
        <Box ml={4} className="trash__container">
          <BsFillTrashFill fill={"#e01010"} size={"1.5em"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default TodoItem;
