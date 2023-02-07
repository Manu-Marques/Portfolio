import './styles.css';
import artisenbois from '../../../assets/artisenbois.png';

export default function Artisenbois() {
    return (
        <div className="artisenbois">
            <h1 className='artisenbois-title'>Artisenbois</h1>
            <div className="artisenbois-container">
                <img className='artisenbois-img' src={artisenbois}></img>
                <div className="artisenbois-info">
                    <h2 className="artisenbois-subtitle">Résumé du projet</h2>
                    <p className="artisenbois-text">Premier projet crée, ce site web est de type vitrine</p>
                    <p className="artisenbois-text">Il a été réalisé avec HTML/CSS</p>
                    <p className="artisenbois-text">Il a été réalisé avec le framework ReactJS</p>
                    <p className="artisenbois-text">Il est hébergé sur Vercel</p>
                    <p className="artisenbois-text">Il est responsive</p>
                </div>
            </div>
            <div className="projet-visite">
                <a href="https://projetartisenbois.vercel.app/" target="_blank" className="projet-link">Visiter le site</a>
            </div>
        </div>
    );
}