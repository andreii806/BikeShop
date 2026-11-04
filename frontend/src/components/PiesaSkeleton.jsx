// Carduri „schelet” afișate cât timp se așteaptă răspunsul de la API.
// Au forma unui card real, dar în locul textului sunt blocuri gri care pulsează.
export default function PiesaSkeleton({ numar = 3 }) {
    return (
        <ul className="item-list" aria-hidden="true">
            {Array.from({ length: numar }, (_, i) => (
                <li key={i} className="item-card skeleton">
                    <div className="piesa-main">
                        <span className="sk sk-check" />
                        <span className="sk sk-icon" />
                        <div>
                            <span className="sk sk-title" />
                            <span className="sk sk-meta" />
                        </div>
                    </div>
                    <span className="sk sk-button" />
                </li>
            ))}
        </ul>
    );
}
