import React from "react";
import EmptyLayout from "../../comps/EmptyLayout";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";

const MainContainer = styled(Box)({
  background: "#233",
  color: "black",
  padding: "2rem",
  margin: 0,
});

const CenteredTypography = styled(Typography)({
  textAlign: "center",
  color: "tomato",
  padding: "3rem 0",
  textTransform: "uppercase",
});

const TimeLine = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "1rem",
  margin: "0 auto",
  "&:before": {
    content: "''",
    position: "absolute",
    height: "100%",
    border: "1px solid tan",
    right: "40px",
    top: 0,
  },
  "&:after": {
    content: "''",
    display: "table",
    clear: "both",
  },
  [theme.breakpoints.up("md")]: {
    "&:before": {
      left: "calc(50% - 1px)",
      right: "auto",
    },
  },
}));

const TimeLineYear = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  maxWidth: "9.375rem",
  margin: "0 auto", // Center the timeline year
  fontSize: "1.8rem",
  background: "tomato",
  color: "white",
  lineHeight: 1,
  padding: "0.5rem 0 1rem",
  position: "relative", // Add this to enable positioning
  zIndex: 1, // Ensure it appears above the timeline
  "&:before": {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    margin: "0 auto",
    "&:nth-of-type(2n)": {
      float: "none",
      margin: "0 auto",
    },
    "&:nth-of-type(2n):before": {
      display: "none",
    },
  },
}));

const TimeLineItem = styled("div")(({ theme }) => ({
  padding: "1rem",
  borderBottom: "2px solid tan",
  position: "relative",
  margin: "1rem 3rem 1rem 1rem",
  clear: "both",
  "&:after": {
    content: "''",
    position: "absolute",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    right: "-0.625rem",
    top: "calc(50% - 5px)",
    borderStyle: "solid",
    borderColor: "tomato tomato transparent transparent",
    borderWidth: "0.625rem",
    transform: "rotate(45deg)",
  },
  [theme.breakpoints.up("md")]: {
    width: "44%",
    margin: "1rem",
    "&:nth-of-type(2n)": {
      float: "right",
      margin: "1rem",
      borderColor: "tan",
    },
    "&:nth-of-type(2n):before": {
      right: "auto",
      left: "-0.625rem",
      borderColor: "transparent transparent tomato tomato",
    },
  },
}));

const SubHeading = styled(Typography)({
  color: "white",
  padding: "0",
  textTransform: "uppercase",
});

export default function Resume() {
  return (
    <EmptyLayout>
      <MainContainer component="header">
        <CenteredTypography variant="h4">working Experience</CenteredTypography>
        <TimeLine>
          {/* Timeline content goes here */}
          <TimeLineYear variant="h2">2013</TimeLineYear>
          <TimeLineItem>
            <SubHeading variant="h5">Web Design</SubHeading>
            <Typography variant="body1" style={{ color: "tomato" }}>
              company name where worked
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              The piano sat silently in the corner of the room. Nobody could
              remember the last time it had been played. The little girl walked
              up to it and hit a few of the keys. The sound of the piano rang
              throughout the house for the first time in years. In the upstairs
              room, confined to her bed, the owner of the house had tears in her
              eyes.
            </Typography>
          </TimeLineItem>
          <TimeLineYear variant="h2">2013 - 2018</TimeLineYear>
          <TimeLineItem>
            <SubHeading variant="h5">Web Design</SubHeading>
            <Typography variant="body1" style={{ color: "tomato" }}>
              company name where worked
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              The piano sat silently in the corner of the room. Nobody could
              remember the last time it had been played. The little girl walked.
            </Typography>
          </TimeLineItem>
        </TimeLine>
      </MainContainer>
    </EmptyLayout>
  );
}
