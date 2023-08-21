import React, { useState } from "react";
import { styled, css } from "@mui/system";
import { TextField, Typography, Grid, Box, Button } from "@mui/material";
import EmptyLayout from "../../comps/EmptyLayout";
import SendIcon from "@mui/icons-material/Send";
import Particle from "../../comps/ParticleBg";
import Navbar from "../../comps/Navbar";
import { SettingsInputAntenna } from "@mui/icons-material";
import { sendContactForm } from "../../comps/api";
import Footer from "../../comps/FooterInside";

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

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

export default function Contacts() {
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setState(initState);
      // Handle success, display a success message or perform any necessary actions
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

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
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <br />
            <InputField
              fullWidth
              label="Email"
              variant="outlined"
              margin="dense"
              size="medium"
              InputProps={{ style: { color: "white" } }}
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <br />
            <InputField
              fullWidth
              label="Message"
              variant="outlined"
              margin="dense"
              size="medium"
              multiline
              rows={5}
              InputProps={{ style: { color: "white" } }}
              name="message"
              value={values.message}
              onChange={handleChange}
            />
            <br />
            <StyledButton
              variant="outlined"
              fullWidth
              endIcon={<SendIcon />}
              disabled={isLoading}
              onClick={onSubmit}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </StyledButton>
          </Formbox>
        </Grid>
      </Box>
      {/* <Footer /> */}
    </EmptyLayout>
  );
}
