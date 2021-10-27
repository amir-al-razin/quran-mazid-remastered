import React from "react";
import { Box, BoxProps, VStack } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionVStack = motion<BoxProps>(VStack);
