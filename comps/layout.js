import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Particles from "react-tsparticles";

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
