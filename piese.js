// ==========================================
// BikeShop - Etapa 2: Logica pe date (JS)
// ==========================================

// 1. Datele de test și valorile permise
const piese = [
    { id: 1, titlu: "Pinioane Shimano 11-42t", gata: false, eticheta: "transmisie" },
    { id: 2, titlu: "Set plăcuțe frână hidraulică", gata: true, eticheta: "franare" },
    { id: 3, titlu: "Furcă aer 100mm", gata: false, eticheta: "suspensie" }
];

const CATEGORII = ["transmisie", "franare", "suspensie"];

// 2. Funcții de listare și citire
function listeazaTitluri(lista) {
    return lista.map((t) => t.titlu);
}

function numaraDisponibile(lista) {
    return lista.filter((t) => !t.gata).length;
}

function cautaDupaTitlu(lista, text) {
    const termen = text.toLowerCase();
    return lista.filter((t) => t.titlu.toLowerCase().includes(termen));
}

// 3. Calculul ID-ului în mod imutabil (evitând duplicatele la ștergere)
function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

// 4. Adăugare cu validare (fără modificarea array-ului original)
function adaugaPiesa(lista, titlu, eticheta) {
    const titluCurat = titlu ? titlu.trim() : "";
    
    if (!titluCurat) {
        console.log("Eroare: Denumirea piesei nu poate fi goală!");
        return lista;
    }
    
    if (!CATEGORII.includes(eticheta)) {
        console.log(`Eroare: Categoria invalidă: "${eticheta}"!`);
        return lista;
    }

    const nouaPiesa = {
        id: nextId(lista),
        titlu: titluCurat,
        gata: false,
        eticheta: eticheta
    };

    return [...lista, nouaPiesa];
}

// 5. Comutarea stării (imutabil)
function comutaStare(lista, id) {
    return lista.map((t) => 
        t.id === id ? { ...t, gata: !t.gata } : t
    );
}

// 6. Ștergerea unei piese (imutabil)
function stergePiesa(lista, id) {
    return lista.filter((t) => t.id !== id);
}

// ==========================================
// Teste în consolă
// ==========================================
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(piese).join(", "));
console.log("Disponibile:", numaraDisponibile(piese));
console.log("Căutare 'furcă':", listeazaTitluri(cautaDupaTitlu(piese, "furcă")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaPiesa(piese, "Lanț 11 viteze", "transmisie");
console.log("Lista nouă:", listaNoua.length, "piese");
console.log("Originalul a rămas cu:", piese.length, "piese");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După bifarea id 1, disponibile:", numaraDisponibile(listaNoua));

listaNoua = stergePiesa(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaPiesa(listaNoua, "", "transmisie");
adaugaPiesa(listaNoua, "Jantă", "categorie-invalida");