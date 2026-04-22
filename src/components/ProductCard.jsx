import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-link">
      {/* <div className="product-card"> */}
      <article className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        {/* <p>{product.price}원</p> */}
        <p>{product.price.toLocaleString()}원</p>
      </article>
    </Link>
  )
}

export default ProductCard