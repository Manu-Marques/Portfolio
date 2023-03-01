import "./styles.css";
import Logo from "../../assets/favicon.png";

export default function Footer() {
    return (
        <div className="footer">
            <img className="footer-logo" src={Logo} alt="Logo" />
            <h1 className="footer-title">Emanuel Marques Lé © 2023 </h1>
        </div>
    );
}