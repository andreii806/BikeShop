import styles from "./IconTip.module.css";

// Iconița tipului de piesă, în culoarea categoriei.
// Fiecare tip are un desen (PNG din src/assets) aplicat ca mască în CSS:
// forma vine din desen, iar culoarea din currentColor, deci din categorie.
// mare = varianta mai mare, din pagina de detaliu; estompat = piesă indisponibilă.
export default function IconTip({ tip, mare = false, estompat = false }) {
    const clase = [styles.icon, styles[tip], mare && styles.mare, estompat && styles.estompat]
        .filter(Boolean)
        .join(" ");

    return (
        <span className={clase} aria-hidden="true">
            <span className={styles.mask} />
        </span>
    );
}
