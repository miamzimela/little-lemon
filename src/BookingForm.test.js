import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00'];
const mockDispatch = () => {};
const mockSubmitForm = () => {};

test('Renders the "Choose date" label', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('Date input is required and has a min date set', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute('min');
});

test('Time select is required', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toBeRequired();
});

test('Guests input is required with min 1 and max 10', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('Occasion select is required', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toBeRequired();
});

test('Submit button is disabled when the date field is empty (invalid state)', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );
  const submitButton = screen.getByDisplayValue("Make Your reservation");
  expect(submitButton).toBeDisabled();
});

test('Submit button becomes enabled when all fields are valid', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  const submitButton = screen.getByDisplayValue("Make Your reservation");

  fireEvent.change(dateInput, { target: { value: '2026-08-15' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });

  expect(submitButton).toBeEnabled();
});

test('Submit button becomes disabled again if guests is set outside the valid range', () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  const submitButton = screen.getByDisplayValue("Make Your reservation");

  fireEvent.change(dateInput, { target: { value: '2026-08-15' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });
  expect(submitButton).toBeEnabled();

  fireEvent.change(guestsInput, { target: { value: '15' } });
  expect(submitButton).toBeDisabled();
});