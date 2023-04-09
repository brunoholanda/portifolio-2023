import Cabecalho from "components/Cabecalho/indes";
import Divisor from "components/Divisor";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

export default function CorpoDaPagina(){
    return (
        <>
            <Cabecalho />
            <Divisor />
            <Outlet />
            <Rodape />
        </>
    )
}