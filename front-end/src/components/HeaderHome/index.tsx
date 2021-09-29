import { Button, Flex, Text } from "@chakra-ui/react";
import styles from "./HeaderHome.module.scss";
import { Link } from "../Link/index";

export function HeaderHome() {
  return (
    <header className={styles.header}>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        PetPass
      </Text>

      <Flex align="center" ml="auto">
        <Button
          type="button"
          ml="20"
          fontSize="lg"
          color="black"
          _hover={{
            bg: "#0086ac",
          }}
        >
          <Link href="/account/login">Login</Link>
        </Button>
        <Button
          type="button"
          ml="4"
          fontSize="lg"
          color="black"
          _hover={{
            bg: "#0086ac",
          }}
        >
          <Link href="/account/register">Registrar</Link>
        </Button>
      </Flex>
    </header>
  );
}
