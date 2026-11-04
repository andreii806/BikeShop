import { useEffect, useState } from "react";
import PiesaList from "./components/PiesaList.jsx";
import { fetchPiese } from "./api.js";
import "./App.css";

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [piese, setPiese] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState(temaInitiala);

    useEffect(() => {
        let ignore = false;
        async function load() {
            try {
                const data = await fetchPiese();
                if (!ignore) setPiese(data);
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        load();
        return () => {
            ignore = true;
        };
    }, []);

    function handleToggle(id) {
        setPiese((prev) =>
            prev.map((p) => (p.id === id ? { ...p, gata: !p.gata } : p))
        );
    }

    function handleDelete(id) {
        setPiese((prev) => prev.filter((p) => p.id !== id));
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

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
                    {loading && <p className="info">Se încarcă...</p>}
                    {error && (
                        <p className="error">
                            Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
                        </p>
                    )}
                    {!loading && !error && (
                        <PiesaList
                            piese={piese}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    )}
                </section>
            </main>
        </>
    );
}