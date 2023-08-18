import React from "react";
import { styled } from "@mui/system";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

const FooterContainer = styled("div")({
  display: "flex", // Use flex to align items horizontally
  justifyContent: "space-between", // Distribute items with equal space between them
  alignItems: "center", // Center items vertically
  height: "50px", // Set a larger height for the footer
  background: "#222",
});

const Bottomformat = styled("div")({
  "& .MuiBottomNavigationAction-root": {
    minWidth: 0,
    maxWidth: 350,
  },
  "& .MuiSvgIcon-root": {
    fill: "tan",
    "&:hover": {
      fill: "tomato",
      fontSize: "1.8rem",
    },
  },
  padding: "0 8px", // Add padding between items
});

export default function Footer() {
  return (
    <FooterContainer>
      <Bottomformat>
        <BottomNavigationAction style={{ padding: 0 }} icon={<Facebook />} />
      </Bottomformat>
      <Bottomformat>
        <BottomNavigationAction style={{ padding: 0 }} icon={<Twitter />} />
      </Bottomformat>
      <Bottomformat>
        <BottomNavigationAction style={{ padding: 0 }} icon={<Instagram />} />
      </Bottomformat>
    </FooterContainer>
  );
}
