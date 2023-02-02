import './styles.css';
import Video from "../../../src/assets/espace.mp4";

export default function Home() {
    return (
        <div className="home">
            <div className="layout">
                <video className='video' src={Video} autoPlay loop muted />
            </div>
            <div className='container'>
                <div className="first-line">
                    <div className='resume'>
                        <h1 className='word'>About</h1>
                        <h2 className='word'>Emanuel Marques Lé</h2>
                        <h2 className='word'>Développeur Web Front-End</h2>
                    </div>
                        <div className='planet-lune'>
                            <div className='lune'>
                                </div>
                        </div>
                </div>
                 <div className="content">
                    <h1 className='skills'>Skills</h1>
                    <h1 className='about'>About</h1>
                    <h1 className='contact'>Contact</h1>
                    <h1 className='projects'>Projects</h1>
                    <h1 className='experience'>Experience</h1>
                </div>
                <div className="second-line">
                        <div className='planet-neptune'>
                            <div className='neptune'>
                        </div>
                    </div>
                         <div className='planet-pluton'>
                            <div className='pluton'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}