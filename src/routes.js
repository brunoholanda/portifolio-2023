import ScrollToTop from "components/ScrollToTop";
import CorpoDaPagina from "pages/CorpoDaPagina";
import PaginaDeErro from "pages/PaginaDeErro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoDaPagina />}>
                    
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;