import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IconTip from "../components/IconTip.jsx";
import { fetchPiesa } from "../api.js";
import { ETICHETE_CATEGORIE, formatPret } from "../constants.js";
import styles from "./PiesaDetaliuPage.module.css";

// Pagina unei singure piese: id-ul vine din adresă (/piese/3),
// iar piesa se cere de la server, exact acel element.
export default function PiesaDetaliuPage() {
    const { id } = useParams(); // text din URL, de exemplu "3"
    const [piesa, setPiesa] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Se reîncarcă dacă se schimbă id-ul din adresă
    useEffect(() => {
        let ignore = false;
        fetchPiesa(id)
            .then((data) => {
                if (!ignore) {
                    setPiesa(data);
                    setError(null); // o eroare de la un id anterior nu mai este valabilă
                }
            })
            .catch((err) => {
                if (!ignore) setError(err.message);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });
        return () => {
            ignore = true;
        };
    }, [id]);

    if (loading) {
        return (
            <p className="info" data-testid="loading">
                Se încarcă...
            </p>
        );
    }

    if (error) {
        return (
            <section className={`panel ${styles.detail}`}>
                <p className="error" data-testid="error">
                    Piesa nu a putut fi încărcată: {error}
                </p>
                <Link to="/" className={styles.back}>
                    ← Înapoi la listă
                </Link>
            </section>
        );
    }

    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>
                ← Înapoi la listă
            </Link>
            <div className={styles.head}>
                <IconTip tip={piesa.eticheta} mare estompat={piesa.gata} />
                <div>
                    <h2
                        className={piesa.gata ? `${styles.title} ${styles.done}` : styles.title}
                        data-testid="detail-title"
                    >
                        {piesa.titlu}
                    </h2>
                    <span className={piesa.gata ? "status status-off" : "status"}>
                        {piesa.gata ? "Indisponibil" : "În stoc"}
                    </span>
                </div>
            </div>
            <dl className={styles.fields}>
                <dt>Tip piesă</dt>
                <dd>
                    <span className={`badge badge-${piesa.eticheta}`}>
                        {ETICHETE_CATEGORIE[piesa.eticheta] || piesa.eticheta}
                    </span>
                </dd>
                <dt>Marcă</dt>
                <dd>{piesa.marca || "—"}</dd>
                <dt>Preț</dt>
                <dd className={styles.pret}>{piesa.pret > 0 ? formatPret(piesa.pret) : "—"}</dd>
                <dt>Cod produs</dt>
                <dd>#{piesa.id}</dd>
            </dl>
        </section>
    );
}
