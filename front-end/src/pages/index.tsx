import { HeaderHome } from "../components/HeaderHome";
import { HomePage } from "../components/HomePage";

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

      <HomePage
        titulo="PetPass"
        textoPrincipal="O jeito mais fácil de manter a saúde do seu melhor amigo em dia."
        tituloButton="Sobre nós"
        imagem="imgTelaPrincipal"
        src="/images/teste3.svg"
      />
      <HomePage
        titulo="Lorem"
        textoPrincipal="Lorem lorem loremLorem lorem loremLorem lorem lorem"
        tituloButton="Cadastrar"
        imagem="imgTelaPrincipal"
        src="/images/teste3.svg"
      />
    </>
  );
}
