/* 260603 front프로젝트 시작 */

/* 5단계 헤더에 Cart 링크 + 장바구니 개수 표시 - 1. Header 컴포넌트 만들기 */
/* 13단계 찜하기 Wishlist 기능 - 6. 링크 추가 */
/* 16단계 다크모드 - 버튼 추가 */
/*  */
/*  */

import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
/* 13단계 */ 
import { useWishlistStore } from "../store/wishlistStore";
/* 16단계 */ 
import { useThemeStore } from "../store/themeStore";

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

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  /* 13단계 */ 
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);

  /* 16단계 */
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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

        {/* 13단계 */}
        <Link to="/wishlist" className="cart-link">
          Wishlist
          {wishlistItems.length > 0 && <span>{wishlistItems.length}</span>}
        </Link>

        {/* 15단계 */} <Link to="/recent">Recent</Link>

        {/* 16단계 */}
        <button type="button" className="theme-button" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button> {/*16단계*/}

      </nav>

    </header>
  );
}

export default Header;