import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="nav">
            <img className="nav__logo" src="src/assets/logo.png" alt="Little Lemon Logo" />
            <ul className="nav__list">
                <li><Link to="/">Home</Link></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#menu">Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}