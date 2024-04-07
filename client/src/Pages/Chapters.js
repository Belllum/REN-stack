import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SearchAppBar from "../Components/Navbar";
import {
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

function Chapters() {
  const { id } = useParams();
  const [mangaChapter, setMangaChapter] = useState(null);
  const [mangaDetails, setMangaDetails] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/manga/${id}/chapter`)
      .then((response) => response.json())
      .then((data) => {
        setMangaChapter(data);
        setIsLoaded(true);
      });

    fetch(`/api/manga/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMangaDetails(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching manga details:", error);
        setIsLoaded(true); // Set isLoaded to true even if there's an error
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{mangaDetails ? mangaDetails.data.title : "Loading..."}</title>
      </Helmet>
      <SearchAppBar />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          width: "85%",
          margin: "0 auto", // Align to center horizontally
        }}
      >
        {!isLoaded ? (
          <CircularProgress />
        ) : mangaDetails ? (
          <Card>
            <CardMedia
              component="img"
              height="200px" // Set the desired height
              width="auto" // Let the width adjust automatically based on the aspect ratio
              image={mangaDetails.data.thumb}
              alt={mangaDetails.data.title}
              style={{ objectFit: "cover", padding: 0 }}
            />

            <CardContent>
              <Typography variant="h4">{mangaDetails.data.title}</Typography>
              <Typography variant="subtitle1">
                {mangaDetails.data.sub_title}
              </Typography>
              <Typography variant="body1">
                {mangaDetails.data.summary}
              </Typography>
            </CardContent>
            <Grid container spacing={2} style={{ padding: "20px" }}>
              {mangaChapter.data.map((chapter) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={chapter.id}>
                  <a
                    href={`/chapter/${chapter.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card style={{ height: "100%" }}>
                      <CardContent>
                        <Typography variant="body2">{chapter.title}</Typography>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
              ))}
            </Grid>
          </Card>
        ) : (
          <Typography variant="body1">Error loading manga details.</Typography>
        )}
      </div>
    </>
  );
}

export default Chapters;
