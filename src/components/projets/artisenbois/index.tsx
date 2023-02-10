import './styles.css';
import logo from '../../../assets/logo.jpg';

export default function Artisenbois() {
    return (
        <div className="artisenbois">
            <h1 className='artisenbois-title'>Artisenbois</h1>
            <div className="artisenbois-container">
                <img className='artisenbois-img' src={logo}></img>
                <div className="artisenbois-info">
                    <h2 className="artisenbois-subtitle">Résumé du projet</h2>
                    <p className="artisenbois-text">Ce site web a été réalisé dans le cadre d'un projet perso, c'était le premier projet que je réalisais après la fin de formation. Le but était de créer un site de type vitrine.</p>
                    <div className="artisenbois-description">
                        <h2 className="artisenbois-subtitle">Outils de développement utilisés</h2>
                        <ul className="artisenbois-list">
                            <li className="artisenbois-item">Design <span className="artisenbois-word">HTML/CSS</span></li>
                            <li className="artisenbois-item">Langage <span className="artisenbois-word">JavaScript</span></li>
                            <li className="artisenbois-item">Framework <span className="artisenbois-word">React</span></li>
                            <li className="artisenbois-item">Deploiement avec <span className="artisenbois-word">Vercel</span></li>
                            <li className="artisenbois-item">Responsive avec <span className="artisenbois-word">Media Query</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="artisenbois-visite">
                <a href="https://projetartisenbois.vercel.app/" target="_blank" className="artisenbois-link">Visiter le site</a>
            </div>
        </div>
    );
}