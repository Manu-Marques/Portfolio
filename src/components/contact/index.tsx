import './styles.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-icons">
                    <div className="contact-envelope">
                        <i className="fa fa-envelope fa-2x"></i>
                    </div>
                        <p className='contact-email'>le.marques.emanuel@gmail.com</p>
                    <div className="contact-phone">
                        <i className="fa fa-phone fa-2x"></i>
                    </div>
                        <p className='contact-number'>+33 665 24 08 60</p>
                    <div className="contact-git">
                        <Link to="https://github.com/Manu-Marques" target="_blank">
                            <i className="fa fa-github fa-2x"></i>
                        </Link>
                    </div>
                    <div className="contact-linkdin">
                        <Link to="https://www.linkedin.com/in/emanuel-marques-le/" target="_blank">
                        <i className="fa fa-linkedin fa-2x"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}