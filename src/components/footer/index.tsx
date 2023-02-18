import './styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-icons">
                    <div className="footer-git">
                        <Link to="https://github.com/Manu-Marques" target="_blank">
                            <i className="fa fa-github fa-2x"></i>
                        </Link>
                    </div>
                    <div className="footer-linkdin">
                        <Link to="https://www.linkedin.com/in/emanuel-marques-le/" target="_blank">
                        <i className="fa fa-linkedin fa-2x"></i>
                        </Link>
                    </div>
                    <div className="footer-email">
                        <i className="fa fa-envelope fa-2x"></i>
                    </div>
                    <div className="footer-phone">
                        <i className="fa fa-phone fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}