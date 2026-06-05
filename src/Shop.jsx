/* 260603 파일 생성 */

/* 1단계 react-shop 고도화 - 4. 상품 리스트 페이지에서 연결 */
// 이 파일 경로가 src/pages/ 에다가 둬야하는 듯?
/* 2단계 ProductCard 분리 + 기존 디자인 유지 - 2. 상품 리스트 페이지 수정 */
/* 7단계 검색 기능 + 카테고리 필터 - 1. 수정 */
/* 8단계 정렬 기능 - 1. 정렬 상태 추가 */
/* 8단계 정렬 기능 - 2. filteredProducts 아래에 sortedProducts 추가 */
/* 8단계 정렬 기능 - 3. 검색 input 옆에 select 추가 */
/* 8단계 정렬 기능 - 4. 상품 출력 부분 수정 */
/* 9단계 스켈레톤 로딩 UI - import 추가 + 3. loading 부분 수정 */
/* 10단계 에러 UI 처리 - error 상태 추가 */
/*  */


import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
// 2단계?
import ProductCard from "../components/ProductCard";
// 9단계
import ProductSkeleton from "../components/ProductSkeleton";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // 7단계
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  // 8단계 정렬 상태 추가
  const [sortOption, setSortOption] = useState("default");
  // 10단계
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("상품 데이터를 불러오지 못했습니다.", error);
        // 10단계
        setError("상품 데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 7단계 검색기능+카테고리 필터
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  /* 7단계 */

  // 8단계 정렬기능
  const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sortOption === "price-low") {
    return a.price - b.price;
  }

  if (sortOption === "price-high") {
    return b.price - a.price;
  }

  if (sortOption === "name") {
    return a.title.localeCompare(b.title);
  }

  return 0;
}); /* 8단계 */ 

  // 9단계 - 이 부분 삭제 후, 아래 return문 내부 처리로 변경.
  // if (loading) return <p>Loading...</p>;


  return (
    <section className="shop-section">
      {/* 7단계 */}
      <div className="shop-header">
        <div>
          <p className="section-label">React Shop</p>
          <h2>Shop Collection</h2>
        </div>

{/* 8단계 */}
<div className="shop-controls">
        <input
          type="text"
          placeholder="Search products"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="search-input"
        />
      </div> 

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="sort-select"
      >
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name</option>
      </select>
</div> {/* 8단계 */}
      
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      

    {/* 9단계 */}
    {loading ? (
      <div className="product-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    ) /* 10단계 */ : error ? (
      <div className="error-box">
        <h3>문제가 발생했습니다.</h3>
        <p>{error}</p>
        <button type="button" onClick={() => window.location.reload()}>
          다시 시도
        </button>
      </div>
    ) :
/* 8단계 */
sortedProducts.length === 0 ? ( /* 8단계 */
  // 7단계
// {filteredProducts.length === 0 ? (
        <p className="empty-result">검색 결과가 없습니다.</p>
      ) : (
        // 2단계
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
)} {/* 7단계 */}
    </section>
    // <div>
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <img src={product.image} alt={product.title} />
    //       <h3>{product.title}</h3>
    //       <p>${product.price}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default Shop;