import './styles.css';
import { Link } from 'react-router-dom';

export default function Formations() {
    return (
        <div className="formations-main">
            <h1 className='formations-title'>Formations</h1>
            <div className="formations-btn">
                   <Link to="/">
                <button className="formations-btn-back">Retour</button>
                </Link>
            </div>
            <div className="formations-table">
                <div className="formations-container">
                    <div className="formations-top">
                        <div className="formations-dev">
                            <h1 className="formations-subtitle">Développeur Web FullStack Javascript</h1>
                            <h2 className='formations-level'>(Niveau Bac +2)</h2>
                            <h1 className='formations-oclock-subtitle'>O'Clock - Paris</h1>
                            <ul className='formations-list'>
                                <li className="formations-item">- 798 heures de formation</li>
                                <li className="formations-item">- 3 mois de socle : <span className="formations-item-word">HTML </span>
                                    | <span className="formations-item-word">CSS</span> | <span className="formations-item-word">Javascript </span>
                                    | <span className="formations-item-word">Node.js</span> | <span className="formations-item-word">PostgreSQL</span></li>
                                <li className="formations-item">- 1 mois de spécialisation : <span className="formations-item-word">React</span> |
                                    <span className="formations-item-word"> Redux</span></li>
                                <li className="formations-item">- 1 mois de projet en équipe: O'Food </li>
                            </ul>
                            <div className="formations-row">
                                <p className='formations-year'>Décembre 2021 à Mai 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="formations-bottom">
                        <div className="formations-bus">
                            <h1 className="formations-subtitle">Transports Voyageurs</h1>
                            <h2 className='formations-level'>(Permis D)</h2>
                            <h1 className='formations-oclock-subtitle'>Couturier - Dreux</h1>
                            <ul className='formations-list'>
                                <li className="formations-item">- Conduire et manoeuvrer en sécurité un véhicule</li>
                                <li className="formations-item">- Accueillir, informer la clientèle</li>
                                <li className="formations-item">- Prendre connaissance du voyage et préparer le déplacement</li>
                                <li className="formations-item">- Effectuer les contrôles de sécurité</li>
                            </ul>
                            <div className="formations-row">
                                <p className='formations-year'>Janvier 2012 à Juin 2012</p>
                            </div>
                        </div>
                        <div className="formations-commerce">
                            <h1 className="formations-subtitle">Employé de Commerce</h1>
                            <h2 className='formations-level'>(Niveau Bac)</h2>
                            <h1 className='formations-oclock-subtitle'>Lycée André Chavanne - Suisse</h1>
                            <ul className='formations-list'>
                                <li className="formations-item">- Correspondance commerciale</li>
                                <li className="formations-item">- Comptabilité</li>
                                <li className="formations-item">- Secrétariat</li>
                                <li className="formations-item">- Gestion des relations clients</li>
                            </ul>
                            <div className="formations-row">
                                <p className='formations-year'>Septembre 2005 à Juillet 2009</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
