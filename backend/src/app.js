import express from "express";
import cors from "cors";
import pieseRouter from "./routes/piese.js";

const app = express();

// CORS: browserul blochează cererile de pe :5173 către :3001
// dacă serverul nu spune explicit că le permite
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));

// Transformă corpul JSON al cererii în req.body
app.use(express.json());

// Verificare rapidă că serverul rulează
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// Resursa din tw.json: /piese
app.use("/piese", pieseRouter);

// Rută necunoscută
app.use((req, res) => {
    res.status(404).json({ error: "Ruta nu există" });
});

// Tratare centralizată a erorilor (Express 5 trimite aici și erorile async).
// next rămâne în listă: Express recunoaște funcția după cei patru parametri.
app.use((err, req, res, next) => {
    // Corp trimis cu Content-Type JSON, dar care nu este JSON valid
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({ error: "Corpul cererii nu este JSON valid" });
    }
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({ error: status === 500 ? "Eroare internă" : err.message });
});

export default app;
