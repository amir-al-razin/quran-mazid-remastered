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
      bg="#7000FF"
      _hover={{ bg: "#6000DB" }}
    >
      {props.children}
    </ChakraButton>
  );
};

export default Button;
