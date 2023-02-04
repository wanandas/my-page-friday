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
import { SocialMedia } from "@/components/Organisms";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/Atoms/Icons";
export default function App({ Component, pageProps }: AppProps) {
  const { darkMode, handleDarkMode } = useDarkMode();

  const theme = useMemo(
    () => createTheme(getDesignTokens(darkMode ? "dark" : "light")),
    [darkMode]
  );
  const social = [
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
  ];
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
          <Component {...pageProps} />
          <SocialMedia social={social} />
        </MainWrapper>
      </ThemeProvider>
    </div>
  );
}

const MainWrapper = styled("div")`
  padding: 0 16px;
  margin: 0 auto 4rem;

  @media screen and (min-width: 425px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
