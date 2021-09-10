import { HeaderHome } from "../components/HeaderHome";
import { TelaPrincipalHome } from "../components/TelaPrincipalHome";

/**
 * Pagina inicial do site 
 * @author ArthurBernardoDev
 * @param SideBarDrawerProviderProps 
 * @returns void
 */
export default function Home() {
  return (
    <>
      <HeaderHome />

      <TelaPrincipalHome
        titulo="PetPass"
        textoPrincipal="O jeito mais fácil de manter a saúde do seu melhor amigo em dia."
        tituloButton="Sobre nós"
        imagem="imgTelaPrincipal"
        src="/images/teste3.svg"
      />
      <TelaPrincipalHome
        titulo="Lorem"
        textoPrincipal="Lorem lorem loremLorem lorem loremLorem lorem lorem"
        tituloButton="Cadastrar"
        imagem="imgTelaPrincipal"
        src="/images/teste3.svg"
      />
    </>
  )
}
