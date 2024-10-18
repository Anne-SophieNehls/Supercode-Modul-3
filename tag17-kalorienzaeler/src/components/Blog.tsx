export default function Blog() {
  return (
    <section className="blog">
      <div>
        <h2>Our Blogs</h2>
        <p>
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness
          experts. Here's what you can expect from our blog.
        </p>
      </div>
      <section className="blog-input">
        <a href="#">
          <img src="./src/img/blog1.png" alt="" />
          <p>Weight Loss</p>
          <h3>The Benefits of Hydration for Weight Loss</h3>
          <p>
            Discover how staying hydrated can support your weight loss goals and
            improve overall health.
          </p>
          <section className="blogger">
            <img src="./src/img/blogger1.png" alt="" />
            <article>
              <b>Emily Johnson</b>
              <p>23 May 2023 - 5 min read</p>
            </article>
            <article>
              <button className="fav-btn">♥︎</button>
              <button className="save-btn">✔︎</button>
            </article>
          </section>
        </a>
        <a href="#">
          <img src="./src/img/blog2.png" alt="" />
          <p>Mindful Eating</p>
          <h3>Cultivating a Healthy Relationship with Food</h3>
          <p>
            Learn how practicing mindful eating can help you develop a healthier
            relationship with food and improve your overall well-being.
          </p>
          <section className="blogger">
            <img src="./src/img/blogger2.png" alt="" />
            <article>
              <b>Sarah Thompson</b>
              <p>23 May 2023 - 5 min read</p>
            </article>
            <article>
              <button className="fav-btn">♡</button>
              <button className="save-btn">✔︎</button>
            </article>
          </section>
        </a>
      </section>
    </section>
    /* <img src="./src/img/pre-website/Blogs Section.png" alt="Blog" /> */
  );
}
