import {
  Box,
  Flex,
  Button,
  Link,
  Table,
  Heading,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import Image from "next/image";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import React, { useEffect, useState } from "react";

/**
 * Mostar os pets em tela após serem registrados
 * @author ArthurBernardoDev
 * @param void
 * @returns void
 */
export default function myPets() {
  const [pet, setPet] = useState([{}]);

  // o useEffect recebe 2 parametros, o 1° qual função eu quero executar, a 2° é quando algum que eu escolher mudar essa função executa dnv
  useEffect(() => {
    fetch("http://localhost:3000/api/") // Faz um fetch dos dados na api
      .then((response) => response.json()) // quando o fetch me der uma resposta(response) conversão para json
      .then((data) => setPet(data)); // depois da conversão, os dados são atribuidos a setPet, criado com useState
  }, []);
  console.log(pet);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.400" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" color="gray.900">
              Seus pets estão aqui!
            </Heading>
          </Flex>

          <Flex flex="1">
            <Flex>
              <Image
                src="/images/cachorro.svg"
                width="300"
                height="200"
              ></Image>
            </Flex>
            <Flex align="center" ml="20rem">
              <Button
                leftIcon={<MdBuild />}
                colorScheme="gray.300"
                w="100px"
                ml="2"
              >
                <Link href="/verPerfil">Ver Perfil</Link>
              </Button>
              <Button
                leftIcon={<MdBuild />}
                colorScheme="gray.300"
                w="100px"
                ml="2"
              >
                Relatório
              </Button>
              <Button
                leftIcon={<MdBuild />}
                colorScheme="gray.300"
                w="100px"
                ml="2"
              >
                Excluir Dono
              </Button>
            </Flex>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Sexo</Th>

                <Th>Idade</Th>
                <Th>Raça</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>Luke</Td>
                <Td>Macho</Td>
                <Td> 5 meses</Td>
                <Td>Maltês</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
