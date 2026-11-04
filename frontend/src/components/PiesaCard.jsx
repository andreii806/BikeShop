import IconTip from "./IconTip.jsx";
import { ETICHETE_CATEGORIE, formatPret } from "../etichete.js";

// O singură piesă din listă, primită prin props.
export default function PiesaCard({ piesa, onToggle, onDelete }) {
    return (
        <li className={piesa.gata ? "item-card done" : "item-card"}>
            <label className="piesa-main">
                <input
                    type="checkbox"
                    checked={piesa.gata}
                    onChange={() => onToggle(piesa.id)}
                />
                <IconTip tip={piesa.eticheta} />
                <div>
                    <h3>{piesa.titlu}</h3>
                    <div className="piesa-meta">
                        <span className={`badge badge-${piesa.eticheta}`}>
                            {ETICHETE_CATEGORIE[piesa.eticheta] || piesa.eticheta}
                        </span>
                        {piesa.marca && <span className="marca">{piesa.marca}</span>}
                        {piesa.pret > 0 && <span className="pret">{formatPret(piesa.pret)}</span>}
                    </div>
                </div>
            </label>
            <div className="card-actions">
                <span className="status">
                    {piesa.gata ? "Indisponibil" : "În stoc"}
                </span>
                <button
                    className="btn-danger"
                    onClick={() => onDelete(piesa.id)}
                    aria-label={`Șterge ${piesa.titlu}`}
                >
                    Șterge
                </button>
            </div>
        </li>
    );
}
