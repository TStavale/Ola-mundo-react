import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";


export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />  {/*  Possibilita renderizar conteudo da rota aqui */}
        </main>
    )
}