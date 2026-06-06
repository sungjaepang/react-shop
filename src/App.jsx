/* 260603 front프로젝트 시작 */

/* 3단계 상품 상세 페이지 연결 - 3. 라우터에 상세 페이지 추가 App.jsx & main.jsx */
/* 4단계 라우터 추가 - Zustand로 장바구니 상태관리 */
/* 5단계 헤더에 Cart 링크 + 장바구니 개수 표시 - 2. header 추가 */
/* 13단계 라우터 추가 - 찜하기 Wishlist 기능 */
/* 15단계 라우터 추가 - 최근 본 상품 Recently Viewed 기능 */
/* 16단계 다크모드 - theme 적용 */
/*  */
/*  */

/* App.jsx의 역할 3가지
1. 장바구니 상태 관리
2. localStorage 저장
3. 페이지 라우팅
*/

import { Routes, Route } from "react-router-dom";

/*  기존 Home은 학습 기록용으로 보존
    import Home from "./pages/Home"; */

import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from './pages/Cart'; /* */ 
import Header from "./components/Header"; /* */ 
import Wishlist from "./pages/Wishlist"; /* 13단계 */ 
import RecentlyViewed from "./pages/RecentlyViewed"; /* 15단계 */ 
import { useThemeStore } from "./store/themeStore"; /* 16단계 */ 


function App() {
  // const [cart, setCart] = useState(() => {
  //   const savedCart = localStorage.getItem("cart")
  //   return savedCart ? JSON.parse(savedCart) : []
  // })

  const theme = useThemeStore((state) => state.theme); /* 16단계 */ 

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // }, [cart])

  return (
    <div className={`app ${theme}`}> {/* 16단계 */}
    {/* // <BrowserRouter> */}
      <Header />
      {/* <Header cart={cart} /> */}

      <Routes>
        {/* 기존 정적 Home 버전 */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* 현재 실무형 API 기반 메인 페이지 */}
        <Route path="/" element={<Shop />} />

        {/* 기존: /product/:id */}
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}

        {/* 현재 ProductCard 링크와 맞춘 경로 */}
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} /> {/* 13단계 */}
        <Route path="/recent" element={<RecentlyViewed />} /> {/* 15단계 */}
      </Routes>
    {/* // </BrowserRouter> */}
    </div>
  )
}

export default App;
