import styles from "./DesprePage.module.css";

// Pagina de prezentare a aplicației
export default function DesprePage() {
    return (
        <section className={`panel ${styles.about}`}>
            <h2>Despre BikeShop</h2>
            <p>
                BikeShop este un magazin online de piese de bicicletă, axat pe downhill,
                enduro și BMX. Arată ce piese sunt în stoc și ce piese lipsesc, cu marca și
                prețul fiecăreia, iar piesele se pot adăuga, marca drept indisponibile sau
                șterge direct din pagină.
            </p>
            <p>
                Aplicația este construită pas cu pas, pe parcursul semestrului, în cadrul
                proiectului de Tehnologii Web. Desenele din siglă, din lanțul de sub antet și
                din iconițele tipurilor de piese sunt făcute de mână.
            </p>
            <p className={styles.stack}>
                Stack: React, Vite, React Router, CSS Modules, json-server (temporar), urmând
                Node.js, Express, MariaDB și Docker.
            </p>
        </section>
    );
}
