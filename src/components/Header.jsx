/* 260603 front프로젝트 시작 */

/* 5단계 헤더에 Cart 링크 + 장바구니 개수 표시 - 1. Header 컴포넌트 만들기 */
/*  */

import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

// function Header({ cart }) {
//   return (
//     <header className="site-header">
//       <Link to="/" className="site-logo">
//         Apple Store
//       </Link>

//       <Link to="/cart" className="cart-link">
//         Cart ({cart.length})
//       </Link>
//     </header>
//   )
// }

function Header() {
  const cartItems = useCartStore((state) => state.cartItems);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="site-header">
      <Link to="/" className="logo">
        React Shop
      </Link>

      <nav className="site-nav">
        <Link to="/">Shop</Link>

        <Link to="/cart" className="cart-link">
          Cart
          {cartCount > 0 && <span>{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;