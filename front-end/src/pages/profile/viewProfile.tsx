import { ViewProfile } from "../../components/ViewProfile";

/**
 * Mostar os pets em tela após serem registrados
 * @author ArthurBernardoDev
 * @param void
 * @returns void
 */
export default function Home() {
  return (
    <ViewProfile nomeDoPet="Luke" sexo="Macho" idade="5Meses" raça="Maltês" />
  );
}
