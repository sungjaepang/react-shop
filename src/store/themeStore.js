/* 260605 파일 생성 */

/* 16단계 다크모드 */
/*  */
/*  */

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "react-shop-theme",
    }
  )
);