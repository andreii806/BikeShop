import PiesaCard from "./PiesaCard.jsx";

export default function PiesaList({ piese, onToggle, onDelete }) {
    if (!piese || piese.length === 0) {
        return (
            <div className="empty">
                <span className="empty-illustration" aria-hidden="true" />
                <p>Nu există nicio piesă în magazin.</p>
            </div>
        );
    }

    return (
        <ul className="item-list">
            {piese.map((piesa) => (
                <PiesaCard
                    key={piesa.id}
                    piesa={piesa}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
