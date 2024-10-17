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
          <p></p>
          <h3></h3>
          <p></p>
          <section>
            <img src="./src/img/blogger1.png" alt="" />
            <article>
              <p></p>
              <p></p>
            </article>
            <article>
              <button className="fav-btn">♥︎</button>
              <button className="save-btn">✔︎</button>
            </article>
          </section>
        </a>
        <a href="#">
          <img src="./src/img/blog2.png" alt="" />
          <p></p>
          <h3></h3>
          <p></p>
          <section>
            <img src="./src/img/blogger2.png" alt="" />
            <article>
              <p></p>
              <p></p>
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
