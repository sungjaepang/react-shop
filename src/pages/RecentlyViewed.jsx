/* 260605 파일 생성 */

/* 15단계 최근 본 상품 Recently Viewed 기능 */
/*  */
/*  */

import ProductCard from "../components/ProductCard";
import { useRecentStore } from "../store/recentStore";

function RecentlyViewed() {
  const recentItems = useRecentStore((state) => state.recentItems);

  return (
    <section className="shop-section">
      <div className="shop-header">
        <div>
          <p className="section-label">History</p>
          <h2>Recently Viewed</h2>
        </div>
      </div>

      {recentItems.length === 0 ? (
        <p className="empty-result">최근 본 상품이 없습니다.</p>
      ) : (
        <div className="product-grid">
          {recentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentlyViewed;