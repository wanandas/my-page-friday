import { useCallback, useEffect, useState } from "react";
import { isDarkMode } from "helpers/isDarkmode";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = useCallback(() => {
    setDarkMode((pre: boolean) => {
      localStorage.setItem("isDark", `${!pre}`);
      return !pre;
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      return setDarkMode(true);
    } else {
      return setDarkMode(() => {
        localStorage.setItem("isDark", "false");
        return false;
      });
    }
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return { handleDarkMode, darkMode };
};
