import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { GetStaticProps } from "next";
import { getTafsirs } from "../../api";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { apiUrl } from "../../utils/api";
import { useSettingsStore } from "../../global-stores/useStore";

const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { data, error } = useSWR(`${apiUrl}/resources/tafsirs`, fetcher);
  const setTafsirId = useSettingsStore((state) => state.setTafsirState);
  const t = useSettingsStore((state) => state.tafsir);

  console.log(t);
  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<SettingsIcon />}
        borderRadius="3xl"
        h="8"
        minW="8"
        aria-label="settings"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>

          <DrawerBody>
            <Select
              variant="filled"
              onChange={({ target: { value } }) => {
                setTafsirId(value);
              }}
              //   placeholder="Filled"
            >
              {data &&
                data.tafsirs.map(({ id, name }) => (
                  <option value={id}>{name}</option>
                ))}
            </Select>
          </DrawerBody>

          <DrawerFooter justify="center">
            <Button variant="solid" mr={3} onClick={onClose}>
              Reset Settings
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Settings;
