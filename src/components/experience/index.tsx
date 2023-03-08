import { Link } from 'react-router-dom';
import './styles.css';
import { useState, useEffect, useRef } from 'react';

export default function Experience() {

    const myRef = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
         const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        });
        if (myRef.current) {
            observer.observe(myRef.current);
        }
    }, []);


    return (
        <div ref={myRef} className={`experience-main ${ isVisible ? 'active' : '' }`} id="experience">
            <h1 className='experience-title'>Expériences</h1>
            <div className="experience-table">
                <div className="experience-container">
                    <div className="experience-left">
                        <div className='experience-oclock'>
                            <h1 className='experience-subtitle'>Développeur FullStack</h1>
                            <h1 className='experience-oclock-subtitle'>O'Clock - Projet fin d'études</h1>
                            <ul className='experience-oclock-list'>
                                <li className='experience-item'>- Développement en Front et Back</li>
                                <li className='experience-item'>- Utilisation de la méthode Scrum</li>
                                <li className='experience-item'>- Rédaction des documents personnels</li>
                                <li className='experience-item'>(Journal de bord, document de veille)</li>
                                <li className='experience-item'>- Utilisation de la méthode Kanban </li>
                            </ul>
                            <div className="experience-row">
                                <p className='experience-year'>Avril 2022 à Mai 2022</p>
                            </div>
                        </div>
                        <div className="experience-stavo">
                            <h1 className='experience-subtitle'>Chauffeur de Bus</h1>
                            <h1 className='experience-stavo-subtitle'>Stavo - Plaisir</h1>
                            <ul className='experience-stavo-list'>
                                <li className='experience-item'>- Transport de personnes</li>
                                <li className='experience-item'>- Respect des horaires</li>
                                <li className='experience-item'>- Respect des règles de sécurité et de conduite</li>
                                <li className='experience-item'>- Gestion de la relation client</li>
                            </ul>
                            <div className="experience-row">
                                <p className='experience-year'>Décembre 2013 à Décembre 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="experience-right">
                        <div className="experience-hotel">
                            <h1 className='experience-subtitle'>Réceptionniste</h1>
                            <h1 className='experience-hotel-subtitle'>Hotel F1- Plaisir</h1>
                            <ul className='experience-hotel-list'>
                                <li className='experience-item'>- Accueil des clients</li>
                                <li className='experience-item'>- Gestion des réservations et des chambres</li>
                                <li className='experience-item'>- Gestion des horaires de départ</li>
                                <li className='experience-item'>- Gestion des stocks</li>
                            </ul>
                            <div className="experience-row">
                                <p className='experience-year'>Novembre 2010 à Novembre 2012</p>
                            </div>
                        </div>
                        <div className="experience-restaurant">
                            <h1 className='experience-subtitle'>Équipier Polyvalent</h1>
                            <h1 className='experience-restaurant-subtitle'>Quick - Coignières</h1>
                            <ul className='experience-restaurant-list'>
                                <li className='experience-item'>- Travail en équipe</li>
                                <li className='experience-item'>- Gestion de la relation client</li>
                                <li className='experience-item'>- Préparation des commandes</li>
                                <li className='experience-item'>- Gestion des stocks</li>
                            </ul>
                            <div className="experience-row">
                                <p className='experience-year'>Novembre 2009 à Octobre 2010</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}