import './styles.css';
import Video from "../../../src/assets/espace.mp4";

export default function Home() {
    return (
        <div className="home">
                <div className="layout">
                    <video className='video' src={Video} autoPlay loop muted />
                </div>
            <div className='container'>
                <div className="content">
                    <h1 className='text'>Bonjour et Bienvenu dans le Portfolio d'Emanuel !</h1>
                </div>
            <div>
                <button>Voyager</button>
            </div>
            </div>
        </div>
    );
}