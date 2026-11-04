import { useEffect, useState } from "react";
import PiesaList from "./components/PiesaList.jsx";
import PiesaSkeleton from "./components/PiesaSkeleton.jsx";
import Logo from "./components/Logo.jsx";
import Statistici from "./components/Statistici.jsx";
import { fetchPiese } from "./api.js";
import { temaInitiala, salveazaTema } from "./tema.js";
import "./App.css";

// Variantele de sortare: textul din listă și funcția de comparare
const SORTARI = {
    implicit: { text: "Implicit", compara: null },
    "pret-asc": { text: "Preț crescător", compara: (a, b) => (a.pret ?? 0) - (b.pret ?? 0) },
    "pret-desc": { text: "Preț descrescător", compara: (a, b) => (b.pret ?? 0) - (a.pret ?? 0) },
    nume: { text: "Nume (A–Z)", compara: (a, b) => a.titlu.localeCompare(b.titlu, "ro") }
};

export default function App() {
    const [piese, setPiese] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState(temaInitiala);
    const [sortare, setSortare] = useState("implicit");

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
        salveazaTema(noua);
    }

    const disponibile = piese.filter((p) => !p.gata).length;

    // Lista afișată este derivată: o copie sortată, lista din state rămâne neschimbată
    const { compara } = SORTARI[sortare];
    const pieseAfisate = compara ? [...piese].sort(compara) : piese;

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
                <h1 className="brand">
                    <Logo />
                    BikeShop
                </h1>
                <p>Magazin online de piese pentru downhill, enduro și BMX.</p>
                <p className="app-count">
                    {piese.length} piese, dintre care {disponibile} în stoc
                </p>
                <Statistici piese={piese} />
            </header>

            <main className="container">
                <section className="panel">
                    <div className="panel-head">
                        <h2>Piesele mele</h2>
                        <label className="sortare">
                            Sortează
                            <select
                                value={sortare}
                                onChange={(e) => setSortare(e.target.value)}
                            >
                                {Object.entries(SORTARI).map(([cheie, { text }]) => (
                                    <option key={cheie} value={cheie}>
                                        {text}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    {loading && (
                        <>
                            <p className="info">Se încarcă...</p>
                            <PiesaSkeleton />
                        </>
                    )}
                    {error && (
                        <p className="error">
                            Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
                        </p>
                    )}
                    {!loading && !error && (
                        <PiesaList
                            piese={pieseAfisate}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    )}
                </section>
            </main>

            <footer className="app-footer">Proiect Tehnologii Web · BikeShop</footer>
        </>
    );
}