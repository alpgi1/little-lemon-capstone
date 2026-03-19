export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__brand">
                    <img className="footer__logo" src="src/assets/logo.png" alt="Little Lemon Logo" />
                    <span className="footer__brand-name">Little Lemon</span>
                </div>
                <div className="footer__col">
                    <h4 className="footer__col-title">Doormat Navigation</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#testimonials">Reservations</a></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className="footer__col footer__contact">
                    <h4 className="footer__col-title">Contact</h4>
                    <p>123 Lemon Street</p>
                    <p>Chicago, IL 60611</p>
                    <p>(312) 555-0123</p>
                    <p>info@littlelemon.com</p>
                </div>
                <div className="footer__col">
                    <h4 className="footer__col-title">Social Media Links</h4>
                    <div className="footer__social">
                        <a href="#facebook">📘 Facebook</a>
                        <a href="#instagram">📷 Instagram</a>
                        <a href="#twitter">🐦 Twitter</a>
                    </div>
                </div>
            </div>
            <hr className="footer__divider" />
            <p className="footer__bottom">© 2023 Little Lemon Restaurant. All rights reserved.</p>
        </footer>
    );
}