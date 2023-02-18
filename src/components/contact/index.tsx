import './styles.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="contact-main">
            <h1 className='contact-title'>Contact</h1>
            <div className="contact-btn">
                <button className="contact-btn-back">Retour</button>
            </div>
            <div className="contact-table">
                <div className="contact-container">
                    <div className="contact-icons">
                        <div className="contact-git">
                            <i className="fa fa-github fa-2x"></i>
                            <Link to="https://github.com/Manu-Marques"></Link>
                        </div>
                        <div className="contact-linkdin">
                            <i className="fa fa-linkedin fa-2x"></i>
                            </div>
                        <div className="contact-mail">
                            <i className="fa fa-envelope fa-2x"></i>
                            </div>
                            <div className="contact-phone">
                            <i className="fa fa-phone fa-2x"></i>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}