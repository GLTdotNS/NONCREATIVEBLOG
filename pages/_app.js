import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Loading from "../components/Loading/Loading";
import Head from "next/head";
import CookieBanner from "../components/Cookies/cookies";
import MyContext, { MyContextProvider } from "../Context/context";
import { Analytics } from "@vercel/analytics/react";
import Up from "../components/Up/Up";
import dynamic from "next/dynamic";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const CrispWithNoSSR = dynamic(() => import("../components/Chat/crisp"));

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleRouteChangeStart = () => {
      NProgress.start();
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      NProgress.done();
      setLoading(false);
    };

    const handleRouteChangeError = () => {
      NProgress.done();
      setLoading(false);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    // Clean up events
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [setLoading]);

  return (
    <>
      <Analytics />
      <Head>
        <title>NONCREATIVEBLOG - Блог на Георги Тонков</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="Разгледайте скандинавската митология и от друга гледна точка.Запознайте се с модерната кухня и лесни рецепти за дома и офис. Лични истории и забавни мемета в блога на Георги Тонков."
        />
        <meta
          name="description"
          content="Разгледайте скандинавската митология и друга гледна точка.Запознайте се с модерната кухня и лесни рецепти за дома и офис. Лични истории и забавни мемета в блога на Георги Тонков."
        />
        <meta name="author" content="Georgi Tonkov" />
        <meta name="language" content="BG" />
        <meta
          property="og:image"
          content="https://noncreativeblog.net/cover.png"
        />{" "}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://noncreativeblog.net" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="bg_BG" />
        <link rel="canonical" href="https://noncreativeblog.net/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      {loading ? (
        <Loading />
      ) : (
        <MyContextProvider>
          {" "}
          <Layout>
            <Up />
            <CrispWithNoSSR />

            <Component {...pageProps} />

            <CookieBanner />
          </Layout>
        </MyContextProvider>
      )}
    </>
  );
}

export default MyApp;
