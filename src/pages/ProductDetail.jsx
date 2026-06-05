/* 260603 front프로젝트 시작 */

/* 3단계 상품 상세 페이지 연결 - 1. 상세 페이지 파일 만들기. */
/* 4단계 Zustand로 장바구니 상태관리 - 3. 상세 페이지 버튼에 연결 */
/* 11단계 TanStack Query 적용 (API 로직 실무형) */
/* 12단계 Toast 알림 추가 */
/* 14단계 상품 상세 페이지에도 찜하기 버튼 추가 */
/* 15단계 최근 본 상품 Recently Viewed 기능 */
/*  */
/*  */

/* 11단계 import { useEffect, useState } from "react"; */
  /* 15단계 */
    import { useEffect } from "react";
    import { useRecentStore } from "../store/recentStore";

// import products from "../data/products"
import { useParams } from "react-router-dom"
  /* 11단계 */ import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/products";
// 
import { useCartStore } from "../store/cartStore";
// 14단계 - 1. import 추가
import { useWishlistStore } from "../store/wishlistStore";
// 12단계
import toast from "react-hot-toast";

function ProductDetail() { // { cart, setCart }
  const { id } = useParams();
  // const product = products.find((item) => item.id === Number(id))
/* 11단계  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); */
  const addToCart = useCartStore((state) => state.addToCart);

  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  // 14단계 - 2-1. 컴포넌트 내 상태 추가
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  /* 15단계 최근 본 상품 기능 */
  const addRecentItem = useRecentStore((state) => state.addRecentItem);

  useEffect(() => {
    if (product) {
      addRecentItem(product);
    }
  }, [product, addRecentItem]); /*15단계*/

  // if (!product) {
  //   return <div className="not-found">상품을 찾을 수 없습니다.</div>
  // }

  // const addToCart = () => {
  //   setCart([...cart, product])
  //   alert("장바구니에 추가되었습니다.")
  // }

  // return (
  //   <section className="detail-page">
  //     <div className="detail-image-wrap">
  //       <img src={product.image} alt={product.name} className="detail-image" />
  //     </div>

  //     <div className="detail-info">
  //       <p className="detail-label">Product Detail</p>
  //       <h1>{product.name}</h1>
  //       <p className="detail-price">{product.price.toLocaleString()}원</p>
  //       <p className="detail-desc">{product.description}</p>

  //       <button onClick={addToCart} className="primary-btn">
  //         장바구니 담기
  //       </button>
  //     </div>
  //   </section>
  // )

/* 11단계
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("상품 상세 데이터를 불러오지 못했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); */


  /* 11단계
  if (loading) return <p>Loading...</p>; */
  if (isLoading) return <p className="empty-result">Loading...</p>;

  if (isError) {
    return (
      <div className="error-box">
        <h3>문제가 발생했습니다.</h3>
        <p>상품 상세 정보를 불러오지 못했습니다.</p>
        <button type="button" onClick={() => refetch()}>
          다시 시도
        </button>
      </div>
    );
  }

  if (!product) return <p className="empty-result">상품을 찾을 수 없습니다.</p>;
  // if (!product) return <p>상품을 찾을 수 없습니다.</p>;

    // 14단계 - 2-2. 컴포넌트 내 상태 추가
    // product가 있어야 판단 가능하므로 아래 변수는 if (!product) 아래, return 전에 두는 게 안전합니다.
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <section className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-detail-info">
        <p className="product-category">{product.category}</p>
        <h2>{product.title}</h2>
        <p className="product-detail-price">${product.price}</p>
        <p className="product-detail-desc">{product.description}</p>

{/* 14단계 - 3. 버튼영역 수정 */}
<div className="product-action-buttons">
        <button 
          type="button" 
          className="cart-button" 
          onClick={() => {/*12단계*/addToCart(product); toast.success("장바구니에 담겼습니다.");}/*12단계*/}
        >
           Add to Cart 
           </button>
        {/* 한줄 <button type="button" className="cart-button" onClick={() => {addToCart(product); toast.success("장바구니에 담겼습니다.");}}> Add to Cart </button> */}

{/* 14단계 */}
  <button
    type="button"
    className={`detail-wishlist-button ${isWishlisted ? "active" : ""}`}
    onClick={() => {
      toggleWishlist(product);
      toast(
        isWishlisted
          ? "찜 목록에서 제거되었습니다."
          : "찜 목록에 추가되었습니다."
      );
    }}
  >
    {isWishlisted ? "♥ Wishlisted" : "♡ Wishlist"}
  </button>
</div>

      </div>
    </section>
  );
}

export default ProductDetail;