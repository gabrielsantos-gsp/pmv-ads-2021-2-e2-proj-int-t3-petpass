import { Button, Flex, Link, Text } from "@chakra-ui/react";

export function HeaderHome() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        // background="#47a9c4"
        >
            <Text
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                PetPass
            </Text>

            <Flex
                align="center"
                ml="auto">
                <Button type="button"
                    ml="20"
                    fontSize="lg"
                    color="black"
                    _hover={{
                        bg: "#0086ac"
                    }}
                >
                    <Link href="/login">Login</Link>
                </Button>
                <Button type="button"
                    ml="4"
                    fontSize="lg"
                    color="black"
                    _hover={{
                        bg: "#0086ac"
                    }}
                >
                    <Link href="/registrar">Registrar</Link>
                </Button>
            </Flex>
        </Flex>


    );
}