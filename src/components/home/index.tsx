import './styles.css';
import photo from '../../../src/assets/photo.jpg';
import { useEffect, useState } from 'react';
import Experience from '../experience';
import Skills from '../skills';
import Projets from '../projets';
import Formations from '../formations';

export default function Home() {





    return (
        <div className="home">
            <div className='home-container'>
                <div className="home-row">
                    <div className='home-resume'>
                        <div className="home-me">
                            <h2 className='home-presentation'>Bonjour, je m'appelle <span className="presentation-word">Emanuel</span></h2>
                            <h2 className='home-presentation'>Je suis <span className="presentation-word">Développeur Web</span></h2>
                        </div>
                        <img className='home-img' src={photo} alt="moi" />
                    </div>
                    <div className="home-menu">
                        <div className="home-left">
                            <div className='home-experience-title'>Expériences</div>
                            <div className='home-skills-title'>Compétences</div>
                        </div>
                        <div className="home-right">
                            <div className='home-projets-title'>Projets</div>
                            <div className='home-formations-title'>Formations</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}