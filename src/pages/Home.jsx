import products from "../data/products"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <p className="hero-eyebrow">React Projcet</p>
        <h1>Apple Style Store</h1>
        <p className="hero-text">
          React Router, useState, localStorage를 활용해 만든
          애플 스타일 쇼핑 UI 프로젝트입니다.
        </p>
        <Link to="/cart" className="primary-btn">
          장바구니 보기
        </Link>
      </section>

      <section className="product-section">
        {/* <div className="product-list"> */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home