import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box
        sx={{
          boxShadow: "0px 5px 5px 0px rgba(189,179,189,1)",
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            minHeight: "calc(100vh - 75px)",
          }}
        >
          <Box
            sx={{
              flex: "1",
              // background: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50%",
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ padding: "20px", pd: "1" }}>
                Summarize any Youtube Video.
              </Typography>
              <Typography variant="h6" sx={{ padding: "20px", pt: "0" }}>
                An all rounder tool to summarize youtube videos and also save them into notes and folders for future so that you never have to worry about getting them lost.
              </Typography>
              <Button
                variant="contained"
                sx={{ marginLeft: "20px" }}
                onClick={() => navigate("/home")}
              >
                Get Started
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "1",
              // background: "yellow",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography variant="h3" sx={{ padding: "20px" }} gutterBottom>
              Summarize any Youtube Video or Text from a webpage.
            </Typography> */}
            <img src="/landingPhoto.png" style={{ width: "100%" }} />
          </Box>
        </Stack>
      </Box>
      {/* <Box>
        <Typography variant="h4" sx={{ margin: "30px", textAlign: "center" }}>
          Our Offerings
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: "row" },
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
            <CardMedia
              component="img"
              alt="subtitle"
              height="140"
              image="/subtitle.png"
              sx={{
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Summarize from Youtube with subtitles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Get Started</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
            <CardMedia
              component="img"
              alt="no subtitle"
              height="140"
              image="/no-subtitle.png"
              sx={{
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Summarize from Youtube without subtitles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Get started</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
            <CardMedia
              component="img"
              alt="webpage"
              height="140"
              alt="webpage"
              image="/webpage.png"
              sx={{
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Summarize any text from a website
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Get Started</Button>
            </CardActions>
          </Card>
        </Stack>
      </Box> */}
    </>
  );
}

export default Landing;
