import { Box, Flex, SimpleGrid, Text, Button, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Tfoot } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import Image from 'next/image'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import React from 'react'


/**
 * Mostar os pets em tela após serem registrados
 * @author ArthurBernardoDev
 * @param SideBarDrawerProviderProps 
 * @returns void
 */
export default function Home() {
    return (

        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />

                <SimpleGrid direction="column" flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p="8"
                        bg="gray.400"
                        borderRadius={8}
                        pg="4"
                        direction="row"
                        flex="1"
                    >
                        <Text
                            fontSize="2xl" mb="4" color="gray.800">
                            Seus pets estão aqui! 😉
                        </Text>

                        <SimpleGrid minChildWidth="250px" maxWidth="350px" spacing={["6", "8"]} w="100%">
                            <Image
                                id="cachorro"
                                src="/images/cachorro.svg"
                                width="300"
                                height="200">
                            </Image>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>Nome</Th>
                                        <Th >Sexo</Th>
                                        {/* <Th>Idade</Th>
                                        <Th>Raça</Th> */}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Luke</Td>
                                        <Td>Macho</Td>
                                        {/* <Td>5 Meses</Td>
                                        <Td>Maltês</Td> */}
                                    </Tr>
                                </Tbody>
                            </Table>
                            <Table variant="simple">
                                <TableCaption>Informações sobre seu pet!</TableCaption>
                                <Thead>
                                    <Tr>

                                        <Th>Idade</Th>
                                        <Th>Raça</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>5 Meses</Td>
                                        <Td>Maltês</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </SimpleGrid>

                        <Flex mt="8" direction="column" alignItems="flex-end" justifyContent="center">
                            <Button leftIcon={<MdBuild />} colorScheme="gray.300" variant="solid" w="100px">
                                Ver Perfil
                            </Button>
                            <Button leftIcon={<MdBuild />} colorScheme="gray.300" variant="solid" w="100px">
                                Relatório
                            </Button>
                            <Button leftIcon={<MdBuild />} colorScheme="gray.300" variant="solid" w="100px">
                                Alterar Dono
                            </Button>
                            <Button leftIcon={<MdBuild />} colorScheme="gray.300" variant="solid" w="100px">
                                Excluir Dono
                            </Button>
                        </Flex>
                    </Box>
                </SimpleGrid>

            </Flex >
        </Flex >

    )
}