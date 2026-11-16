import { useEffect, useState } from "react";
import PiesaList from "../components/PiesaList.jsx";
import PiesaSkeleton from "../components/PiesaSkeleton.jsx";
import PiesaForm from "../components/PiesaForm.jsx";
import Statistici from "../components/Statistici.jsx";
import { createPiesa, deletePiesa, fetchPiese, updatePiesa } from "../api.js";
import styles from "./PiesePage.module.css";

// Variantele de sortare: textul din listă și funcția de comparare
const SORTARI = {
    implicit: { text: "Implicit", compara: null },
    "pret-asc": { text: "Preț crescător", compara: (a, b) => (a.pret ?? 0) - (b.pret ?? 0) },
    "pret-desc": { text: "Preț descrescător", compara: (a, b) => (b.pret ?? 0) - (a.pret ?? 0) },
    nume: { text: "Nume (A–Z)", compara: (a, b) => a.titlu.localeCompare(b.titlu, "ro") }
};

// Pagina principală: formularul de adăugare și lista de piese
export default function PiesePage() {
    const [piese, setPiese] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortare, setSortare] = useState("implicit");

    useEffect(() => {
        let ignore = false;
        async function load() {
            try {
                const data = await fetchPiese();
                if (!ignore) setPiese(data);
            } catch (err) {
                if (!ignore) {
                    setError(`Nu am putut încărca datele: ${err.message}. Rulează npm run api?`);
                }
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        load();
        return () => {
            ignore = true;
        };
    }, []);

    // Întâi serverul, apoi state-ul: pe ecran ajunge doar ce s-a salvat.
    // handleAdd nu prinde eroarea: o lasă să ajungă în formular, care o afișează.
    async function handleAdd(piesa) {
        const creata = await createPiesa(piesa); // serverul întoarce piesa cu id
        setPiese((prev) => [...prev, creata]);
    }

    async function handleToggle(id) {
        const piesa = piese.find((p) => p.id === id);
        try {
            const actualizata = await updatePiesa(id, { gata: !piesa.gata });
            setError(null);
            setPiese((prev) => prev.map((p) => (p.id === id ? actualizata : p)));
        } catch (err) {
            setError(`Nu am putut modifica piesa: ${err.message}`);
        }
    }

    async function handleDelete(id) {
        try {
            await deletePiesa(id);
            setError(null);
            setPiese((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            setError(`Nu am putut șterge piesa: ${err.message}`);
        }
    }

    // Valori derivate, recalculate la fiecare randare
    const disponibile = piese.filter((p) => !p.gata).length;
    const { compara } = SORTARI[sortare];
    const pieseAfisate = compara ? [...piese].sort(compara) : piese;

    return (
        <div className={styles.grid}>
            <section className="panel">
                <h2>Adaugă piesă</h2>
                <PiesaForm onAdd={handleAdd} />
            </section>

            <section className="panel">
                <div className={styles.head}>
                    <h2>Piesele mele</h2>
                    <label className={styles.sortare}>
                        Sortează
                        <select value={sortare} onChange={(e) => setSortare(e.target.value)}>
                            {Object.entries(SORTARI).map(([cheie, { text }]) => (
                                <option key={cheie} value={cheie}>
                                    {text}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <p className={styles.summary}>
                    {piese.length} piese, dintre care {disponibile} în stoc
                </p>
                <Statistici piese={piese} />
                {loading && (
                    <>
                        <p className="info" data-testid="loading">Se încarcă...</p>
                        <PiesaSkeleton />
                    </>
                )}
                {error && (
                    <p className={`error ${styles.error}`} data-testid="error">
                        {error}
                    </p>
                )}
                {/* Fără !error: dacă o bifare eșuează, lista rămâne pe ecran, sub mesaj */}
                {!loading && (
                    <PiesaList piese={pieseAfisate} onToggle={handleToggle} onDelete={handleDelete} />
                )}
            </section>
        </div>
    );
}
