import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

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
    <Flex
      maxWidth="1120px"
      margin="0 auto"
      p="0 2rem"
      h="90vh"
      display="flex"
      alignItems="center"
      justify="space-between"
    >
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
    </Flex>
  );
}
