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

      // setTheme: (theme) =>
      //   set({
      //     theme,
      //   })

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light", //system
        })),
    }),
    {
      name: "react-shop-theme",
    }
  )
);