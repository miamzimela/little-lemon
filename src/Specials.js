const specialsData = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, topped with fresh diced tomatoes.',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description: "This comes straight from grandma's recipe book—every ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-cards">
        {specialsData.map((item) => (
          <article className="specials-card" key={item.id}>
            <h4>{item.name}</h4>
            <span>{item.price}</span>
            <p>{item.description}</p>
            <p>Order a Delivery</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;