import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchAppBar from "../Components/Navbar";
import { Helmet } from "react-helmet";
import {
  CircularProgress,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

function Home() {
  const [mangaList, setMangaList] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/manga/latest")
      .then((response) => response.json())
      .then((data) => {
        setMangaList(data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MangaKo</title>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.leonardo.ai/users/2f8f0f0d-67c6-4821-ab78-592082274369/generations/2124516f-0eaa-4378-985f-449f44549847/Default_anime_website_logo_a_cute_anime_girl_with_a_strawhat_2.jpg"
        />
      </Helmet>
      <SearchAppBar />
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        {!isLoaded ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {mangaList.data.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea
                    component={Link}
                    to={`/chapters/${item.id}`}
                    style={{ flex: 1 }}
                  >
                    <img
                      src={item.thumb}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "60%",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.summary}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <strong>Status:</strong> {item.status}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <strong>Type:</strong> {item.type}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <strong>Total Chapters:</strong> {item.total_chapter}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}

export default Home;
