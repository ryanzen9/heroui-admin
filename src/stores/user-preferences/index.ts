import { LanguageType } from "@/i18n/types";
import { getAppNamespace } from "@/utils/get-app-namespace";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PageLayoutType, ThemeType } from "../types";

interface PreferencesState {
  theme: ThemeType;
  language: LanguageType;
  enableDynamicTitle: boolean;
  themeColorPrimary: string;
  pageLayout: PageLayoutType;
}

export const DEFAULT_PREFERENCES = {
  theme: "system" as ThemeType,
  language: "zh-CN" as LanguageType,
  enableDynamicTitle: true as boolean,
  themeColorPrimary: "#409eff" as string,
  pageLayout: "layout-center" as PageLayoutType,
} satisfies PreferencesState;

interface PreferencesAction {
  reset: () => void;
  changeSiteTheme: (theme: ThemeType) => void;
  changeLanguage: (language: LanguageType) => void;
  setPreferences: {
    // 单个 key-value 更新
    <T>(key: string, value: T): void;
    // 对象形式批量更新
    <T extends Partial<PreferencesState>>(preferences: T): void;
  };
}

export const usePreferencesStore = create<
  PreferencesState & PreferencesAction
>()(
  persist(
    (set) => ({
      ...DEFAULT_PREFERENCES,

      /**
       * 更新偏好设置
       */
      setPreferences: (...args: any[]) => {
        if (args.length === 1) {
          const preferences = args[0];
          set(() => {
            return { ...preferences };
          });
        } else if (args.length === 2) {
          const [key, value] = args;
          set(() => {
            return { [key]: value };
          });
        }
      },

      /**
       * 更新主题
       */
      changeSiteTheme: (theme) => {
        set(() => {
          return { theme };
        });
      },

      /**
       * 更新语言
       */
      changeLanguage: (language) => {
        set(() => {
          return { language };
        });
      },

      /**
       * 重置状态
       */
      reset: () => {
        set(() => {
          return { ...DEFAULT_PREFERENCES };
        });
      },
    }),
    {
      name: getAppNamespace("preferences"),
      version: 1,
    },
  ),
);
