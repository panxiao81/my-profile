import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <Component {...pageProps} />
    </Layout>
  );
}
