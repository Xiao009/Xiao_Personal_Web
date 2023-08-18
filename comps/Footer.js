import React from "react";
import { styled } from "@mui/system";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import Github from "@mui/icons-material/GitHub";

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
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<LinkedIn />}
          href="https://www.linkedin.com/in/xiao-zhong-6b8b34119/"
        />
      </Bottomformat>
      <Bottomformat>
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<Github />}
          href="https://github.com/Xiao009"
        />
      </Bottomformat>
      <Bottomformat>
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<Instagram />}
          href="https://www.instagram.com/supermic9/"
        />
      </Bottomformat>
    </FooterContainer>
  );
}
