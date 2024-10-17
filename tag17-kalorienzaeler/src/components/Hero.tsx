export default function Hero() {
  return (
    <div id="hero">
      <img
        src="./src/img/hero-img.png"
        alt="Hero-Image_sporty_woman"
        id="hero-img"
      />
      <section>
        <h3>Transorm Your 💚 Health with</h3>
        <h1>Personaliued Nutrition Coaching</h1>
        <p>
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey, providing
          customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        <div>
          <button>Get Starter Today</button>
          <button>Book a Demo</button>
        </div>
        <div>
          <div className="more-customers__container">
            <img src="./src/img/more-people.png" alt="" />
            <img src="./src/img/more-people2.png" alt="" />
            <img src="./src/img/more-people3.png" alt="" />
          </div>
          <p>
            <span>430+ </span>Happy Customers
          </p>
        </div>
      </section>
    </div>
    /* <img src="./src/img/pre-website/Hero Section.png" alt="Hero" />; */
  );
}
