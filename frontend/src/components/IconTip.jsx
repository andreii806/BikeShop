// Iconița tipului de piesă, în culoarea categoriei.
// Fiecare tip are un desen (PNG din src/assets) aplicat ca mască în CSS:
// forma vine din desen, iar culoarea din currentColor, deci din categorie.
export default function IconTip({ tip }) {
    return (
        <span className={`tip-icon tip-${tip}`} aria-hidden="true">
            <span className={`tip-mask tip-mask-${tip}`} />
        </span>
    );
}
