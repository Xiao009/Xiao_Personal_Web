import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }) {
  return (
    <div className="content">
      <CssBaseline />
      <Navbar />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
