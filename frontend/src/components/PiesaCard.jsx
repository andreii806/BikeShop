const ETICHETE_CATEGORIE = {
  transmisie: "Transmisie",
  franare: "Franare",
  suspensie: "Suspensie"
};

export default function PiesaCard({ piesa }) {
  return (
    <li className={piesa.gata ? "item-card done" : "item-card"}>
      <div>
        <h3>{piesa.titlu}</h3>
        <span className={`badge badge-${piesa.eticheta}`}>
          {ETICHETE_CATEGORIE[piesa.eticheta] || piesa.eticheta}
        </span>
      </div>
      <span className="status">
        {piesa.gata ? "Indisponibil" : "Stoc disponibil"}
      </span>
    </li>
  );
}