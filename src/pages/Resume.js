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
          <TimeLineYear variant="h2">2018</TimeLineYear>
          <TimeLineItem>
            <SubHeading variant="h5">Testing Engineer</SubHeading>
            <Typography variant="body1" style={{ color: "tomato" }}>
              Best Buy
            </Typography>
            <Typography variant="subtitle1" style={{ color: "#757de8" }}>
              Located at Shenzhen, Guangdong
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Assisting the TV testing, power supply and network peripheral
              products. Seasonal business starts from summer
            </Typography>
            <SubHeading variant="h5">Founder</SubHeading>
            <Typography variant="body1" style={{ color: "tomato" }}>
              Student Storage Business
            </Typography>
            <Typography variant="subtitle1" style={{ color: "#757de8" }}>
              Located at StateCollege, Guangdong
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Assisting the TV testing, power supply and network peripheral
              products. Seasonal business starts from summer
            </Typography>
          </TimeLineItem>
          <TimeLineYear variant="h2">2019-2021</TimeLineYear>
          <TimeLineItem>
            <SubHeading variant="h5">Embedded Engineer</SubHeading>
            <Typography variant="body1" style={{ color: "tomato" }}>
              CANNON INSTRUMENT COMPANY
            </Typography>
            <Typography variant="subtitle1" style={{ color: "#757de8" }}>
              Located at StateCollege, Pennsylvania
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              1. Investigated with team of two for Lapping Machine Project
              including programming UI design and OOP for motor and sensor
              control, and developing IOT which result in 24-hour automatic
              working process that eliminate the need for continuous human
              resource involvement{" "}
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              2. Built an individual network system on ESP32 by using console to
              features including DAC, wifi connection, IOA and web browser,
              programmed FREERTOS operating system on ESP32 in order to fulfill
              company future development feature{" "}
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              3. Crated Motor testing Case for checking motor statues, including
              electric design upgrade, component pick and programming for motor
              control, PWM output, and screen display which increase the
              development process for product with less mechanical issue (30%
              error){" "}
            </Typography>
          </TimeLineItem>
        </TimeLine>
        <TimeLine>
          <TimeLineYear variant="h2">2023</TimeLineYear>
          <TimeLineItem>
            <SubHeading variant="h5">Software Engineer</SubHeading>
            <Typography variant="body1" style={{ color: "tomato" }}>
              Space Neko LLC
            </Typography>
            <Typography variant="subtitle1" style={{ color: "#757de8" }}>
              Remote
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Providing support for fortend development using next.js for a
              vertically integrated ERP web platform targeting SMEs, using FaaS
              (Function-as-a-Service) or PaaS (Platform-as-a-Service) as sales
              strategies and offering a serverless pay-as-you-go model
            </Typography>
          </TimeLineItem>
          <TimeLineItem>
            <SubHeading variant="h5">Electical Enginer II</SubHeading>
            <Typography variant="body1" style={{ color: "tomato" }}>
              Crown Equipment Company
            </Typography>
            <Typography variant="subtitle1" style={{ color: "#757de8" }}>
              Located at NewBredmen, Ohio
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              performing engineering work requiring application of standard
              techniques, procedures, and criteria in carrying out engineering
              tasks. Focus will involve the development of electrical based
              systems including electronics, electrical harness and wiring,
              software engineering, component selection, and associated
              electrical systems.{" "}
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Doing CANBUS inegration test using Oscilloscope, Making wire
              harness with VeSys to minimize the CANBUS communication noise{" "}
            </Typography>
          </TimeLineItem>
        </TimeLine>
      </MainContainer>
    </EmptyLayout>
  );
}
