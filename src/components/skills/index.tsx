import "./styles.css";

export default function Skills() {
    return (
        <div className="skills-main">
            <h1 className="skills-title">Compétences</h1>
            <div className="skills-table">
                <div className="skills-container">
                    <div className="skills-expertise">
                        <h1 className="skills-subtitle">Savoir faire</h1>
                        <ul className="skills-list">
                            <li className="skills-item">Anasyler le besoin du client</li>
                            <li className="skills-item">Méthode Agile</li>
                            <li className="skills-item">Concevoir une maquette de présentation</li>
                            <li className="skills-item">Planifier les étapes d'un projet</li>
                            <li className="skills-item">Établier un chaier des charges</li>
                        </ul>
                    </div>
                    <div className="skills-soft">
                        <h1 className="skills-subtitle">Savoir être</h1>
                        <ul className="skills-list">
                            <li className="skills-item">Autonome</li>
                            <li className="skills-item">Travail en d'équipe</li>
                            <li className="skills-item">Capacité d'adaptation</li>
                            <li className="skills-item">Sens de communication</li>
                            <li className="skills-item">Curiosité</li>
                        </ul>
                    </div>
                    <div className="skills-stack">
                        <h1 className="skills-subtitle">Stack</h1>
                        <ul className="skills-list">
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                        </ul>
                    </div>
                    <div className="skills-languages">
                        <h1 className="skills-subtitle">Langues</h1>
                        <ul className="skills-list">
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                            <li className="skills-item">HTML</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}