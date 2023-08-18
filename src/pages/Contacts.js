import React from "react";
import { styled } from "@mui/system";
import { TextField, Typography, Grid, Button, Box } from "@mui/material";
import EmptyLayout from "../../comps/EmptyLayout";

const InputField = styled(TextField)({
  root: {
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
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
});

export default function Contacts() {
  return (
    <EmptyLayout>
      <Box component="div">
        <Grid container justify="center">
          <Box component="form">
            <Typography variant="h5">hire or contact me...</Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              margin="dense"
              size="medium"
            />
            <br />
            <InputField fullWidth={true} label="Email" variant="outlined" />
            <br />
            <InputField
              fullWidth={true}
              label="Company Name"
              variant="outlined"
            />
          </Box>
        </Grid>
      </Box>
    </EmptyLayout>
  );
}
