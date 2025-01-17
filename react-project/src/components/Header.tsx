import SearchSVG from "../assets/search.svg";
import CartSVG from "../assets/cart.svg";
import TastyLogo from "../assets/TastyLogo.png";

function Header() {
  return (
    <section
      className="text-light p-2 sticky-top "
      style={{ backgroundColor: "#fff" }}>
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <a className="text-dark" style={{ textDecoration: "none" }} href="/">
            <img
              style={{ borderRadius: "50%", width: "60px" }}
              src={TastyLogo}
              alt="Account"
            />
          </a>
          <a className="text-dark" style={{ textDecoration: "none" }} href="/">
            Home
          </a>
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="/about">
            About
          </a>
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="/contact">
            Contact
          </a>
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="/sign-up">
            sign-up
          </a>
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="/login">
            Login
          </a>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="/search">
            <img style={{ width: "1.4rem" }} src={SearchSVG} alt="Search" />
          </a>
          <a href="/cart">
            <img style={{ width: "1.6rem" }} src={CartSVG} alt="Cart" />
          </a>
          <a href="/account">
            <img
              style={{ borderRadius: "50%" }}
              src="https://placehold.co/38x38"
              alt="Account"
            />
          </a>
        </div>
      </nav>
    </section>
  );
}

export default Header;
