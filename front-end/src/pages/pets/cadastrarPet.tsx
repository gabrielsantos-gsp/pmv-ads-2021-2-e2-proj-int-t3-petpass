import { Box, Flex, SimpleGrid, Text, FormControl, FormLabel, RadioGroup, Button, Stack, HStack, Radio, FormHelperText, Input, NumberInput, NumberInputField, NumberDecrementStepper, NumberInputStepper, NumberIncrementStepper } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'


/**
 * Registrar um novo pet
 * @author ArthurBernardoDev
 * @param void 
 * @returns void
 */
export default function CadastrarPet() {
    return (

        <Flex direction="column" h="100vh">
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
                            Cadastre seu pet aqui! 😉
                        </Text>

                        {/* Nome do pet */}
                        <FormControl id="nomePet" isRequired mb="4">
                            <FormLabel>Nome do Pet</FormLabel>
                            <Input placeholder="First name" />
                        </FormControl>
                        {/* Raça do pet */}
                        <FormControl id="RaçaPet" isRequired mb="4">
                            <FormLabel>Raça do pet</FormLabel>
                            <Input placeholder="Raça do pet" />
                        </FormControl>

                        {/*Idade do Pet  */}
                        <FormControl id="amount" isRequired mb="4">
                            <FormLabel>Idade do pet</FormLabel>
                            <NumberInput max={50} min={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        {/* Escolhendo Qual pet ele tem */}
                        <FormControl as="fieldset" isRequired mb="4">
                            <FormLabel as="legend">Qual pet você tem?</FormLabel>
                            <RadioGroup defaultValue="pets">
                                <HStack spacing="24px">
                                    <Radio value="Gato">Gato</Radio>
                                    <Radio value="Cachorro">Cachorro</Radio>
                                </HStack>
                            </RadioGroup>
                            <FormHelperText color="white">Escolha somente uma opção</FormHelperText>
                        </FormControl>

                        <FormControl as="fieldset" isRequired mb="4">
                            <FormLabel as="legend">Qual o gênero do seu pet?</FormLabel>
                            <RadioGroup defaultValue="pets">
                                <HStack spacing="24px">
                                    <Radio value="Gato">Macho</Radio>
                                    <Radio value="Cachorro">Fêmea</Radio>
                                </HStack>
                            </RadioGroup>
                            <FormHelperText color="white">Escolha somente uma opção</FormHelperText>
                        </FormControl>

                        <Stack direction="row" spacing={4}>
                            <Button
                                isLoading
                                loadingText="Cadastrando"
                                colorScheme="white"
                                variant="outline"
                            >
                                Submit
                            </Button>
                        </Stack>


                    </Box>
                </SimpleGrid>

            </Flex>
        </Flex>

    )
}