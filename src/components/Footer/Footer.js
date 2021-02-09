import { AiFillGithub } from "react-icons/ai";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => (
  <footer>
    <Box mt={5}>
      <Flex justifyContent="center" flexDirection="row" alignItems="center">
        <Text
          fontSize={"2xl"}
          paddingRight={2}
          textAlign="center"
          color={"#fff"}
        >
          Made by Tahsin Safa Elmalı
        </Text>
        <Text>
          <Link href="https://github.com/SafaElmali" isExternal>
            <AiFillGithub cursor={"pointer"} fill={"#FFD300"} size={"2.0em"} />
          </Link>
        </Text>
      </Flex>
    </Box>
  </footer>
);

export default Footer;
