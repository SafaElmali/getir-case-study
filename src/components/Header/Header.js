import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Box
        position="relative"
        top="50px"
        maxWidth="80%"
        margin="auto"
        padding={5}
        borderRadius={15}
        backgroundColor="#fff"
      >
        <Box>
          <Heading fontSize={"xl"}>Enter a to-do</Heading>
          <Box>
            <Flex className="header__form">
              <Box flexGrow={8}>
                <Input placeholder="enter a to-do..." />
              </Box>
              <Divider mt={3} mb={3} />
              <Flex alignItems="center" flexGrow={2} justifyContent="flex-end">
                <Checkbox mr={3} defaultIsChecked>
                  Completed ?{" "}
                </Checkbox>
                <Button backgroundColor="#FFD300" color="#5E3EBC">
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
