import Cabecalho from "components/Cabecalho/indes";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

export default function CorpoDaPagina(){
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}