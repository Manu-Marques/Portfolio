import './styles.css';
import Video from "../assets/particules.mp4";

export default function Home() {
    return (
        <div className="home">
                <video className='video' src={Video} autoPlay loop muted />
            <div className='container'>
                <h1 className='text'>Hi, I'm <span className='letter'>Emanuel</span>and Welcome to my Portfolio</h1>
            </div>
            <div>
                <button>Entrer</button>
            </div>
        </div>
    );
}