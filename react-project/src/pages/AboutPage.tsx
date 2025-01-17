import NavBar from "../components/Header";

function About() {
  return (
    <>
      <NavBar />
      <div className="container my-5">
        {/* Intro Section */}
        <section className="text-center mb-5">
          <h1 className="display-4 text-primary fw-bold">Welcome to Tasty</h1>
          <p className="lead text-muted">
            Where exceptional taste meets unbeatable value. Located in the heart
            of Malaysia, we pride ourselves on serving high-quality, delicious
            food at affordable prices, ensuring that every meal is an
            unforgettable experience.
          </p>
          <img
            src="https://i.ibb.co/X2Gc0G1/pexels-igor-starkov-233202-1307698.jpg"
            alt="Restaurant"
            className="img-fluid mb-4"
          />
        </section>

        {/* Menu Section */}
        <section className="text-center mb-5">
          <h2 className="display-4 text-dark">Our Menu</h2>
          <p className="lead text-muted">
            At Tasty, we believe that great food should be accessible to
            everyone. Our chefs use only the finest ingredients to craft a menu
            bursting with bold flavors, satisfying every palate. Whether you're
            craving local Malaysian delicacies or international favorites, our
            diverse menu is designed to delight.
          </p>
        </section>

        {/* Services Section */}
        <section className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="https://i.ibb.co/2Pn3nXT/pexels-norma-mortenson-4393668.jpg"
                alt="Free Delivery"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title text-info fw-bold">Free Delivery</h3>
                <p className="card-text text-muted">
                  We’re committed to providing convenience, which is why we
                  offer free, fast delivery straight to your door. No matter
                  where you are, we’ll ensure your meal arrives hot, fresh, and
                  ready to enjoy — all at no extra cost.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="https://i.ibb.co/H2Fm13D/pexels-minan1398-1482803.jpg"
                alt="Dine-In Experience"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title text-info fw-bold">
                  Dine-In Experience
                </h3>
                <p className="card-text text-muted">
                  Whether you're dining in or ordering from the comfort of your
                  home, we guarantee quality, flavor, and service that are
                  second to none.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-dark text-white text-center p-5 rounded">
          <div className="container">
            <h2 className="display-3 fw-bold">Thank You for Choosing Tasty</h2>
            <p className="lead mb-4">
              We look forward to serving you. Explore our menu or place an order
              today and experience the best of Malaysian and international
              flavors.
            </p>
            <a href="/menu" className="btn btn-light btn-lg px-5 py-3 fw-bold">
              Explore Our Menu
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
