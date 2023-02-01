import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // NOTE palette values for light mode
          primary: { main: "#FA8072" },
          secondary: { main: "#8FC9A3" },
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: "#fff",
          },
        }
      : {
          // NOTE palette values for dark mode
          primary: { main: "#8FC9A3" },
          secondary: { main: "#FA8072" },
          divider: deepOrange[700],
          text: {
            primary: "#fff",
            secondary: grey[900],
          },
        }),
  },
});
