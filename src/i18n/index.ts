import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import commonZhCN from "./locales/zh-CN/common.json";
import exceptionZhCN from "./locales/zh-CN/exception.json";
import { LanguageType } from "./types";

export const DEFAULT_LANGUAGE: LanguageType = "zh-CN";

type ResourcesType = {
  common: typeof commonZhCN;
  exception: typeof exceptionZhCN;
};

export const i18nResources: {
  [key in LanguageType]?: ResourcesType;
} = {
  "zh-CN": {
    common: commonZhCN,
    exception: exceptionZhCN,
  },
};

const i18nInitOptions: InitOptions = {
  resources: i18nResources,
  lng: DEFAULT_LANGUAGE,
  defaultNS: "common",
};

export const i18n = i18next.use(initReactI18next);

export function setupI18n() {
  i18n.init(i18nInitOptions);
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
   */
  i18next.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
  });
}
