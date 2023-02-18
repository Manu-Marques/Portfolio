import './styles.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-icons">
                    <div className="contact-email">
                        <i className="fa fa-envelope fa-2x"></i>
                    </div>
                    <div className="contact-phone">
                        <i className="fa fa-phone fa-2x"></i>
                    </div>
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