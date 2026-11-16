import styles from "./PiesaSkeleton.module.css";

// Carduri „schelet” afișate cât timp se așteaptă răspunsul de la API.
// Au forma unui card real, dar în locul textului sunt blocuri gri care pulsează.
export default function PiesaSkeleton({ numar = 3 }) {
    return (
        <ul className={styles.list} aria-hidden="true">
            {Array.from({ length: numar }, (_, i) => (
                <li key={i} className={styles.card}>
                    <div className={styles.main}>
                        <span className={`${styles.sk} ${styles.check}`} />
                        <span className={`${styles.sk} ${styles.icon}`} />
                        <div>
                            <span className={`${styles.sk} ${styles.title}`} />
                            <span className={`${styles.sk} ${styles.meta}`} />
                        </div>
                    </div>
                    <span className={`${styles.sk} ${styles.button}`} />
                </li>
            ))}
        </ul>
    );
}
