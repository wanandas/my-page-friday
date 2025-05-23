import { createTheme, PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const openSans = '"Open Sans", "Helvetica", "Arial", sans-serif';
const michroma = '"Michroma", "Roboto", "Helvetica", "Arial", sans-serif';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // NOTE palette values for light mode
          primary: { main: "#281B24" },
          secondary: { main: "#F7C289" },
          divider: amber[200],
          text: { primary: grey[900], secondary: grey[700] }, // Updated
        }
      : {
          // NOTE palette values for dark mode
          primary: { main: "#FA8072" },
          secondary: { main: "#FA8072" },
          divider: deepOrange[700],
          text: { primary: "#fff", secondary: grey[300] }, // Updated
        }),
  },
  typography: {
    fontFamily: openSans,
    h1: { fontFamily: michroma, fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontFamily: michroma, fontSize: '2.25rem', fontWeight: 700 },
    h3: { fontFamily: michroma, fontSize: '2rem', fontWeight: 700 },
    h4: { fontFamily: michroma, fontSize: '1.75rem', fontWeight: 700 },
    h5: { fontFamily: michroma, fontSize: '1.5rem', fontWeight: 700 },
    h6: { fontFamily: michroma, fontSize: '1.25rem', fontWeight: 700 },
    subtitle1: { fontFamily: openSans, fontSize: '1rem', fontWeight: 400 },
    subtitle2: { fontFamily: openSans, fontSize: '0.875rem', fontWeight: 500 },
    body1: { fontFamily: openSans, fontSize: '1rem', fontWeight: 400 },
    body2: { fontFamily: openSans, fontSize: '0.875rem', fontWeight: 400 },
    button: { fontFamily: openSans, fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase' as const },
    caption: { fontFamily: openSans, fontSize: '0.75rem', fontWeight: 400 },
    overline: { fontFamily: openSans, fontSize: '0.75rem', fontWeight: 400, textTransform: 'uppercase' as const },
  }
});

export const LightTheme = createTheme(getDesignTokens("light"));
export const DarkTheme = createTheme(getDesignTokens("dark"));
