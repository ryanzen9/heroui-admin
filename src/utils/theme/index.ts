export function isDarkTheme(theme: string) {
  let dark = theme === "dark";
  if (theme === "system") {
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return dark;
}

export function isLightTheme(theme: string) {
  let light = theme === "light";
  if (theme === "system") {
    light = window.matchMedia("(prefers-color-scheme: light)").matches;
  }
  return light;
}

export function isSystemTheme(theme: string) {
  return theme === "system";
}
