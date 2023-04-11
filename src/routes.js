import ScrollToTop from "components/ScrollToTop";
import Contato from "pages/Contato";
import CorpoDaPagina from "pages/CorpoDaPagina";
import Inicio from "pages/Inicio";
import PaginaDeErro from "pages/PaginaDeErro";
import PaginaHabilidades from "pages/PaginaHabilidades";
import Post from "pages/Post";
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
                    <Route path="/habilidades" element={<PaginaHabilidades />} />
                    <Route path="/projetos" element={<ProjetosPage />} />
                    <Route path="/projetos/:id" element={<Post />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;