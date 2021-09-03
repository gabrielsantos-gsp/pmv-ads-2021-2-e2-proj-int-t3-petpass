import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from 'react'

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <Box>
            <Text fw="bold" color="gray.100" fontSize="small">{title}</Text>
            <Stack spacing="12" align="flex-start" mt="4">
                {children}
            </Stack>
        </Box>
    );
}