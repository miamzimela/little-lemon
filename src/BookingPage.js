function BookingPage() {
  return (
    <section className="booking-page">
      <h2>Table Reservation</h2>
      <form>
        <label>
          Date
          <input type="date" />
        </label>
        <label>
          Time
          <input type="time" />
        </label>
        <label>
          Party Size
          <input type="number" min="1" />
        </label>
        <button type="submit">Confirm Details</button>
      </form>
    </section>
  );
}

export default BookingPage;