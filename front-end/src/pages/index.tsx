import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HeaderHome } from "../components/HeaderHome";

/**
 * Pagina inicial do site
 * @author ArthurBernardoDev
 * @param SideBarDrawerProviderProps
 * @returns void
 */
export default function Home() {
  return (
    <>
      <HeaderHome />

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
            PetPass
          </Text>
          <Text
            fontSize="2.5rem"
            lineHeight="2.5rem"
            fontWeight="900"
            margin-top="2.5rem"
            color="whiteAplha.900"
          >
            O jeito mais fácil de manter a saúde do seu melhor amigo em dia.
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
            Sobre nós
          </Button>
        </Box>
        <Box marginRight="5">
          <Image
            id="imagem"
            src="/images/teste3.svg"
            width={1300}
            height={900}
          ></Image>
        </Box>
      </Flex>

      <Flex
        maxWidth="1120px"
        margin="0 auto"
        p="0 2rem"
        h="90vh"
        display="flex"
        alignItems="center"
        justify="space-between"
      >
        <Box marginRight="5">
          <Image id="imagem" src="/images/" width={1200} height={1000}></Image>
        </Box>
        <Box>
          <Text fontSize="1.5rem" fontWeight="bold" color="whiteAplha.900">
            Lorem lorem
          </Text>
          <Text
            fontSize="4.5rem"
            lineHeight="4.5rem"
            fontWeight="900"
            margin-top="2.5rem"
            color="whiteAplha.900"
          >
            Lorem Lorem Lorem Lorem.
          </Text>
          <Text fontSize="1.5rem" fontWeight="bold" color="whiteAplha.900">
            Lorem Lorem Lorem Lorem Lorem
          </Text>
          <Button
            type="button"
            mt="5"
            aling="center"
            w="60"
            fontSize="lg"
            color="black"
            _hover={{
              bg: "#000",
              color: "white",
            }}
          >
            Lorem
          </Button>
        </Box>
      </Flex>
    </>
  );
}
