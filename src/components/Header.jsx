import { Link } from "react-router-dom"

function Header({ cart }) {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        Apple Store
      </Link>

      <Link to="/cart" className="cart-link">
        Cart ({cart.length})
      </Link>
    </header>
  )
}

export default Header