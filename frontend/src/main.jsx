import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { citesteTemaSalvata } from "./tema.js";
import "./App.css";

// Dacă utilizatorul a ales deja o temă, se aplică înainte de prima randare,
// ca pagina să nu clipească în tema sistemului.
const temaSalvata = citesteTemaSalvata();
if (temaSalvata) {
  document.documentElement.dataset.theme = temaSalvata;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
