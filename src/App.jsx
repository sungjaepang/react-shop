/* 260603 front프로젝트 시작 */

/* 3단계 상품 상세 페이지 연결 - 3. 라우터에 상세 페이지 추가 App.jsx & main.jsx */
/* 4단계 Zustand로 장바구니 상태관리 - 5. 라우터 추가 */
/* 5단계 헤더에 Cart 링크 + 장바구니 개수 표시 - 2. header 추가 */
/*  */

/* App.jsx의 역할 3가지
1. 장바구니 상태 관리
2. localStorage 저장
3. 페이지 라우팅
*/

import { Routes, Route } from "react-router-dom";
// import './App.css'
// import Home from "./pages/Home"
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
// 
import Cart from './pages/Cart';
// 
import Header from "./components/Header";

function App() {
  // const [cart, setCart] = useState(() => {
  //   const savedCart = localStorage.getItem("cart")
  //   return savedCart ? JSON.parse(savedCart) : []
  // })

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // }, [cart])

  return (
    <>
    {/* // <BrowserRouter> */}
      <Header />
      {/* <Header cart={cart} /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />}
          // element={<ProductDetail cart={cart} setCart={setCart} />}
        />
        {/* <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    {/* // </BrowserRouter> */}
    </>
  )
}

export default App;
