import PiesaCard from "./PiesaCard.jsx";
import styles from "./PiesaList.module.css";

export default function PiesaList({ piese, onToggle, onDelete }) {
    if (!piese || piese.length === 0) {
        return (
            <div className="empty" data-testid="empty">
                <span className={styles.illustration} aria-hidden="true" />
                <p>Nu există nicio piesă în magazin.</p>
            </div>
        );
    }

    return (
        <ul className={styles.list}>
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
