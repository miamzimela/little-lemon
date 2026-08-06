const testimonials = [
  { id: 1, rating: '★★★★★', name: 'Alex', comment: 'Amazing food and service!' },
  { id: 2, rating: '★★★★★', name: 'Sam', comment: 'Best Greek salad in Chicago.' },
  { id: 3, rating: '★★★★☆', name: 'Jordan', comment: 'Cozy atmosphere, great staff.' },
  { id: 4, rating: '★★★★★', name: 'Taylor', comment: 'Will definitely come back!' },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.id}>
            <span>{t.rating}</span>
            <h5>{t.name}</h5>
            <p>{t.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;