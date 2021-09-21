import { HStack, Icon, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function RedesSociais() {
    return (
        <HStack
            spacing={["6", "8"]}
            mx={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"

        >
            <Link href="https://github.com/ArthurBernardoDev"><Icon as={AiFillGithub} fontSize="20" /></Link>
            <Link href="https://www.linkedin.com/in/arthur-bernardo-a636b3180/"><Icon as={AiFillLinkedin} fontSize="20" /></Link>
        </HStack>
    );
}