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
          const filteredItems = state.recentItems.filter( // 기존 제거
            (item) => item.id !== product.id
          );

          return {
            recentItems: [product, ...filteredItems].slice(0, 6),
                                                    // 최대 개수 제한
                /* 무한히 저장되면 UX와 localStorage 효율이 떨어질 수 있음.
                    최근 조회 상품 개수를 제한하는게 좋음. */
          };
        }),
    }),
    {
      name: "react-shop-recent",
    }
  )
);