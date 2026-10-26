const ETICHETE_CATEGORIE = {
    transmisie: "Transmisie",
    franare: "Franare",
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
            <button
                className="btn-danger"
                onClick={() => onDelete(piesa.id)}
                aria-label={`Șterge ${piesa.titlu}`}
            >
                Șterge
            </button>
        </li>
    );
}