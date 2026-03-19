export default function Testimonials() {
    return (
        <section className="testimonials">
            <h2 className="testimonials__title">Testimonials</h2>
            <div className="testimonials__grid">
                <div className="testimonial-card">
                    <div className="testimonial-card__stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                    <div className="testimonial-card__reviewer">
                        <div className="testimonial-card__avatar">👤</div>
                        <span className="testimonial-card__name">Sara L.</span>
                    </div>
                    <p className="testimonial-card__quote">"The Greek Salad was absolutely fresh and delicious! Highly recommend."</p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-card__stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star star--empty">★</span>
                    </div>
                    <div className="testimonial-card__reviewer">
                        <div className="testimonial-card__avatar">👤</div>
                        <span className="testimonial-card__name">John M.</span>
                    </div>
                    <p className="testimonial-card__quote">"Great atmosphere and the Lemon Dessert is to die for."</p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-card__stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                    <div className="testimonial-card__reviewer">
                        <div className="testimonial-card__avatar">👤</div>
                        <span className="testimonial-card__name">Emily R.</span>
                    </div>
                    <p className="testimonial-card__quote">"The bruschetta reminded me of my trip to Italy. Authentic taste."</p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-card__stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star star--empty">★</span>
                    </div>
                    <div className="testimonial-card__reviewer">
                        <div className="testimonial-card__avatar">👤</div>
                        <span className="testimonial-card__name">Michael B.</span>
                    </div>
                    <p className="testimonial-card__quote">"Good service and lovely decor. A perfect spot for dinner."</p>
                </div>
            </div>
        </section>
    );
}