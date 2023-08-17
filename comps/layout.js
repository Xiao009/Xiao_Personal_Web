import Navbar from "./Navbar";
import Footer from "./Footer";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }) {
  return (
    <div className="content">
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
