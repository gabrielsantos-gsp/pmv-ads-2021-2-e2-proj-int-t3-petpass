
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createContext, ReactNode, useContext } from "react";


interface SideBarDrawerProviderProps {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn


const sideBarDrawerContext = createContext({} as SideBarDrawerContextData);
/**
 * Contexto da Sidebar utilizando ChakraUI
 * @author ArthurBernardoDev
 * @param SideBarDrawerProviderProps 
 * @returns void
 */
export function SidebarDrawerProvider({ children }: SideBarDrawerProviderProps) {


    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <sideBarDrawerContext.Provider value={disclosure}>
            {children}
        </sideBarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(sideBarDrawerContext)