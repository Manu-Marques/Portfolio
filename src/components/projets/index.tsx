import './styles.css'
import Artisenbois from './artisenbois';
import Todolist from './todolist';
import PokemonFinder from './pokemonFinder';

export default function Projets() {
    return (
        <div className="projets-main">  
        <h1 className="projets-title">Projets</h1>
        <div className="projets-btn">
            <button className="projets-btn-back">Retour</button>
        </div>
        <div className="projets-table">
            <div className="projets-btn">
                 <button className="btn">ArtisenBois</button>
                 <button className="btn">ToDoList</button>
                 <button className="btn">Pokemon Finder</button>
            </div>
            <div className="projets-contents">
                 <PokemonFinder/>
            </div>
        </div>
   </div>  
    );
}