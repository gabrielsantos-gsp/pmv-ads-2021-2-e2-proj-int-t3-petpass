import { Box, Flex, SimpleGrid, Button, Text, FormControl, FormLabel, Input, Stack, Slide, useDisclosure } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import React from 'react'

/**
 * Transferir pet para outro usuário
 * @author ArthurBernardoDev
 * @param void
 * @returns void
 */
export default function transferirPet() {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p="8"
                        bg="gray.400"
                        borderRadius={8}
                        pg="4"
                    >
                        <Text
                            fontSize="2xl" mb="4" color="gray.800">
                            Transfira seu pet para outra pessoa!
                        </Text>

                        {/* Nome do pet */}
                        <FormControl id="nomePet" isRequired mb="4">
                            <FormLabel>Nome do novo dono do pet!</FormLabel>
                            <Input placeholder="First name" />
                        </FormControl>
                        {/* Raça do pet */}
                        <FormControl id="RaçaPet" isRequired mb="4">
                            <FormLabel>Email do novo dono do pet!</FormLabel>
                            <Input placeholder="Raça do pet" />
                        </FormControl>


                        <Stack direction="row" spacing={4}>
                            <Button onClick={onToggle}>Solicitar</Button>
                            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                                <Box
                                    p="40px"
                                    color="white"
                                    mt="4"
                                    bg="gray.800"
                                    rounded="md"
                                    shadow="md"
                                >
                                    Ao clicar nessa opção você está transferindo um pet para outra pessoas, confira sempre o nome e o email da pessoa que deseja enviar. <Text>Tem certeza que quer enviar seu pet para Gabriel Soares?</Text> <Button bg="gray.400" >Aceitar</Button>
                                </Box>
                            </Slide>
                        </Stack>


                    </Box>
                </SimpleGrid>

            </Flex>

        </Box >

    )
}