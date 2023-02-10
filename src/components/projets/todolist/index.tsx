import logo from '../../../assets/todolist.png';
import './styles.css';

export default function Todolist() {
    return (
        <div className="todolist">
            <h1 className='todolist-title'>ToDoList</h1>
            <div className="todolist-container">
                <img className='todolist-img' src={logo}></img>
                <div className="todolist-info">
                    <h2 className="todolist-subtitle">Résumé du projet</h2>
                    <p className="todolist-text">Ce site web a été réalisé dans le cadre d'un projet perso. Le but était de créer un site qui mets en avant les opérations appelées CRUD (Create/Read/Update et Delete) .</p>
                    <div className="todolist-description">
                        <h2 className="todolist-subtitle">Outils de développement utilisés</h2>
                        <ul className="todolist-list">
                            <li className="todolist-item">Design <span className="todolist-word">HTML/CSS</span></li>
                            <li className="todolist-item">Langage <span className="todolist-word">JavaScript</span></li>
                            <li className="todolist-item">Utilisation de la méthode <span className="todolist-word">CRUD</span></li>
                            <li className="todolist-item">Deploiement avec <span className="todolist-word">Vercel</span></li>
                            <li className="todolist-item">Responsive avec <span className="todolist-word">Media Query</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="todolist-visite">
                <a href="https://todolist-with-javascript.vercel.app/" target="_blank" className="todolist-link">Visiter le site</a>
            </div>
        </div>
    );
}