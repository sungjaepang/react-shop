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
/* 11단계 TanStack Query 적용 (API 로직 실무형) */
/*  */


import { /* useEffect, 11단계 */ useState } from "react";
  /* 11단계 */
  import { useQuery } from "@tanstack/react-query"; 
import { getProducts } from "../api/products";
// 2단계?
import ProductCard from "../components/ProductCard";
// 9단계
import ProductSkeleton from "../components/ProductSkeleton";

function Shop() {
  /* 11단계
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
    */
   const {
    data: products = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  }); /* 11단계 */

  // 7단계
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  // 8단계 정렬 상태 추가
  const [sortOption, setSortOption] = useState("default");
  // 10단계
  /* 11단계에서 이 부분도 제거 + useEffect 제거
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
  }, []); */

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
  /* return문에서 중괄호 {} 축약 가능
  if (sortOption === "price-low") return a.price - b.price;
  if (sortOption === "price-high") return b.price - a.price;
  if (sortOption === "name") return a.title.localeCompare(b.title); */

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
          <input type="text" placeholder="Search products" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className="search-input"/>

          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-select">
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
            <option value="kor-default">기본순</option>
            <option value="kor-price-low">낮은 가격 순</option>
            <option value="kor-price-high">높은 가격 순</option>
            <option value="kor-name">이름</option>
            <option value="kor-">추천순</option>
            <option value="kor-">신상품순</option>
            <option value="kor-">리뷰많은순</option>
            <option value="kor-">높은할인순</option>
            <option value="kor-">좋아요많은순</option>
            <option value="kor-">판매순</option>
            <option value="kor-">후기순</option>
          </select>
        </div> {/* 8단계 */}
      </div> 
      
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
    {/* {loading ? ( */}
    {/* 11단계 */}
    {isLoading ? (
      <div className="product-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    ) /* 10단계 */ /* 11단계 : error ? (
    )  */ : isError ? (
      <div className="error-box">
        <h3>문제가 발생했습니다.</h3>
        {/* 11단계 <p>{error}</p> */}
          <p>상품 데이터를 불러오지 못했습니다.</p>
        {/* 11단계 <button type="button" onClick={() => window.location.reload()}> */}
        <button type="button" onClick={() => refetch()}>
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
        {/* 11단계 {products.map((product) => ( */}
        {sortedProducts.map((product) => (
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