import { HStack, Icon, Link } from "@chakra-ui/react";
import { IoIosNotifications } from "react-icons/io";

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
            <Link href="#"><Icon as={IoIosNotifications} fontSize="25" /></Link>

        </HStack>
    );
}