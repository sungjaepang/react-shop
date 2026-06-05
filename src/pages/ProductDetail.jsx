/* 260603 front프로젝트 시작 */

/* 3단계 상품 상세 페이지 연결 - 1. 상세 페이지 파일 만들기. */
/* 4단계 Zustand로 장바구니 상태관리 - 3. 상세 페이지 버튼에 연결 */
/* 11단계 TanStack Query 적용 (API 로직 실무형) */
/*  */
/*  */

/* 11단계 import { useEffect, useState } from "react"; */
// import products from "../data/products"
import { useParams } from "react-router-dom"
  /* 11단계 */ import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/products";
// 
import { useCartStore } from "../store/cartStore";

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

        <button type="button" className="cart-button" onClick={() => addToCart(product)}> Add to Cart </button>
      </div>
    </section>
  );
}

export default ProductDetail;