import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import PiesePage from "./pages/PiesePage.jsx";
import PiesaDetaliuPage from "./pages/PiesaDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Harta rutelor. Layout înconjoară fiecare pagină.
// Ruta de detaliu folosește resursa din tw.json: /piese/:id
export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<PiesePage />} />
                <Route path="/piese/:id" element={<PiesaDetaliuPage />} />
                <Route path="/despre" element={<DesprePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
