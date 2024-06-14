import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Loading from "../components/Loading/Loading";
import Head from "next/head";
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
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Head>
            <title>Георги Тонков - Готвач, програмист или просто Жоро</title>
            <meta
              http-equiv="Content-Security-Policy"
              content="upgrade-insecure-requests"
            />
            <meta name="RATING" content="RTA-5042-1996-1400-1577-RTA" />
            <meta
              name="description"
              content="Explore Redheadporn.net, your ultimate destination for the most captivating and beautiful redhead girls. Dive into a mesmerizing world of red-haired beauty."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/favicon.ico" />
            <meta
              property="og:title"
              content="Redheadporn.net: A Captivating Journey into the World of Beautiful Redhead Girls"
            />
            <meta
              property="og:description"
              content="Explore Redheadporn.net, your ultimate destination for the most captivating and beautiful redhead girls. Dive into a mesmerizing world of red-haired beauty."
            />
            {/* <script async src="//d.smopy.com/d/?resource=pubJS"></script>{" "} */}
            {/* <meta property="og:image" content="/path/to/image.jpg" /> */}
            <meta property="og:url" content="https://www.redheadporn.net" />
            <meta property="og:type" content="website" />
            {/* <meta name="twitter:card" content="summary_large_image" /> */}
            <meta
              name="twitter:title"
              content="Redheadporn.net: A Captivating Journey into the World of Beautiful Redhead Girls"
            />
            <meta
              name="twitter:description"
              content="Explore Redheadporn.net, your ultimate destination for the most captivating and beautiful redhead girls. Dive into a mesmerizing world of red-haired beauty."
            />
            {/* <meta name="twitter:image" content="/path/to/image.jpg" /> */}
            <link rel="canonical" href="https://www.redheadporn.net" />
            <meta
              name="keywords"
              content="redhead, redhead girls, beautiful redhead, redhead models, redhead beauty, redhead porn , porno, Octavia Red, MollyRedWolf"
            />
            <meta name="author" content="Redheadporn.net" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
