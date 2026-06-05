/* 260605 파일 생성 */

/* 13단계 찜하기 Wishlist 기능 */
/*  */
/*  */


import ProductCard from "../components/ProductCard";
import { useWishlistStore } from "../store/wishlistStore";

function Wishlist() {
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);

  return (
    <section className="shop-section">
      <div className="shop-header">
        <div>
          <p className="section-label">Favorite</p>
          <h2>Wishlist</h2>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <p className="empty-result">찜한 상품이 없습니다.</p>
      ) : (
        <div className="product-grid">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;