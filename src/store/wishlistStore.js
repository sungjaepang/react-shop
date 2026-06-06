/* 260605 파일 생성 */

/* 13단계 찜하기 Wishlist 기능 - 1. store 만들기 */
/*  */
/*  */


import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set) => ({
      wishlistItems: [],

      // addWishlist()
      // removeWishlist()
      // 초급/신입 포폴에서는 이렇게 나눠두는 경우도 있는데
      // toggleWishlist()가 더 깔끔함.

      // 한번 누르면 추가, 또 누르면 삭제. 기본 토글 기능
      toggleWishlist: (product) =>
        set((state) => {
          const isWishlisted = state.wishlistItems.some((item) => item.id === product.id);

          if (isWishlisted) {
            return {
              wishlistItems: state.wishlistItems.filter((item) => item.id !== product.id),
            };
          }

          return {
            wishlistItems: [...state.wishlistItems, product],
          };
        }),
    }),
    {
      name: "react-shop-wishlist",
    }
  )
);