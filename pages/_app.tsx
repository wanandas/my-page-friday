import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { Navbar } from "@/components/Molecules";
import { useDarkMode } from "helpers/Hooks/useDarkmode";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Suspense, useMemo } from "react";
import { LightTheme, DarkTheme } from "helpers/getDesignToken";
import { SocialMedia } from "@/components/Organisms";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/Atoms/Icons";
import styled from "@emotion/styled";

export default function App({ Component, pageProps }: AppProps) {
  const { darkMode, handleDarkMode } = useDarkMode();

  const social = useMemo(
    () => [
      {
        key: "sc1",
        Component: FacebookIcon,
        link: "https://www.facebook.com/WanFutrue",
        title: "Wantanawat Jitprakop",
      },
      {
        key: "sc2",
        Component: InstagramIcon,
        link: "https://www.instagram.com/busyonfriday/",
        title: "BusyOnFriday",
      },
      {
        key: "sc3",
        Component: LinkedinIcon,
        link: "https://www.linkedin.com/in/wantanawat-jitprakop-0750a5188/",
        title: "Wantanawat Jitprakop",
      },
      {
        key: "sc4",
        Component: GithubIcon,
        link: "https://github.com/wanandas",
        title: "BusyOnFriday",
      },
    ],
    []
  );

  const theme = useMemo(() => {
    return createTheme(darkMode ? DarkTheme : LightTheme);
  }, [darkMode]);

  return (
    <AppWrapper>
      <Head>
        <title>Busy On Friday</title>
        <meta name="description" content="Friday Web Page" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<> </>}>
        <ThemeProvider theme={theme}>
          <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
          <div>
            <CssBaseline />
            <Component {...pageProps} />
            <SocialMedia social={social} />
          </div>
        </ThemeProvider>
      </Suspense>
    </AppWrapper>
  );
}

const AppWrapper = styled("div")`
  line-height: 1.8;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Michroma", sans-serif;
  transition: background 0.7s ease-in-out;
  max-width: 1440px;
  margin: 0 auto;

  *::selection {
    background: salmon;
    color: white;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: 0.5s ease-in-out;
  }
`;
