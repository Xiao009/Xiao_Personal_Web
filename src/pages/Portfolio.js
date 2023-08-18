import React from "react";
import EmptyLayout from "../../comps/EmptyLayout";
import { styled, CssBaseline } from "@mui/material"; // Import CssBaseline from MUI
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
// The dynamic implement can solve hydration errors:
import dynamic from "next/dynamic";

const DynamicButton = dynamic(() => import("@mui/material/Button"), {
  ssr: false,
});

const CardContainer = styled(Box)({
  maxWidth: 345,
  margin: "3rem",
  margin: "3rem auto",
});

export default function Portfolio() {
  return (
    <EmptyLayout>
      <Box component="div">
        <Grid container justify="center" alignItems="center">
          {/* Project1 */}
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="project1"
                    height="140"
                    image="/images/html-css-javascript-lg.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Project1
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Something really not right here
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <DynamicButton size="small" color="primary">
                    Share
                  </DynamicButton>
                  <DynamicButton size="small" color="primary">
                    Details
                  </DynamicButton>
                </CardActions>
              </Card>
            </CardContainer>
          </Grid>
          {/* Project2 */}
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="project1"
                    height="140"
                    image="/images/html-css-javascript-lg.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Project1
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Something really not right here
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <DynamicButton size="small" color="primary">
                    Share
                  </DynamicButton>
                  <DynamicButton size="small" color="primary">
                    Details
                  </DynamicButton>
                </CardActions>
              </Card>
            </CardContainer>
          </Grid>
          {/* Project2 */}
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="project1"
                    height="140"
                    image="/images/html-css-javascript-lg.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Project1
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Something really not right here
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <DynamicButton size="small" color="primary">
                    Share
                  </DynamicButton>
                  <DynamicButton size="small" color="primary">
                    Details
                  </DynamicButton>
                </CardActions>
              </Card>
            </CardContainer>
          </Grid>
        </Grid>
      </Box>
    </EmptyLayout>
  );
}
