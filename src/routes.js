import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/scrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu/>


      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>


        {/* 
        Na rota “/”, a estrutura a ser renderizada é:, a estrutura que ele vai renderizar é o componente <PaginaPadrao>, com a parte de abertura, e a parte de fechamento também, e dentro dele vem a rota de início, de autofechamento. Então, na rota /, que é a rota index, vamos ter página padrão como se fosse pai direto do início.

        Na rota “/sobremim”, a estrutura a ser renderizada é:, <PaginaPadrao>, e vai ter como filha o componente <SobreMim>. Isso é uma forma mais interessante de visualizar o que está acontecendo, porém, estamos utilizando essa estrutura de rota pai e rotas filhas, que são justamente as rotas alinhadas.
        */}

        <Route path="posts/:id" element ={<Post />} />
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
