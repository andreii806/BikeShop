// Valorile fixe ale tipului de piesă și textele afișate pe ecran.
// În date valorile rămân fără diacritice; pe ecran apar etichetele de mai jos.
export const TIPURI = ["transmisie", "franare", "suspensie"];

export const ETICHETE_CATEGORIE = {
    transmisie: "Transmisie",
    franare: "Frânare",
    suspensie: "Suspensie"
};

// Prețul afișat în format românesc, de exemplu 1.899 lei
export function formatPret(pret) {
    return `${pret.toLocaleString("ro-RO")} lei`;
}
