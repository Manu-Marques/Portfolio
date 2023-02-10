import logo from '../../../assets/pokeball.jpg';
import './styles.css'

export default function PokemonFinder() {
    return (
        <div className="pokemon">
            <h1 className='pokemon-title'>Pokemon Finder</h1>
            <div className="pokemon-container">
                <img className='pokemon-img' src={logo}></img>
                <div className="pokemon-info">
                    <h2 className="pokemon-subtitle">Résumé du projet</h2>
                    <p className="pokemon-text">Ce site web a été réalisé dans le cadre d'un projet perso. Le but était de créer un site avec la consommation et manipulation d'une API disponible en ligne, ainsi que des tests unitaires pour les functions.</p>
                    <div className="pokemon-description">
                        <h2 className="pokemon-subtitle">Outils de développement utilisés</h2>
                        <ul className="pokemon-list">
                            <li className="pokemon-item">Design <span className="pokemon-word">HTML et Tailwind</span></li>
                            <li className="pokemon-item">Langage <span className="pokemon-word">JavaScript</span></li>
                            <li className="pokemon-item">Framework <span className="pokemon-word">React</span></li>
                            <li className="pokemon-item">API <span className="pokemon-word">Pokebuildapi</span></li>
                            <li className="pokemon-item">Tests unitaires <span className="pokemon-word">Jest</span></li>
                            <li className="pokemon-item">Deploiement avec <span className="pokemon-word">Vercel</span></li>
                            <li className="pokemon-item">Responsive avec <span className="pokemon-word">Media Query</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pokemon-visite">
                <a href="https://pokemon-finders.vercel.app/" target="_blank" className="pokemon-link">Visiter le site</a>
            </div>
        </div>
    );
}