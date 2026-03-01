import { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Footer from './Footer'
import HomePage from './HomePage'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'


const DEFAULT_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const initializeTimes = () => {
  if (typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date());
  }
  return DEFAULT_TIMES;
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const [year, month, day] = action.date.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);
    if (typeof window.fetchAPI === "function") {
      return window.fetchAPI(selectedDate);
    }
    return state;
  }
  return state;
};


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();
  const submitForm = (formData) => {
    const isSubmitted = window.submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmed");
    }
  };

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App