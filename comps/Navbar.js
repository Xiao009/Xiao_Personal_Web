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
// export default function Navbar() {
//   return (
//     <nav>
//       <div className="logo">
//         <Image src="/logo1.png" width={77} height={77} />
//       </div>
//       <Link href="/">Home </Link>
//       <Link href="/about">About Me </Link>
//       <Link href="/Hardware">Hardware </Link>
//       <Link href="/Software">Software </Link>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <Box component={"nav"}>
      <AppBar position="static" style={{ background: "#222" }}>
        <Toolbar>
          <IconButton>
            <ArrowBack style={{ color: "tomato" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
