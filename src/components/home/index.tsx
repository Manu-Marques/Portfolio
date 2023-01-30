import './styles.css';
import Video from "../../../src/assets/particules.mp4";

export default function Home() {
    return (
        <div className="home">
                <video className='video' src={Video} autoPlay loop muted />
            <div className='container'>
                <div className="content">
                    <h1 className='text'>Hi, I'm Emanuel and Welcome to my Portfolio</h1>
                </div>
            <div>
                <button>Entrer</button>
            </div>
            </div>
        </div>
    );
}