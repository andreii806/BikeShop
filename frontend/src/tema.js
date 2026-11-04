// Tema aleasă din buton se păstrează în localStorage, ca să rămână după refresh.
// localStorage poate lipsi sau poate arunca eroare (de exemplu în modul privat),
// de aceea fiecare acces este pus în try / catch.
const CHEIE_TEMA = "bikeshop-tema";

export function citesteTemaSalvata() {
    try {
        const tema = localStorage.getItem(CHEIE_TEMA);
        return tema === "dark" || tema === "light" ? tema : null;
    } catch {
        return null;
    }
}

export function salveazaTema(tema) {
    try {
        localStorage.setItem(CHEIE_TEMA, tema);
    } catch {
        // fără localStorage, tema se pierde la refresh; aplicația merge în continuare
    }
}

// Tema de pornire: cea salvată, altfel cea a sistemului de operare
export function temaInitiala() {
    return (
        citesteTemaSalvata() ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
}
