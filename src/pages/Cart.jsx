function Cart({ cart, setCart }) {
    const removeItem = (index) => {
      const nextCart = cart.filter((_, i) => i !== index)
      setCart(nextCart)
    }
  
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
  
    return (
      <section className="cart-page">
        <h1>장바구니</h1>
  
        {cart.length === 0 ? (
          <p className="cart-empty">장바구니가 비어 있습니다.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item, index) => (
                <article className="cart-item" key={`${item.id}-${index}`}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.price.toLocaleString()}원</p>
                  </div>
                  <button onClick={() => removeItem(index)} className="ghost-btn">
                    삭제
                  </button>
                </article>
              ))}
            </div>
  
            <div className="cart-summary">
              <strong>총합: {totalPrice.toLocaleString()}원</strong>
            </div>
          </>
        )}
      </section>
    )
  }
  
  export default Cart