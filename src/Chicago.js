import chicagoImage from './images/Mario and Adrian A.jpg';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon was founded by two Italian brothers, Adrian and Mario,
          who moved to Chicago to share their family's cherished Mediterranean
          recipes. Blending traditional flavors with a contemporary twist,
          Mario focuses on recreating authentic dishes passed down through
          generations, while Adrian brings modern culinary techniques to the
          kitchen. Together, they have created a warm, vibrant dining
          experience centered around family, fresh ingredients, and community.
        </p>
      </div>
      <img src={chicagoImage} alt="Adrian and Mario, founders of Little Lemon" className="chicago-image" />
    </section>
  );
}

export default Chicago;