import "./styles.css";
import { Link } from "react-router-dom";

export default function Skills() {
    return (
        <div className="skills-main">
            <h1 className="skills-title">Compétences</h1>
            <div className="skills-btn">
            <Link to="/">
            <button className="skills-btn-back">Retour</button>
            </Link>
        </div>
            <div className="skills-table">
                <div className="skills-container">
                    <div className="skills-left">
                        <div className="skills-expertise">
                            <h1 className="skills-subtitle">Savoir faire</h1>
                            <ul className="skills-list">
                                <li className="skills-item">- Méthode Agile</li>
                                <li className="skills-item">- Concevoir une maquette de présentation</li>
                                <li className="skills-item">- Planifier les étapes d'un projet</li>
                                <li className="skills-item">- Établir un cahier des charges</li>
                                <li className="skills-item">- Analyser le besoin du client</li>
                            </ul>
                        </div>
                        <div className="skills-soft">
                            <h1 className="skills-subtitle">Savoir être</h1>
                            <ul className="skills-list">
                                <li className="skills-item">- Autonome</li>
                                <li className="skills-item">- Travail en équipe</li>
                                <li className="skills-item">- Capacité d'adaptation</li>
                                <li className="skills-item">- Sens de communication</li>
                                <li className="skills-item">- Curiosité</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-right">
                        <div className="skills-stack">
                            <h1 className="skills-subtitle">Stack</h1>
                            <div className="skills-stack-list">
                                <ul className="skills-front">
                                    <h1 className="skills-front-title">Front</h1>
                                    <li className="skills-item">- Html/Css</li>
                                    <li className="skills-item">- JavaScript</li>
                                    <li className="skills-item">- React</li>
                                    <li className="skills-item">- TypeScript</li>
                                    <li className="skills-item">- Tailwind</li>
                                    <li className="skills-item">- Bootstrap</li>
                                </ul>
                                <div className="skills-both">
                                    <ul className="skills-back">
                                        <h1 className="skills-back-title">Back</h1>
                                        <li className="skills-item">- Node.js</li>
                                        <li className="skills-item">- PostgreSQL</li>
                                    </ul>
                                    <ul className="skills-others">
                                        <h1 className="skills-others-title">Autres</h1>
                                        <li className="skills-item">- Git/GitHub</li>
                                        <li className="skills-item">- Test unitaire (Jest)</li>
                                        <li className="skills-item">- Figma</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="skills-languages">
                            <h1 className="skills-subtitle">Langues</h1>
                            <ul className="skills-list">
                                <li className="skills-item">- Français : Bilingue</li>
                                <li className="skills-item">- Anglais : Niveau B2</li>
                                <li className="skills-item">- Portugais : Bilingue</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}