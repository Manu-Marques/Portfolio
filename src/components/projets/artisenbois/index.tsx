import './styles.css';
import artisenbois from '../../../assets/artisenbois.png';

export default function Artisenbois() {
    return (
        <div className="artisenbois">
            <h1 className='artisenbois-title'>Artisenbois</h1>
                 <div className="artisenbois-container">
                     <img className='artisenbois-img' src={artisenbois}></img>
                     <h2 className="artisenbois-subtitle">Résumé du projet</h2>
                        <p className="artisenbois-text">Premier projet crée</p>
                 </div>
                 <div className="projet-visite">
                    <a href="#" className="projet-link">Visiter le site</a></div>
        </div>
    );
}