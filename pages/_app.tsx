import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { Navbar } from "@/components/Molecules";
import { useDarkMode } from "helpers/Hooks/useDarkmode";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo } from "react";
import { styled } from "@mui/system";
import { getDesignTokens } from "helpers/getDesignToken";

export default function App({ Component, pageProps }: AppProps) {
  const { darkMode, handleDarkMode } = useDarkMode();

  const theme = useMemo(
    () => createTheme(getDesignTokens(darkMode ? "dark" : "light")),
    [darkMode]
  );

  return (
    <div>
      <Head>
        <title>Busy On Friday</title>
        <meta name="description" content="Friday Web Page" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <MainWrapper>
          <CssBaseline />
          <Component {...pageProps} />{" "}
        </MainWrapper>
      </ThemeProvider>
      <footer className={``}></footer>
    </div>
  );
}

const MainWrapper = styled("div")`
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 425px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
