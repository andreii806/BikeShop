import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { citesteTemaSalvata } from "./tema.js";
import "./index.css";

// Dacă utilizatorul a ales deja o temă, se aplică înainte de prima randare,
// ca pagina să nu clipească în tema sistemului.
const temaSalvata = citesteTemaSalvata();
if (temaSalvata) {
  document.documentElement.dataset.theme = temaSalvata;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
