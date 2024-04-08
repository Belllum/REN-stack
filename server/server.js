const express = require("express");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
// Middleware to parse JSON requests
app.use(express.json());

app.get("/api", async (req, res) => {
  res.json(["test", "test-case"]);
});

// app.get("/api", async (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://mangaverse-api.p.rapidapi.com/manga/fetch",
//     params: {
//       page: "1",
//       genres: "Harem,Fantasy",
//       nsfw: "true",
//       type: "all",
//     },
//     headers: {
//       "X-RapidAPI-Key": process.env.API_KEY,
//       "X-RapidAPI-Host": "mangaverse-api.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     res.json(response.data);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });

app.listen(6000, () => {
  console.log("server started on port 6000");
  // console.log(process.env.API_KEY);
});
