import usePlatform from "@/hooks/usePlatform";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";

const PlatformList = () => {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItemOption key={platform.id}>{platform.name}</MenuItemOption>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
