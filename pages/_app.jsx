import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* All Page Content, that's why we used spread operator */}
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
