import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

/**
 * Dashboard do site com acesso as demais telas
 * @author ArthurBernardoDev
 * @param void 
 * @returns void
 */
export default function Home() {
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
                            VACINAS V8 E V10
                        </Text>
                        <Text
                            fontSize="2xl" mb="4" color="gray.800">
                            Existem 4 tipos de Leptospirose, sendo assim existe um antígeno específico para cada um dos tipos. Ambas as vacinas protegem o pet contra 7 doenças, entretanto a V8 protege contra a Leptospira Canicola e a Leptospira Icterohaemorrhagiae, já a V10 protege contra os mesmos tipos da V8, mais os antígenos para Leptospira Grippotyphosa e Leptospira Pomona.

                            V8 (Vacina Contra Cinomose, Adenovírus Tipo 2, Coronavírus, Parainfluenza, Parvovirose, Leptospira icterohaemorrhagiae e Leptospira canicola).

                            V10 (Vacina contra Cinomose, Adenovírus Tipo 2, Parainfluenza, Parvovírus, Coronavírus e Leptospira canicola-grippotyphosa- icterohaemorrhagiae-pomona).Na primeira vacinação, devem ser administradas 3 doses com 3 semanas de intervalo entre cada uma delas, para que a proteção seja completa.
                        </Text>

                    </Box>
                </SimpleGrid>

            </Flex>
        </Flex>

    )
}