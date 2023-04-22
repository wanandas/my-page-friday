import { createTheme, PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // NOTE palette values for light mode
          primary: { main: "#281B24" },
          secondary: { main: "#F7C289" },
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: "#fff",
          },
        }
      : {
          // NOTE palette values for dark mode
          primary: { main: "#FA8072" },
          secondary: { main: "#FA8072" },
          divider: deepOrange[700],
          text: {
            primary: "#fff",
            secondary: grey[900],
          },
        }),
  },
});

export const LightTheme = createTheme(getDesignTokens("light"));
export const DarkTheme = createTheme(getDesignTokens("dark"));
