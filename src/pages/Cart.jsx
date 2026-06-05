/* 260603 front프로젝트 시작 */

/* 4단계 Zustand로 장바구니 상태관리 - 4. 장바구니 페이지 만들기 */
/* 6단계 localStorage 저장 - 3. 수정 */
/* */

import { useCartStore } from "../store/cartStore";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  // 6단계
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="empty-cart">장바구니가 비어 있습니다.</p>;
  }

  return (
    <section className="cart-page">
      <h2>Cart</h2>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>

              {/* 6단계 수량증가/감소 버튼추가 */}
              {/* <p>Quantity: {item.quantity}</p> */}
              <div className="quantity-box">
                <button type="button" onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button type="button" onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div> {/* 6단계 */}
            </div>

            <button type="button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
        <button type="button" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </section>
  );
}

// function Cart({ cart, setCart }) {
//     const removeItem = (index) => {
//       const nextCart = cart.filter((_, i) => i !== index)
//       setCart(nextCart)
//     }
  
//     const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
  
//     return (
//       <section className="cart-page">
//         <h1>장바구니</h1>
  
//         {cart.length === 0 ? (
//           <p className="cart-empty">장바구니가 비어 있습니다.</p>
//         ) : (
//           <>
//             <div className="cart-list">
//               {cart.map((item, index) => (
//                 <article className="cart-item" key={`${item.id}-${index}`}>
//                   <img src={item.image} alt={item.name} />
//                   <div className="cart-item-info">
//                     <h3>{item.name}</h3>
//                     <p>{item.price.toLocaleString()}원</p>
//                   </div>
//                   <button onClick={() => removeItem(index)} className="ghost-btn">
//                     삭제
//                   </button>
//                 </article>
//               ))}
//             </div>
  
//             <div className="cart-summary">
//               <strong>총합: {totalPrice.toLocaleString()}원</strong>
//             </div>
//           </>
//         )}
//       </section>
//     )
//   }
  
  export default Cart;