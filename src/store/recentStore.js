/* 260605 파일 생성 */

/* 15단계 최근 본 상품 Recently Viewed 기능 - 1. store 만들기 */
/*  */
/*  */

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecentStore = create(
  persist(
    (set) => ({
      recentItems: [],

      addRecentItem: (product) =>
        set((state) => {
          const filteredItems = state.recentItems.filter(
            (item) => item.id !== product.id
          );

          return {
            recentItems: [product, ...filteredItems].slice(0, 6),
          };
        }),
    }),
    {
      name: "react-shop-recent",
    }
  )
);