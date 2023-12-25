import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import MobilRightMenuSlider from "@mui/material/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@mui/material";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  CloudDownload,
  Article,
} from "@mui/icons-material";
import { styled } from "@mui/system"; // Import styled function from @mui/system
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
//css styles
const MenuSliderContainer = styled(Box)({
  width: 300,
  background: "#511",
  height: "100%",
});

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/Resume",
  },
  // {
  //   listIcon: <Apps />,
  //   listText: "Portfolio",
  //   listPath: "/Portfolio",
  // },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/Contacts",
  },
  // {
  //   listIcon: <Article />,
  //   listText: "Blog",
  //   listPath: "/Blog",
  // },
  {
    listIcon: <CloudDownload />, // Use an appropriate icon for download
    listText: "Download CV",
    downloadLink: "/cv.pdf", // Specify the download link here
  },
];

export default function Navbar() {
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const sideList = (slider) => (
    <MenuSliderContainer component="div" onClick={toggleSlider(slider, false)}>
      <Avatar
        sx={{
          display: "block",
          // margin: "0.5rem ",
          margin: 0,
          width: (theme) => theme.spacing(13),
          height: (theme) => theme.spacing(13),
          background: "#511", // Set the background color here
        }}
      >
        <Image
          src="/1.png" // Path to the image inside the public folder
          alt="Xiao Zhong"
          width={100} // Specify the width of the image
          height={100} // Specify the height of the image
        />
      </Avatar>
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem
            button
            key={key}
            sx={{
              color: "tan",
              "& .MuiListItemIcon-root, & .MuiListItemText-root": {
                color: "tan",
              },
            }}
            component={lsItem.downloadLink ? "a" : Link}
            href={lsItem.downloadLink || lsItem.listPath}
            download={lsItem.downloadLink ? "cv.pdf" : undefined}
            // component={Link}
            // href={lsItem.listPath}
          >
            <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
            <ListItemText primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </MenuSliderContainer>
  );
  return (
    <>
      <Box>
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            {/* anchor direction can change where the component pop out */}
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
