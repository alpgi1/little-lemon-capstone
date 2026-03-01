import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <main className="booking-page">
            <h1 className="booking-page__title">Reserve a Table</h1>
            <p className="booking-page__subtitle">Book your table at Little Lemon — we can't wait to welcome you.</p>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </main>
    )
}
