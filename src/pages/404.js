import Link from "next/link";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";
import EmptyLayout from "../../comps/EmptyLayout";
import React from "react";
import { styled } from "@mui/system";
import { Typography, Grid, Box, Button } from "@mui/material";

const Formbox = styled(Box)({
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  // zIndex: 2, // Add a higher z-index
});

export default function NotFound() {
  // useEffect(()=>{
  //   console.log('use effect ran') // doing log for development environment
  // },[]
  // )
  // //这里传入空数组是因为，获取数据是伴随着组件更新的，一旦不加这个数组，会陷入死循环

  //这里是像interrupt一样的用法，观察多少秒后跳转
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
    console.log("use effect ran"); // doing log for development environment
  }, []);

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
              <div className="not-found">
                <h1>Ooooops...</h1>
                <h2>That page cannot be found.</h2>
                <p>
                  Go back to the <Link href="/">Homepage</Link>
                </p>
              </div>
            </Typography>
          </Formbox>
        </Grid>
      </Box>
    </EmptyLayout>
  );
}
