import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { memo } from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { RedesSociais } from "./RedesSociais";

function HeaderComponent() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navegation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      <Logo />

      <Flex align="center" ml="auto">
        <RedesSociais />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
export const Header = memo(HeaderComponent);
