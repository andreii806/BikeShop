import logoBike from "../assets/logo-bike.png";

// Sigla BikeShop: desenul unei biciclete full-suspension, cu linii galbene
// pe fundal transparent. Textul alt e gol, deoarece titlul de lângă spune deja „BikeShop”.
export default function Logo() {
    return <img className="logo" src={logoBike} alt="" />;
}
