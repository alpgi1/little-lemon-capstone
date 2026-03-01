import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './App';
beforeEach(() => {
    window.fetchAPI = vi.fn(() => ["17:00", "18:00", "19:00", "20:00"]);
});

test('Renders the BookingForm static text', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = vi.fn();
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct expected initial state', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns the same state provided to it', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', date: '2026-03-01' };
    const result = updateTimes(initialState, action);
    expect(result.length).toBeGreaterThan(0);
});