// Validare pe server: datele de la client nu sunt niciodată de încredere.
// Valorile fixe trebuie să fie identice cu cele din frontend/src/constants.js.
export const TIPURI = ["transmisie", "franare", "suspensie"];

const TITLU_MAX = 100;
const MARCA_MAX = 50;
const PRET_MAX = 100000;

// partial = true pentru PATCH (se verifică doar câmpurile trimise).
// Întoarce lista de erori și obiectul date, care conține doar câmpurile
// cunoscute, deja curățate (lista albă de câmpuri): orice altceva trimis
// de client, de exemplu id, este ignorat.
export function valideazaPiesa(body, { partial = false } = {}) {
    const erori = [];
    const date = {};

    // titlu: obligatoriu, text de maximum 100 de caractere
    if (!partial || body.titlu !== undefined) {
        if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
            erori.push("titlu este obligatoriu");
        } else if (body.titlu.trim().length > TITLU_MAX) {
            erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
        } else {
            date.titlu = body.titlu.trim();
        }
    }

    // eticheta: una din valorile fixe; implicit „transmisie”, ca în formular
    if (!partial || body.eticheta !== undefined) {
        const tip = body.eticheta ?? "transmisie";
        if (!TIPURI.includes(tip)) {
            erori.push(`eticheta trebuie să fie una din: ${TIPURI.join(", ")}`);
        } else {
            date.eticheta = tip;
        }
    }

    // marca: opțională, text de maximum 50 de caractere
    if (!partial || body.marca !== undefined) {
        const marca = body.marca ?? "";
        if (typeof marca !== "string") {
            erori.push("marca trebuie să fie text");
        } else if (marca.trim().length > MARCA_MAX) {
            erori.push(`marca are maximum ${MARCA_MAX} de caractere`);
        } else {
            date.marca = marca.trim();
        }
    }

    // pret: obligatoriu, număr mai mare decât 0 și cel mult 100.000 de lei
    if (!partial || body.pret !== undefined) {
        if (typeof body.pret !== "number" || !Number.isFinite(body.pret) || body.pret <= 0) {
            erori.push("pret trebuie să fie un număr mai mare decât 0");
        } else if (body.pret > PRET_MAX) {
            erori.push(`pret poate fi cel mult ${PRET_MAX} de lei`);
        } else {
            date.pret = body.pret;
        }
    }

    // gata: true sau false; implicit false (piesa este în stoc)
    if (body.gata !== undefined) {
        if (typeof body.gata !== "boolean") {
            erori.push("gata trebuie să fie true sau false");
        } else {
            date.gata = body.gata;
        }
    } else if (!partial) {
        date.gata = false;
    }

    return { erori, date };
}

// Id-urile din adresă vin ca text; se acceptă doar numere întregi pozitive
export function parseId(value) {
    const id = Number(value);
    return Number.isInteger(id) && id > 0 ? id : null;
}
