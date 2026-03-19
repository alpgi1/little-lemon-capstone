export default function About() {
    return (
        <section id="about" className="about">
            <div className="about__content">
                <h2 className="about__title">Little Lemon</h2>
                <h3 className="about__subtitle">Chicago</h3>
                <p className="about__text">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <p className="about__text">Founded by two brothers, Mario and Adrian, the establishment aims to bring the flavors of the Mediterranean to Chicago. Mario draws from his experience as a chef in Italy, while Adrian focuses on marketing and modernizing the traditional family recipes.</p>
            </div>
            <div className="about__images">
                <img className="about__img--back" src="src/assets/about.png" alt="Chef preparing food" />
                <img className="about__img--front" src="src/assets/about.png" alt="Restaurant owners Mario and Adrian" />
            </div>
        </section>
    );
}