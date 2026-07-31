import { Link } from "react-router-dom";
import "./header.css";
import { FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";

function Header() {
  return (
    <>
      <div className="top-bar">
        <p>
          Sign up and get 20% off to your first order.
          <span> Sign Up Now</span>
        </p>

        <FiX className="close-icon" />
      </div>

      <header className="header">
        <div className="logo">
          <h1>SHOP.CO</h1>
        </div>

        <nav className="nav">
          <Link to="/">Shop</Link>
          <Link to="/sale">On Sale</Link>
          <Link to="/new">New Arrivals</Link>
          <Link to="/brands">Brands</Link>
        </nav>

        <div className="search-box">
          <FiSearch className="search-icon" />

          <input type="text" placeholder="Search for products..." />
        </div>

        <div className="header-icons">
          <Link className="link" to={"/basket"}>
            <FiShoppingCart />
          </Link>
          <Link className="link">
            <FiUser />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
