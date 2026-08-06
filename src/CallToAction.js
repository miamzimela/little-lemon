import heroImage from './images/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button aria-label="On Click">Reserve a Table</button>
      </div>
      <img src={heroImage} alt="Little Lemon signature dish" className="cta-image" />
    </section>
  );
}

export default CallToAction;