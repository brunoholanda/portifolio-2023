import ScrollToTop from "components/ScrollToTop";
import Contact from "pages/Contact";
import Hobbies from "pages/Hobbies";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Post from "pages/Post";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageBody from "pages/PageBody";
import MyStacks from "pages/MyStacks";
import MyProjectsPage from "pages/MyProjectsPage";
import About from "pages/About";

function AppRoutes() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<PageBody />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/habilidades" element={<MyStacks />} />
                    <Route path="/projetos" element={<MyProjectsPage />} />
                    <Route path="/projetos/:id" element={<Post />} />
                    <Route path="/contato" element={<Contact />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;