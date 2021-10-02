import { Button, Text } from "@chakra-ui/react";
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
        <Link href="/">PetPass</Link>
      </Text>

      <div className={styles.divButtons}>
        <Button className={styles.transitionButton}>
          <Link href="/account/login">Login</Link>
        </Button>
        <Button className={styles.transitionButton}>
          <Link href="/account/register">Registrar</Link>
        </Button>
      </div>
    </header>
  );
}
