import { Link } from 'react-router-dom';

export default function ConfirmedBooking() {
    return (
        <main className="confirmed-booking">
            <div className="confirmed-booking__icon">🎉</div>
            <h1 className="confirmed-booking__title">Booking Confirmed!</h1>
            <p className="confirmed-booking__text">
                Thank you for choosing Little Lemon. Your table has been successfully reserved.
                We look forward to welcoming you!
            </p>
            <Link to="/" className="confirmed-booking__btn">Back to Home</Link>
        </main>
    );
}