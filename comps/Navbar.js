import Link from "next/link";
import Image from "next/image";
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
} from "@mui/material";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@mui/icons-material";

export default function Navbar() {
  return (
    <>
      <Box component="div">
        {/* <Avatar src={avatar} alt="Xiao Zhong" /> */}
        <Avatar>
          <Image
            src="/logo1.png" // Path to the image inside the public folder
            alt="Xiao Zhong"
            width={100} // Specify the width of the image
            height={100} // Specify the height of the image
          />
        </Avatar>
      </Box>
      <Box component={"nav"}>
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
