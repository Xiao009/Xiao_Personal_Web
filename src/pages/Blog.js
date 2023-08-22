import React from "react";
import EmptyLayout from "../../comps/EmptyLayout";
import { styled, CssBaseline } from "@mui/material";
import { Typography, Grid, Box, Divider } from "@mui/material";
import FeaturedPost from "../../comps/FeaturedPost";

const GapBox = styled(Box)({
  marginTop: (theme) => theme.spacing(6), // Add a gap between header and the first post
});

const SpacedGrid = styled(Grid)({
  padding: (theme) => theme.spacing(4), // Add spacing between the edge of each page
  marginTop: (theme) => theme.spacing(3), // Add a gap between TitleDivider and SpacedGrid
});

const CardContainer = styled(Box)({
  maxWidth: 345,
  margin: "3rem auto",
  marginTop: (theme) => theme.spacing(4), // Add a gap between the first post and the header
});

const TitleDivider = styled(Divider)({
  backgroundColor: "white", // Set the color of the divider
  height: "3px", // Set the height of the divider
  //   width: "50px", // Set the width of the divider
  //   margin: "0 auto", // Center the divider horizontally
});

// determine the input
const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

export default function Portfolio() {
  return (
    <EmptyLayout>
      <CssBaseline /> {/* Add CssBaseline to reset default styling */}
      <GapBox>
        <Typography
          variant="h5"
          style={{
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          My Post
        </Typography>
        <TitleDivider />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ marginTop: "2rem" }}
        >
          <SpacedGrid container spacing={5}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </SpacedGrid>
        </Grid>
      </GapBox>
    </EmptyLayout>
  );
}
