// O singură piesă din listă, primită prin props.
// Valorile din date rămân fără diacritice; pe ecran apar textele de mai jos.
const ETICHETE_CATEGORIE = {
    transmisie: "Transmisie",
    franare: "Frânare",
    suspensie: "Suspensie"
};

export default function PiesaCard({ piesa, onToggle, onDelete }) {
    return (
        <li className={piesa.gata ? "item-card done" : "item-card"}>
            <label className="piesa-main">
                <input
                    type="checkbox"
                    checked={piesa.gata}
                    onChange={() => onToggle(piesa.id)}
                />
                <div>
                    <h3>{piesa.titlu}</h3>
                    <span className={`badge badge-${piesa.eticheta}`}>
                        {ETICHETE_CATEGORIE[piesa.eticheta] || piesa.eticheta}
                    </span>
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
