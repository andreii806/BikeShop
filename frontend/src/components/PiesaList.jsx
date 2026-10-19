import PiesaCard from "./PiesaCard.jsx";

export default function PiesaList({ piese }) {
  // 1. Daca lista este goala
  if (!piese || piese.length === 0) {
    return <p className="empty">Nu există nicio piesă.</p>;
  }

  // 2. Afisarea listei de piese
  return (
    <ul className="item-list">
      {piese.map((piesa) => (
        <PiesaCard key={piesa.id} piesa={piesa} />
      ))}
    </ul>
  );
}