import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo.jsx";
import { temaInitiala, salveazaTema } from "../tema.js";
import styles from "./Layout.module.css";

// NavLink marchează singur pagina curentă
function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

// Antetul, navigația și subsolul, scrise o singură dată pentru toate paginile
export default function Layout() {
    const [tema, setTema] = useState(temaInitiala);

    // Comutarea temei: state-ul pentru buton, atributul data-theme pentru CSS
    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
        salveazaTema(noua);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.top}>
                        <Link to="/" className={styles.brand}>
                            <Logo />
                            BikeShop
                        </Link>
                        <div className={styles.actions}>
                            <nav className={styles.nav} data-testid="nav">
                                <NavLink to="/" end className={navClass}>
                                    Piese
                                </NavLink>
                                <NavLink to="/despre" className={navClass}>
                                    Despre
                                </NavLink>
                            </nav>
                            <button
                                className={styles.themeToggle}
                                onClick={handleTema}
                                aria-pressed={tema === "dark"}
                            >
                                {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                            </button>
                        </div>
                    </div>
                    <p className={styles.tagline}>
                        Magazin online de piese pentru downhill, enduro și BMX.
                    </p>
                </div>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>Proiect Tehnologii Web · BikeShop</footer>
        </>
    );
}
