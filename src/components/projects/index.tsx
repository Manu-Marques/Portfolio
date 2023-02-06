import './styles.css'
import Artisenbois from './artisenbois';

export default function Projects() {
    return (
        <div className="projects-main">
            <h1 className='projects-title'>Projects</h1>
            <div className="projects-display">
                <div className='projects-navigate'>
                    <input type="radio"></input>
                    <label className='projects-subtitle'>Artisenbois</label>
                </div>
                <div className="projects-container">
                </div>
            </div>
        </div>
    );
}