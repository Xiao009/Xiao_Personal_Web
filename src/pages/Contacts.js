import React from "react";
import { styled, css } from "@mui/system";
import { TextField, Typography, Grid, Box, Button } from "@mui/material";
import EmptyLayout from "../../comps/EmptyLayout";
import SendIcon from "@mui/icons-material/Send";
import Particle from "../../comps/ParticleBg";
import Navbar from "../../comps/Navbar";

const inputStyles = css({
  "& label.Mui-focused": {
    color: "tomato",
  },
  "& label": {
    color: "tan",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "tan",
    },
    "&:hover fieldset": {
      borderColor: "tan",
    },
    "&.Mui-focused fieldset": {
      borderColor: "tan",
    },
  },
});

const Formbox = styled(Box)({
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  // zIndex: 2, // Add a higher z-index
});
const InputField = styled(TextField)(inputStyles);

const StyledButton = styled(Button)(({ theme }) => ({
  background: "tomato",
  color: "white",
  "&:hover": {
    background: "orange", // Change color on hover
  },
}));

// const NavbarWithHigherZIndex = styled(Navbar)({
//   zIndex: 3, // Adjust the zIndex to make it appear above the particle background
// });

export default function Contacts() {
  return (
    <EmptyLayout>
      {/* <NavbarWithHigherZIndex />
      <Particle style={{ zIndex: 1 }} /> */}
      <Box component="div" style={{ background: "#233", height: "100vh" }}>
        <Grid container justify="center">
          <Formbox component="form">
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              feel free to contact
            </Typography>
            <InputField
              fullWidth
              label="Name"
              variant="outlined"
              margin="dense"
              size="medium"
              InputProps={{ style: { color: "white" } }}
            />
            <br />
            <InputField
              fullWidth
              label="Email"
              variant="outlined"
              margin="dense"
              size="medium"
              InputProps={{ style: { color: "white" } }}
            />
            <br />
            <InputField
              fullWidth
              label="Message"
              variant="outlined"
              margin="dense"
              size="medium"
              multiline
              rows={5} // Adjust the number of rows
              InputProps={{ style: { color: "white" } }}
            />
            <br />
            <StyledButton variant="outlined" fullWidth endIcon={<SendIcon />}>
              contact me
            </StyledButton>
          </Formbox>
        </Grid>
      </Box>
    </EmptyLayout>
  );
}
