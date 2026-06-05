/* 260604 파일 생성 */

/* 4단계 Zustand로 장바구니 상태관리 - 2. store 파일 만들기 */
/* 6단계 localStorage 저장 - 1. cartStore 수정 */
/* 6단계 localStorage 저장 - 2. 수량 증가/감소 기능 추가 */
/*  */

import { create } from "zustand";
// 
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(  
    (set) => ({
        // 
  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }),

    /* 수량 증가/감소 기능 추가 */
    increaseQuantity: (id) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
        })),

        decreaseQuantity: (id) =>
        set((state) => ({
            cartItems: state.cartItems
            .map((item) =>
                item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
    /* ----------------------- */

    removeFromCart: (id) =>
        set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cartItems: [] }),
})//
,
{
    name: "react-shop-cart",
}
)
);