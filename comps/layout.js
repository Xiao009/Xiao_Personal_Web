import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import Header from "./Header";
import Particle from "./ParticleBg";

export default function Layout({ children }) {
  return (
    <>
      <div className="content">
        <CssBaseline />
        {/* <Particle /> Move Particle component here */}
        <Navbar />
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
