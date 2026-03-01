export default function Menu() {
    return (
        <main className="menu">
            <div className="menu__header">
                <h2 className="menu__title">This weeks specials!</h2>
                <button className="menu__btn">Online Menu</button>
            </div>
            <div className="menu__cards">
                <div className="menu-card">
                    <img className="menu-card__image" src="src/assets/food1.png" alt="Greek Salad" />
                    <div className="menu-card__body">
                        <div className="menu-card__row">
                            <span className="menu-card__name">Greek salad</span>
                            <span className="menu-card__price">$12.99</span>
                        </div>
                        <p className="menu-card__desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <span className="menu-card__order">Order a delivery</span>
                    </div>
                </div>
                <div className="menu-card">
                    <img className="menu-card__image" src="src/assets/food2.png" alt="Bruchetta" />
                    <div className="menu-card__body">
                        <div className="menu-card__row">
                            <span className="menu-card__name">Bruchetta</span>
                            <span className="menu-card__price">$ 5.99</span>
                        </div>
                        <p className="menu-card__desc">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <span className="menu-card__order">Order a delivery</span>
                    </div>
                </div>
                <div className="menu-card">
                    <img className="menu-card__image" src="src/assets/food3.png" alt="Lemon Dessert" />
                    <div className="menu-card__body">
                        <div className="menu-card__row">
                            <span className="menu-card__name">Lemon Dessert</span>
                            <span className="menu-card__price">$ 5.00</span>
                        </div>
                        <p className="menu-card__desc">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <span className="menu-card__order">Order a delivery</span>
                    </div>
                </div>
            </div>
        </main>
    );
}