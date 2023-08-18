import React from "react";
import { styled, css } from "@mui/system";
import { TextField, Typography, Grid, Box, Button } from "@mui/material";
import EmptyLayout from "../../comps/EmptyLayout";
import SendIcon from "@mui/icons-material/Send";

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
});
const InputField = styled(TextField)(inputStyles);

const StyledButton = styled(Button)(({ theme }) => ({
  background: "tomato",
  color: "white",
  "&:hover": {
    background: "orange", // Change color on hover
  },
}));

export default function Contacts() {
  return (
    <EmptyLayout>
      <Box component="div" style={{ background: "#233", height: "100vh" }}>
        <Grid container justify="center">
          <Formbox component="form">
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlight: "center",
                textTransform: "uppercase",
              }}
            >
              hire or contact me...
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
              label="Company Name"
              variant="outlined"
              margin="dense"
              size="medium"
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
