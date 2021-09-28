import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { GiSittingDog } from "react-icons/gi";
import { FaSyringe } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="8" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/profile">
          Dashboard
        </NavLink>
      </NavSection>

      <NavSection title="PETS">
        <NavLink icon={RiContactsLine} href="cadastrarPet">
          Cadastrar pet
        </NavLink>
        <NavLink icon={GiSittingDog} href="/profile/myPets">
          Meus pets
        </NavLink>
      </NavSection>

      <NavSection title="VACINAS">
        <NavLink icon={RiContactsLine} href="/profile/vacinaRegistration">
          Cadastrar Vacinas
        </NavLink>
        <NavLink icon={FaSyringe} href="/#">
          Minhas Vacinas
        </NavLink>
        <NavLink icon={FiBook} href="/vacinas/informacoes">
          Informações
        </NavLink>
        <NavLink icon={FiBook} href="/vacinas/informacoes">
          Gerar Relatório
        </NavLink>
      </NavSection>
    </Stack>
  );
}
