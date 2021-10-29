import React from "react";
import {
  Input,
  HStack,
  InputGroup,
  InputLeftElement,
  IconButton,
  Icon,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import SidebarContent from "./sidebar/Sidebar";

import Link from "next/link";
import Settings from "./settings";
interface Props {}

const Navbar = (props: Props) => {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  return (
    <React.Fragment>
      <HStack
        align="center"
        p="2.5"
        spacing={4}
        bg={useColorModeValue("white", "#242832")}
        position="fixed"
        w="full"
        pl={{ base: "2", xl: "20" }}
        zIndex="1"
      >
        {/* <Link href="/">
        <Box bg="green.500" cursor="pointer" p="2" borderRadius="full">
          <Logo fontSize="2xl" />
        </Box>
      </Link> */}
        <IconButton
          aria-label="Menu"
          display={{ base: "inline-flex", xl: "none" }}
          onClick={sidebar.onOpen}
          icon={<HamburgerIcon />}
          size="sm"
          borderRadius="full"
        />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon fontSize="xl" color="green.500" />}
          />
          <Input
            border="none"
            outline="none"
            boxShadow="none"
            _focus={{
              boxShadow: "none",
            }}
            type="tel"
            placeholder="Search here for surah, ayah"
          />
        </InputGroup>
        <Settings />
        <Toggle />
      </HStack>
      {/* Sidebar */}

      <SidebarContent display={{ base: "none", xl: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent maxW="fit-content" bg="green.500">
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      size="lg"
      aria-label="Toggle theme"
      borderRadius="3xl"
      h="8"
      minW="8"
      //   padding="2"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={() => toggleColorMode()}
    />
  );
};

// function Logo(props) {
//   return (
//     <Icon
//       stroke="currentColor"
//       fill="currentColor"
//       strokeWidth={0}
//       color={props.isFavourite ? "green.500" : "gray.400"}
//       textShadow="lg"
//       viewBox="0 0 79 55"
//       {...props}
//     >
//       <g id="Group">
//         <path
//           id="Vector"
//           d="M78.1516 25.4641L63.1329 0.833287C62.8799 0.418769 62.3661 0.245152 61.9145 0.421572L60.1193 1.12105L59.8672 0.70753C59.4949 0.0969669 58.7382 -0.158953 58.0719 0.100972L39.1491 7.47379L20.2262 0.101172C19.5594 -0.158753 18.8032 0.097167 18.431 0.70773L18.1788 1.12125L16.3836 0.421773C15.9316 0.245552 15.4178 0.418969 15.1653 0.833487L0.146493 25.4643C-0.00729886 25.7164 -0.0419422 26.0234 0.051775 26.3033C0.145492 26.5833 0.357958 26.8076 0.632301 26.9163L22.0523 35.4057L19.2606 53.3662C19.2157 53.6551 19.2994 53.9493 19.4897 54.1714C19.6799 54.3934 19.9577 54.5212 20.25 54.5212H22.7504C22.9528 54.5212 23.1503 54.4599 23.3173 54.3454L39.1491 43.4706L54.9809 54.3454C55.1477 54.4599 55.3453 54.5212 55.5478 54.5212H58.0481C58.3405 54.5212 58.6184 54.3934 58.8084 54.1714C58.9987 53.9493 59.0824 53.6551 59.0375 53.3662L56.2458 35.4057L77.6658 26.9163C77.9404 26.8076 78.1526 26.5833 78.2463 26.3033C78.3401 26.0232 78.3054 25.7162 78.1516 25.4641ZM39.9501 33.0131V20.1971C39.9501 19.7547 39.5914 19.3961 39.1491 19.3961C38.7067 19.3961 38.3481 19.7547 38.3481 20.1971V33.0131L9.22585 21.4713L20.3067 3.29897L38.6134 10.4317C38.958 10.5659 39.3401 10.5659 39.6847 10.4317L57.9914 3.29897L69.0721 21.4713L39.9501 33.0131Z"
//           fill="white"
//         />
//         <path
//           id="Vector_2"
//           d="M56.9269 9.52417C56.7661 9.11205 56.3017 8.9076 55.8896 9.0688L44.0748 13.6746C43.6625 13.8354 43.4586 14.2997 43.6194 14.7119C43.743 15.0285 44.0454 15.2221 44.366 15.2221C44.4627 15.2221 44.5612 15.2045 44.6567 15.1672L56.4715 10.5615C56.8836 10.4007 57.0875 9.93628 56.9269 9.52417Z"
//           fill="white"
//         />
//         <path
//           id="Vector_3"
//           d="M46.0231 18.0768C45.6107 18.2376 45.4069 18.702 45.5677 19.1141C45.6912 19.4307 45.9936 19.6244 46.3142 19.6244C46.4109 19.6244 46.5095 19.6067 46.605 19.5695L58.4197 14.9637C58.8321 14.8029 59.0359 14.3385 58.8751 13.9264C58.7143 13.5143 58.2499 13.3101 57.8378 13.4711L46.0231 18.0768Z"
//           fill="white"
//         />
//         <path
//           id="Vector_4"
//           d="M47.6721 23.9233C47.7956 24.2399 48.098 24.4335 48.4186 24.4335C48.5153 24.4335 48.6138 24.4159 48.7094 24.3787L60.5241 19.7729C60.9365 19.6121 61.1403 19.1477 60.9795 18.7356C60.8187 18.3233 60.3539 18.1193 59.9422 18.2801L48.1274 22.8858C47.7153 23.0468 47.5115 23.511 47.6721 23.9233Z"
//           fill="white"
//         />
//         <path
//           id="Vector_5"
//           d="M34.2234 13.6746L22.4086 9.0688C21.9971 8.90819 21.5323 9.11205 21.3713 9.52416C21.2107 9.93628 21.4145 10.4007 21.8267 10.5615L33.6414 15.1672C33.7369 15.2045 33.8353 15.2221 33.9322 15.2221C34.2526 15.2221 34.5552 15.0284 34.6787 14.7119C34.8395 14.2995 34.6357 13.8354 34.2234 13.6746Z"
//           fill="white"
//         />
//         <path
//           id="Vector_6"
//           d="M32.2751 18.0767L20.4603 13.471C20.0486 13.3102 19.5838 13.5142 19.423 13.9263C19.2624 14.3385 19.4663 14.8028 19.8784 14.9636L31.6932 19.5694C31.7887 19.6066 31.887 19.6243 31.9839 19.6243C32.3043 19.6243 32.6069 19.4306 32.7305 19.114C32.8911 18.7019 32.6872 18.2375 32.2751 18.0767Z"
//           fill="white"
//         />
//         <path
//           id="Vector_7"
//           d="M30.1706 22.8862L18.3558 18.2804C17.9441 18.12 17.4794 18.3235 17.3186 18.736C17.158 19.1481 17.3618 19.6125 17.7739 19.7733L29.5887 24.379C29.6842 24.4163 29.7825 24.4339 29.8795 24.4339C30.1999 24.4339 30.5024 24.2403 30.626 23.9237C30.7866 23.5111 30.5827 23.047 30.1706 22.8862Z"
//           fill="white"
//         />
//       </g>
//     </Icon>
//   );
// }
