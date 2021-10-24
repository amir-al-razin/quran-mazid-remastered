import { Button as ChakraButton } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

const Button = (props) => {
  return (
    <ChakraButton
      color="white"
      textTransform="uppercase"
      fontWeight="bold"
      rightIcon={<ChevronRightIcon />}
      bg="green.500"
      _hover={{ bg: "green.600" }}
    >
      {props.children}
    </ChakraButton>
  );
};

export default Button;
