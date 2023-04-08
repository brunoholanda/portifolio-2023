import ScrollToTop from "components/ScrollToTop";
import CorpoDaPagina from "pages/CorpoDaPagina";
import Inicio from "pages/Inicio";
import PaginaDeErro from "pages/PaginaDeErro";
import ProjetosPage from "pages/ProjetosPage";
import Sobre from "pages/Sobre";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoDaPagina />}>
                    <Route index element={<Inicio />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/projetos" element={<ProjetosPage />} />
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;