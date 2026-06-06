/* 260603 front프로젝트 시작 */

/* 2단계 ProductCard 분리 + 기존 디자인 유지 - 1. 컴포넌트 만들기 */
/* 3단계 상품 상세 페이지 연결 - 2. ProductCard에 링크 연결 */
/* 13단계 찜하기 Wishlist 기능 - 2. ProductCard에 찜 버튼 추가 */
/*  */


import { Link } from "react-router-dom";
// 13단계
import { useWishlistStore } from "../store/wishlistStore";
import toast from "react-hot-toast";

// function ProductCard({ product }) {
//   return (
//     <Link to={`/product/${product.id}`} className="product-link">
//       {/* <div className="product-card"> */}
//       <article className="product-card">
//         <img src={product.image} alt={product.name} />
//         <h3>{product.name}</h3>
//         {/* <p>{product.price}원</p> */}
//         <p>{product.price.toLocaleString()}원</p>
//       </article>
//     </Link>
//   )
// }

// export default ProductCard


// 상품 상세 페이지 연결 - 2. 링크 연결

function ProductCard({ product }) {
  // 13단계
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleWishlist = (e) => {
    e.preventDefault();

    toggleWishlist(product);

    toast(
      isWishlisted
        ? "찜 목록에서 제거되었습니다."
        : "찜 목록에 추가되었습니다."
    );
  }; /* 13단계 */ 

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      {/* 13단계 */}
      <button
        type="button"
        className={`wishlist-button ${isWishlisted ? "active" : ""}`}
        onClick={handleWishlist}
      >
        ♥
        {/* {isWishlisted ? "♥" : "♡"} */}
      </button> {/* 13단계 */}

      <div className="product-image-box">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;