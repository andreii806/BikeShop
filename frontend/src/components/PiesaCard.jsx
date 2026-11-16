import { Link } from "react-router-dom";
import IconTip from "./IconTip.jsx";
import { ETICHETE_CATEGORIE, formatPret } from "../constants.js";
import styles from "./PiesaCard.module.css";

// O singură piesă din listă, primită prin props.
// Titlul este link către pagina de detaliu; cardul poate fi și bifat, și deschis.
export default function PiesaCard({ piesa, onToggle, onDelete }) {
    const clase = [styles.card, styles[piesa.eticheta], piesa.gata && styles.done]
        .filter(Boolean)
        .join(" ");

    return (
        <li className={clase} data-testid="item" data-id={piesa.id}>
            <div className={styles.main}>
                <input
                    type="checkbox"
                    checked={piesa.gata}
                    onChange={() => onToggle(piesa.id)}
                    aria-label={`Marchează ${piesa.titlu} ca indisponibilă`}
                    data-testid="item-toggle"
                />
                <IconTip tip={piesa.eticheta} estompat={piesa.gata} />
                <div>
                    <Link
                        to={`/piese/${piesa.id}`}
                        className={styles.title}
                        data-testid="item-link"
                    >
                        {piesa.titlu}
                    </Link>
                    <div className={styles.meta}>
                        <span className={`badge badge-${piesa.eticheta}`}>
                            {ETICHETE_CATEGORIE[piesa.eticheta] || piesa.eticheta}
                        </span>
                        {piesa.marca && <span className={styles.marca}>{piesa.marca}</span>}
                        {piesa.pret > 0 && <span className={styles.pret}>{formatPret(piesa.pret)}</span>}
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <span className={piesa.gata ? "status status-off" : "status"}>
                    {piesa.gata ? "Indisponibil" : "În stoc"}
                </span>
                <button
                    className="btn-danger"
                    onClick={() => onDelete(piesa.id)}
                    aria-label={`Șterge ${piesa.titlu}`}
                    data-testid="item-delete"
                >
                    Șterge
                </button>
            </div>
        </li>
    );
}
