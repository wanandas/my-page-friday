/**
 * Checks if Dark Mode Enabled
 */
export const isDarkMode =
  typeof window !== "undefined" &&
  (localStorage.isDark === "true" ||
    (!("isDark" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches));

console.log(isDarkMode);
