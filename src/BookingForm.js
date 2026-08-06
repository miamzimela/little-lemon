import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);
  const [validationMessages, setValidationMessages] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const guestsNumber = Number(guests);
    const messages = [];

    if (date === '') messages.push('Please choose a date.');
    if (time === '') messages.push('Please choose a time.');
    if (occasion === '') messages.push('Please choose an occasion.');
    if (guestsNumber < 1 || guestsNumber > 10) {
      messages.push('Number of guests must be between 1 and 10.');
    }

    setValidationMessages(messages);
    setIsFormValid(messages.length === 0);
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch(newDate);
    setStatusMessage(`Available times updated for ${newDate}.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');
    const formData = { date, time, guests, occasion };
    const success = submitForm(formData);
    if (!success) {
      setSubmitError('We could not complete your reservation. Please check your details and try again.');
    }
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        required
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        required
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <div aria-live="polite" className="form-status-message">
        {statusMessage}
      </div>

      {isFormValid && (
        <div className="booking-review">
          <h5>Review your booking</h5>
          <p>{date} at {time} — {guests} guest(s) for a {occasion.toLowerCase()}.</p>
        </div>
      )}

      {!isFormValid && validationMessages.length > 0 && (
        <ul className="validation-messages" aria-live="polite">
          {validationMessages.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}

      {submitError && (
        <p className="submit-error" role="alert">{submitError}</p>
      )}

      <div className="form-actions">
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!isFormValid}
        />
        <Link to="/" className="cancel-link">Cancel</Link>
      </div>
    </form>
  );
}

export default BookingForm;