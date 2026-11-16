import { useState } from "react";
import { TIPURI, ETICHETE_CATEGORIE } from "../constants.js";
import styles from "./PiesaForm.module.css";

const TITLU_MAX = 100;
const MARCA_MAX = 50;
const PRET_MAX = 100000;

// Formular controlat: state-ul React este sursa de adevăr pentru câmpuri
export default function PiesaForm({ onAdd }) {
    const [titlu, setTitlu] = useState("");
    const [eticheta, setEticheta] = useState("transmisie");
    const [marca, setMarca] = useState("");
    const [pret, setPret] = useState("");
    const [eroare, setEroare] = useState("");
    const [campGresit, setCampGresit] = useState("");
    const [trimite, setTrimite] = useState(false);

    // Întoarce câmpul greșit și mesajul, sau null dacă totul este valid
    function valideaza() {
        const t = titlu.trim();
        if (t === "") return { camp: "titlu", mesaj: "Denumirea piesei este obligatorie." };
        if (t.length > TITLU_MAX) {
            return { camp: "titlu", mesaj: `Denumirea are maximum ${TITLU_MAX} de caractere.` };
        }
        if (marca.trim().length > MARCA_MAX) {
            return { camp: "marca", mesaj: `Marca are maximum ${MARCA_MAX} de caractere.` };
        }
        const p = Number(pret);
        if (pret.trim() === "" || !Number.isFinite(p) || p <= 0) {
            return { camp: "pret", mesaj: "Prețul trebuie să fie un număr mai mare decât 0." };
        }
        if (p > PRET_MAX) {
            return { camp: "pret", mesaj: `Prețul poate fi cel mult ${PRET_MAX.toLocaleString("ro-RO")} lei.` };
        }
        return null;
    }

    async function handleSubmit(e) {
        e.preventDefault(); // oprește reîncărcarea paginii
        const problema = valideaza();
        if (problema) {
            setEroare(problema.mesaj);
            setCampGresit(problema.camp);
            return;
        }
        setEroare("");
        setCampGresit("");
        setTrimite(true);
        try {
            await onAdd({
                titlu: titlu.trim(),
                gata: false,
                eticheta,
                marca: marca.trim(),
                pret: Number(pret),
            });
            // Câmpurile se golesc doar dacă salvarea a reușit
            setTitlu("");
            setEticheta("transmisie");
            setMarca("");
            setPret("");
        } catch (err) {
            setEroare(`Nu am putut salva piesa: ${err.message}`);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
            <label>
                Denumire piesă
                <input
                    type="text"
                    value={titlu}
                    onChange={(e) => setTitlu(e.target.value)}
                    placeholder="Ex: Anvelopă downhill 27.5"
                    maxLength={TITLU_MAX}
                    aria-invalid={campGresit === "titlu"}
                    data-testid="form-title"
                />
            </label>
            <label>
                Tip piesă
                <select
                    value={eticheta}
                    onChange={(e) => setEticheta(e.target.value)}
                    data-testid="form-eticheta"
                >
                    {TIPURI.map((tip) => (
                        <option key={tip} value={tip}>
                            {ETICHETE_CATEGORIE[tip]}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Marcă (opțional)
                <input
                    type="text"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    placeholder="Ex: Shimano"
                    maxLength={MARCA_MAX}
                    aria-invalid={campGresit === "marca"}
                    data-testid="form-marca"
                />
            </label>
            <label>
                Preț (lei)
                <input
                    type="number"
                    inputMode="decimal"
                    min="1"
                    step="any"
                    value={pret}
                    onChange={(e) => setPret(e.target.value)}
                    placeholder="Ex: 249"
                    aria-invalid={campGresit === "pret"}
                    data-testid="form-pret"
                />
            </label>
            {eroare && (
                <p className="error" data-testid="form-error">
                    {eroare}
                </p>
            )}
            <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
                {trimite ? "Se salvează..." : "Adaugă piesa"}
            </button>
        </form>
    );
}
