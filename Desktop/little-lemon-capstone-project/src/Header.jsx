export default function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <h1 className="header__title">Little Lemon</h1>
                <h2 className="header__subtitle">Chicago</h2>
                <p className="header__description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="header__btn">Reserve a Table</button>
            </div>
            <div className="header__image-wrapper">
                <img className="header__image" src="src/assets/image.png" alt="Delicious food at Little Lemon" />
            </div>
        </header>
    );
}