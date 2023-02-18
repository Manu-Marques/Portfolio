import './styles.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-icons">
                    <div className="footer-git">
                        <i className="fa fa-github fa-2x"></i>
                    </div>
                    <div className="footer-linkdin">
                        <i className="fa fa-linkedin fa-2x"></i>
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