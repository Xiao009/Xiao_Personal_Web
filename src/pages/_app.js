import "../styles/globals.css"; // this is for global change for look
import Layout from "../../comps/layout";
import "../styles/App.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
