import './styles.css'
import Artisenbois from './artisenbois';
import Todolist from './todolist';
import PokemonFinder from './pokemonFinder';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projets () {
    const [project, setProject] = useState('artisenbois');

    const handleProject = (project: string) => {
        setProject(project);
    }

    return (
        <div className="projets-main">  
            <h1 className="projets-title">Projets</h1>
            <div className="projets-btn">
                <Link to="/">
                <button  className="projets-btn-back">Retour</button>
                </Link>
            </div>
            <div className="projets-table">
                <div className="projets-btn">
                    <button className="btn" onClick={() => handleProject('artisenbois')}>ArtisenBois</button>
                    <button className="btn" onClick={() => handleProject('todolist')}>ToDoList</button>
                    <button className="btn" onClick={() => handleProject('pokemonfinder')}>Pokemon Finder</button>
                </div>
                <div className="projets-contents">
                    {project === 'artisenbois' && <Artisenbois/>}
                    {project === 'todolist' && <Todolist/>}
                    {project === 'pokemonfinder' && <PokemonFinder/>}
                </div>
            </div>
        </div>  
    );
}



// export default function Projets() {
//     return (
//         <div className="projets-main">  
//         <h1 className="projets-title">Projets</h1>
//         <div className="projets-btn">
//             <button className="projets-btn-back">Retour</button>
//         </div>
//         <div className="projets-table">
//             <div className="projets-btn">
//                  <button className="btn">ArtisenBois</button>
//                  <button className="btn">ToDoList</button>
//                  <button className="btn">Pokemon Finder</button>
//             </div>
//             <div className="projets-contents">
//                  <PokemonFinder/>
//             </div>
//         </div>
//    </div>  
//     );
// }