import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";

export default function Layout({ darkMode, setDarkMode, children }) {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      setDarkMode(true);
    } else {
      // light mode
      setDarkMode(false);
    }
  }, [darkMode, setDarkMode]);
  return (
    <>
      <Navbar isDark={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
