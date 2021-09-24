import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function vacinaRegistration() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.400" borderRadius={8} pg="4">
            <Text fontSize="2xl" mb="4" color="gray.800">
              LOREM LOREM LOREM LOREM
            </Text>

            <FormControl id="">
              <FormLabel>Vacinas</FormLabel>
              <Select placeholder="Select vacina">
                <option>V8 ou v10</option>
                <option>gripe canina</option>
                <option>gripe canina</option>
                <option>gripe canina</option>
                <option>gripe canina</option>
                <option>gripe canina</option>
                <option>gripe canina</option>
                <option>gripe canina</option>
              </Select>
            </FormControl>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
