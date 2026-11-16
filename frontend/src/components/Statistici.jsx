import { TIPURI, ETICHETE_CATEGORIE, formatPret } from "../constants.js";
import styles from "./Statistici.module.css";

// Casetele cu statistici. Toate valorile sunt derivate din listă,
// deci se recalculează singure la adăugare, bifare sau ștergere.
export default function Statistici({ piese }) {
    const valoareStoc = piese
        .filter((p) => !p.gata)
        .reduce((suma, p) => suma + (p.pret || 0), 0);

    return (
        <ul className={styles.stats}>
            <li>
                Valoare stoc: <strong>{formatPret(valoareStoc)}</strong>
            </li>
            {TIPURI.map((tip) => (
                <li key={tip} className={styles[tip]}>
                    {ETICHETE_CATEGORIE[tip]}:{" "}
                    <strong>{piese.filter((p) => p.eticheta === tip).length}</strong>
                </li>
            ))}
        </ul>
    );
}
