import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { FiBook } from "react-icons/fi";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="8" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
      </NavSection>

      <NavSection title="PETS">
        <NavLink icon={RiContactsLine} href="/cadastrarPet">
          Cadastrar pet
        </NavLink>
        <NavLink icon={FiBook} href="/meusPets">
          Meus pets
        </NavLink>
      </NavSection>

      <NavSection title="VACINAS">
        <NavLink icon={FiBook} href="/certificados">
          Minhas Vacinas
        </NavLink>
      </NavSection>
    </Stack>
  );
}
