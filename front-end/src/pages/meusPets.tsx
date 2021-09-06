import { Box, Flex, Slide, Button, Link, Table, Heading, Tr, Thead, Th, Tbody, Td, Text, useDisclosure } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import Image from 'next/image'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import React from 'react'

/**
 * Mostar os pets em tela após serem registrados
 * @author ArthurBernardoDev
 * @param void
 * @returns void
 */
export default function Home() {

    const { isOpen, onToggle } = useDisclosure()

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
                            <Button leftIcon={<MdBuild />} colorScheme="gray.300" w="100px" ml="6">
                                <Link href="/verPerfil">Ver Perfil</Link>
                            </Button>
                            <Button leftIcon={<MdBuild />} colorScheme="gray.300" w="100px" ml="6">
                                <Link href="/transferirPet">Transferir Perfil</Link>
                            </Button>
                            <Button leftIcon={<MdBuild />} colorScheme="gray.300" w="100px" ml="6" onClick={onToggle}>Excluir Perfil</Button>
                            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                                <Box
                                    p="40px"
                                    color="white"
                                    mt="4"
                                    bg="gray.800"
                                    rounded="md"
                                    shadow="md"
                                >
                                    Ao clicar nessa opção você está excluindo o perfil do seu pet. Essa ação não pode ser revertida<Text>Tem certeza que deseja excluir Luke?</Text> <Button mr="8" bg="gray.400">Aceitar</Button> <Button bg="gray.400">Recusar</Button>
                                </Box>
                            </Slide>
                        </Flex>

                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>Sexo</Th>

                                <Th>
                                    Idade
                                </Th>
                                <Th>
                                    Raça
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td>Luke</Td>
                                <Td>
                                    Macho
                                </Td>
                                <Td> 5 meses</Td>
                                <Td>Maltês</Td>

                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>

        </Box>

    )
}