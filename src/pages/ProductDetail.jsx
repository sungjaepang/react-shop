import { useParams } from "react-router-dom"
import products from "../data/products"

function ProductDetail({ cart, setCart }) {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return <div className="not-found">상품을 찾을 수 없습니다.</div>
  }

  const addToCart = () => {
    setCart([...cart, product])
    alert("장바구니에 추가되었습니다.")
  }

  return (
    <section className="detail-page">
      <div className="detail-image-wrap">
        <img src={product.image} alt={product.name} className="detail-image" />
      </div>

      <div className="detail-info">
        <p className="detail-label">Product Detail</p>
        <h1>{product.name}</h1>
        <p className="detail-price">{product.price.toLocaleString()}원</p>
        <p className="detail-desc">{product.description}</p>

        <button onClick={addToCart} className="primary-btn">
          장바구니 담기
        </button>
      </div>
    </section>
  )
}

export default ProductDetail