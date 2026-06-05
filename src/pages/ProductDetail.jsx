/* 260603 front프로젝트 시작 */

/* 3단계 상품 상세 페이지 연결 - 1. 상세 페이지 파일 만들기. */
/* 4단계 Zustand로 장바구니 상태관리 - 3. 상세 페이지 버튼에 연결 */
/*  */
/*  */

import { useEffect, useState } from "react";
// import products from "../data/products"
import { useParams } from "react-router-dom"
import { getProduct } from "../api/products";
// 
import { useCartStore } from "../store/cartStore";

function ProductDetail() { // { cart, setCart }
  const { id } = useParams();
  // const product = products.find((item) => item.id === Number(id))
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

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
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

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

        <button type="button" className="cart-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;