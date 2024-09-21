// components/Layout.js
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Layout = ({ children, latestGodsPost }) => {
  return (
    <>
      <Navbar latestGodsPost={latestGodsPost} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
