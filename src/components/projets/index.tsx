import './styles.css'
import Artisenbois from './artisenbois';

export default function Projets() {
    return (
        <div className="projets-main">  
        <h1 className="projets-title">Projets</h1> 
        <div className="projets-table">
            <div className="projets-btn">
                 <button className="btn">ArtisenBois</button>
                 <button className="btn">ToDoList</button>
                 <button className="btn">Pokemon Finder</button>
            </div>
            <div className="contents">
                 <Artisenbois/>
            </div>
        </div>
   </div>  
    );
}