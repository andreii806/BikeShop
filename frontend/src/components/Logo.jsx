import logoBike from "../assets/logo-bike.png";
import styles from "./Logo.module.css";

// Sigla BikeShop: desenul unei biciclete full-suspension, cu linii galbene
// pe fundal transparent. Textul alt e gol, deoarece lângă siglă scrie deja „BikeShop”.
export default function Logo() {
    return <img className={styles.logo} src={logoBike} alt="" />;
}
