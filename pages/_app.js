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
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

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
      <Head>
        <title>
          Блог на Георги Тонков - Скандинавска кухня, лични истории и забавления
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="NONCREATIVEBLOG/Блог на Георги Тонков - Скандинавска митология,модерна кухн лични истории и забавни неща."
        />

        <meta
          name="description"
          content="Разгледайте скандинавската митология и друга гледна точка.Запознайте се с модерната кухня и лесни рецепти за дома и офис. Лични истории и забавни мемета в блога на Георги Тонков."
        />
        <meta name="author" content="Georgi Tonkov" />
        <meta name="language" content="BG" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noncreativeblog.net/" />
        <meta
          property="og:title"
          content="NONCREATIVEBLOG/Блог на Георги Тонков - Скандинавска митология, лични истории и забавления"
        />
        <meta
          property="og:description"
          content="Разгледайте скандинавската митология и друга гледна точка.Запознайте се с модерната кухня и лесни рецепти за дома и офис. Лични истории и забавни мемета в блога на Георги Тонков."
        />

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
            <Component {...pageProps} />
            <CookieBanner />
          </Layout>
        </MyContextProvider>
      )}
    </>
  );
}

export default MyApp;
