import { useState, useEffect } from "react"

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState(availableTimes[0] ?? "17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    useEffect(() => {
        if (availableTimes.length > 0) {
            setResTime(availableTimes[0]);
        }
    }, [availableTimes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { resDate, resTime, guests, occasion };
        submitForm(formData);
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setResDate(selectedDate);
        dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    }

    const today = new Date().toISOString().split('T')[0];
    const isFormValid = resDate !== "" && guests >= 1 && guests <= 10;

    return (
        <form className="booking-form" onSubmit={handleSubmit}>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="res-date">Choose date</label>
                <input
                    className="booking-form__input"
                    onChange={handleDateChange}
                    value={resDate}
                    type="date"
                    id="res-date"
                    required
                    min={today}
                />
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="res-time">Choose time</label>
                <select
                    className="booking-form__select"
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    id="res-time"
                    required
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="guests">Number of guests</label>
                <input
                    className="booking-form__input"
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                />
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="occasion">Occasion</label>
                <select
                    className="booking-form__select"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    id="occasion"
                    required
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            <button
                className="booking-form__submit"
                type="submit"
                disabled={!isFormValid}
                aria-label="On Submit"
            >
                Make Your reservation
            </button>

        </form>
    )
}