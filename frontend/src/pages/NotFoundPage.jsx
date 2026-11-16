import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

// Pagina pentru adresele care nu se potrivesc cu nicio rută (path="*")
export default function NotFoundPage() {
    return (
        <section className={`panel ${styles.notFound}`} data-testid="not-found">
            <span className={styles.illustration} aria-hidden="true" />
            <h2>Pagina nu există</h2>
            <p className="info">Adresa cerută nu duce nicăieri. Poate ai luat-o pe alt traseu.</p>
            <Link to="/" className={styles.back}>
                ← Înapoi la piese
            </Link>
        </section>
    );
}
