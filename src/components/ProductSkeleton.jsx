/* 260605 파일 생성 */
// Skeleton Loading UI

/* 9단계 스켈레톤 로딩 UI - 1. 컴포넌트 작성 */
/*  */
/*  */

function ProductSkeleton() {
  return (
    <div className="product-card skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-info">
        <div className="skeleton-line short" />
        <div className="skeleton-line" />
        <div className="skeleton-line price" />
      </div>
    </div>
  );
}

export default ProductSkeleton;
