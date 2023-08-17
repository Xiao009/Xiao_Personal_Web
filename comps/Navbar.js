import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
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
} from "@mui/icons-material";
import { styled } from "@mui/system"; // Import styled function from @mui/system
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
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
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
          margin: "0.5rem auto",
          width: (theme) => theme.spacing(13),
          height: (theme) => theme.spacing(13),
          background: "#511", // Set the background color here
        }}
      >
        <Image
          src="/images/avatar.png" // Path to the image inside the public folder
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
      <Box component="nav">
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
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
