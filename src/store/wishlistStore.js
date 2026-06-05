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

      toggleWishlist: (product) =>
        set((state) => {
          const isWishlisted = state.wishlistItems.some(
            (item) => item.id === product.id
          );

          if (isWishlisted) {
            return {
              wishlistItems: state.wishlistItems.filter(
                (item) => item.id !== product.id
              ),
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