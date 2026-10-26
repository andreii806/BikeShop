import { useState } from "react";
import PiesaList from "./components/PiesaList.jsx";
import "./App.css";

// Datele inițiale ale proiectului BikeShop
const PIESE_INITIALE = [
    { id: 1, titlu: "Pinioane Shimano 11-42t", gata: false, eticheta: "transmisie" },
    { id: 2, titlu: "Set plăcuțe frână hidraulică", gata: true, eticheta: "franare" },
    { id: 3, titlu: "Furcă aer 100mm", gata: false, eticheta: "suspensie" }
];

// Aflarea temei implicite a sistemului de operare
function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [piese, setPiese] = useState(PIESE_INITIALE);
    const [tema, setTema] = useState(temaInitiala);

    // Actualizare imutabilă: comutare stare piesa (disponibil / indisponibil)
    function handleToggle(id) {
        setPiese((prev) =>
            prev.map((p) => (p.id === id ? { ...p, gata: !p.gata } : p))
        );
    }

    // Actualizare imutabilă: ștergere piesa
    function handleDelete(id) {
        setPiese((prev) => prev.filter((p) => p.id !== id));
    }

    // Comutarea temei (Light/Dark mode)
    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    // Valoare derivată: piese în stoc (ne-bifate)
    const disponibile = piese.filter((p) => !p.gata).length;

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <h1>BikeShop</h1>
                <p>Magazin online pentru piese de bicicletă.</p>
                <p className="app-count">
                    {piese.length} piese, dintre care {disponibile} în stoc
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Piesele mele</h2>
                    <PiesaList
                        piese={piese}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </section>
            </main>
        </>
    );
}