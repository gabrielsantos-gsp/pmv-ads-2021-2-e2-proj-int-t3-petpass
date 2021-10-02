import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./HomePage.module.scss";

interface HomePageProps {
  titulo: string;
  textoPrincipal: string;
  tituloButton?: string;
  imagem: string;
  src: string;
}

export function HomePage({
  titulo,
  textoPrincipal,
  tituloButton,
  imagem,
  src,
}: HomePageProps) {
  return (
    <div className={styles.contentHome}>
      <Box>
        <Text fontSize="3.5rem" fontWeight="bold" color="gray.800">
          {titulo}
        </Text>
        <Text
          fontSize="2.5rem"
          lineHeight="2.5rem"
          fontWeight="900"
          margin-top="2.5rem"
          color="whiteAplha.900"
        >
          {textoPrincipal}
        </Text>
        <Button
          type="button"
          mt="5"
          aling="center"
          w="60"
          fontSize="lg"
          color="black"
          _hover={{
            bg: "gray.900",
            color: "white",
          }}
        >
          {tituloButton}
        </Button>
      </Box>
      <Box marginRight="5">
        <Image id={imagem} src={src} width={1300} height={900}></Image>
      </Box>
    </div>
  );
}
