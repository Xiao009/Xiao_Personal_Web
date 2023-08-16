import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";
import MainFeaturedPost from "./MainFeaturedPost";
import Grid from "@mui/material/Grid";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";
// import Content from './Content';
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// Need loader to handle the post
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

// const posts = [post1, post2, post3];

// for the component in featurepost
const mainFeaturedPost = {
  title: "New Update Coming",
  description: "can be anyt big new update for our web or company",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading(routing to the webpage) …",
};

//Below big feauer
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
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Xiao demo | Home</title>
        <meta name="keywords" content="xiao" />
      </Head>
      <div>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Link href="/testcase">
          <span className={styles.btn}>see more testcase</span>
        </Link>
      </div>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        {/* <Content title="From the firehose" posts={posts} /> */}
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </>
  );
}
