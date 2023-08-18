import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import Header from "./Header";
import Particle from "./ParticleBg";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  // Check if the current route matches the ones that should use the empty layout
  // Add more doc on the back to change it
  const useEmptyLayout = ["/Resume", "/Portfolio"].includes(router.pathname);

  return (
    <>
      <div className="content">
        <CssBaseline />
        <Navbar />
        {!useEmptyLayout && (
          <>
            {/* <Particle /> Move Particle component here */}
            <Header />
          </>
        )}
        <main>{children}</main>
        {/* <Footer /> */}
        {/* {!useEmptyLayout && <Footer />} */}
      </div>
    </>
  );
}
