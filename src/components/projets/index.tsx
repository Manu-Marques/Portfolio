import './styles.css'
import Artisenbois from './artisenbois';

export default function Projets() {
    return (
        <div className="projets-main">  
        <h1 className="projets-title">Projets</h1> 
        <button className="btn-back">Retour</button>
        <div className="projets-table">
            <div className="projets-btn">
                 <button className="btn active">ArtisenBois</button>
                 <button className="btn">ToDoList</button>
                 <button className="btn">Pokemon Finder</button>
            </div>
            <div className="projets-contents">
                 <Artisenbois/>
            </div>
        </div>
   </div>  
    );
}