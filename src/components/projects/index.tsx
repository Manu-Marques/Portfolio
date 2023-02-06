import './styles.css'
import Video from "../../../src/assets/espace.mp4";


export default function Projects() {
    return (
        <div className="projects-main">
            <div className="layout">
                <video className='video' src={Video} autoPlay loop muted />
            </div>
            <h1>Projects</h1>
            <div className="projects-container">
            </div>
        </div>
    );
}