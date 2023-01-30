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
                    <h1 className='text'>Hi, I'm Emanuel and Welcome to my Portfolio</h1>
                </div>
            <div>
                <button>Voyager</button>
            </div>
            </div>
        </div>
    );
}