import {
  Box,
  Flex,
  Table,
  Heading,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Image from "next/image";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../Header";

interface ViewProfileProps {
  nomeDoPet: string;
  sexo: string;
  idade: string;
  raça: string;
}

export function ViewProfile({
  nomeDoPet,
  sexo,
  idade,
  raça,
}: ViewProfileProps) {
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
                <Td>{nomeDoPet}</Td>
                <Td>{sexo}</Td>
                <Td>{idade}</Td>
                <Td>{raça}</Td>
              </Tr>
            </Tbody>
          </Table>

          <Heading size="lg" fontWeight="normal" color="gray.900">
            Vacinas
          </Heading>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Produto</Th>
                <Th>Data</Th>

                <Th>Dose</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>V8</Td>
                <Td>19/09/2019</Td>
                <Td>Primeira</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
