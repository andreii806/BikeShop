import { Router } from "express";
import { parseId, valideazaPiesa } from "../validation.js";

const router = Router();

// Etapa 9: datele stau în memorie și se pierd la repornire (Etapa 10 le mută în MariaDB).
// Primele trei sunt piesele de test din README, aceleași în toate etapele.
let piese = [
    { id: 1, titlu: "Pinioane Shimano 11-42t", gata: false, eticheta: "transmisie", marca: "Shimano", pret: 289 },
    { id: 2, titlu: "Set plăcuțe frână hidraulică", gata: true, eticheta: "franare", marca: "SRAM", pret: 95 },
    { id: 3, titlu: "Furcă aer 100mm", gata: false, eticheta: "suspensie", marca: "RockShox", pret: 1899 },
    { id: 4, titlu: "Lanț BMX 1/2 x 1/8", gata: false, eticheta: "transmisie", marca: "KMC", pret: 79 },
    { id: 5, titlu: "Disc frână 203mm downhill", gata: true, eticheta: "franare", marca: "Shimano", pret: 249 },
];
let nextId = 6;

// Validează :id și găsește piesa, sau răspunde cu 400 / 404
function gasesteIndex(req, res) {
    const id = parseId(req.params.id);
    if (!id) {
        res.status(400).json({ error: "Id invalid" });
        return -1;
    }
    const index = piese.findIndex((p) => p.id === id);
    if (index === -1) {
        res.status(404).json({ error: "Piesa nu există" });
    }
    return index;
}

// GET /piese
router.get("/", (req, res) => {
    res.json(piese);
});

// GET /piese/:id
router.get("/:id", (req, res) => {
    const index = gasesteIndex(req, res);
    if (index === -1) return;
    res.json(piese[index]);
});

// POST /piese
router.post("/", (req, res) => {
    const { erori, date } = valideazaPiesa(req.body ?? {});
    if (erori.length > 0) {
        return res.status(400).json({ error: erori.join("; ") });
    }
    const piesa = { id: nextId++, ...date };
    piese.push(piesa);
    res.status(201).json(piesa);
});

// PATCH /piese/:id (modificare parțială)
router.patch("/:id", (req, res) => {
    const index = gasesteIndex(req, res);
    if (index === -1) return;
    const { erori, date } = valideazaPiesa(req.body ?? {}, { partial: true });
    if (erori.length > 0) {
        return res.status(400).json({ error: erori.join("; ") });
    }
    piese[index] = { ...piese[index], ...date };
    res.json(piese[index]);
});

// DELETE /piese/:id
router.delete("/:id", (req, res) => {
    const index = gasesteIndex(req, res);
    if (index === -1) return;
    piese.splice(index, 1);
    res.status(204).end();
});

export default router;
