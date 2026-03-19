import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import BookingForm from './BookingForm';

describe('BookingForm Validation Tests', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = vi.fn();
    const mockSubmitForm = vi.fn();

    test('HTML5 attributes are applied correctly to input fields', () => {
        render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const dateInput = screen.getByLabelText(/Choose date/i);
        const today = new Date().toISOString().split('T')[0];
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('required');
        expect(dateInput).toHaveAttribute('min', today);

        const timeSelect = screen.getByLabelText(/Choose time/i);
        expect(timeSelect).toHaveAttribute('required');

        const guestsInput = screen.getByLabelText(/Number of guests/i);
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('required');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');

        const occasionSelect = screen.getByLabelText(/Occasion/i);
        expect(occasionSelect).toHaveAttribute('required');
    });

    test('Submit button is disabled when form is invalid (empty date)', () => {
        render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeDisabled();
    });

    test('Submit button is enabled when form is valid', () => {
        render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const dateInput = screen.getByLabelText(/Choose date/i);
        const submitButton = screen.getByRole('button');

        expect(submitButton).toBeDisabled();

        fireEvent.change(dateInput, { target: { value: '2026-10-10' } });

        expect(submitButton).toBeEnabled();
    });
});