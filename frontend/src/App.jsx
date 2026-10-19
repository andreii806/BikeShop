import './App.css';
import PiesaList from './components/PiesaList.jsx';

const piese = [
    { id: 1, titlu: "Pinioane Shimano 11-42t", gata: false, eticheta: "transmisie" },
    { id: 2, titlu: "Set plăcuțe frână hidraulică", gata: true, eticheta: "franare" },
    { id: 3, titlu: "Furcă aer 100mm", gata: false, eticheta: "suspensie" }
];

export default function App() {
    const disponibile = piese.filter((t) => !t.gata).length;

    return (
        <>
            <header className="app-header">
                <h1>BikeShop</h1>
                <p>Magazin online pentru piese de bicicletă.</p>
                <p className="app-count">
                    {piese.length} piese, dintre care {disponibile} în stoc
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Piesele mele</h2>
                    <PiesaList piese={piese} />
                </section>
            </main>
        </>
    );
}