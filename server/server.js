const express = require("express");
const axios = require("axios");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.get("/api", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "53.1,-0.13" },
    headers: {
      "X-RapidAPI-Key": "0494aa35c7msh5e3069b2d3f2292p12ba06jsn3ae018cf6f44",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(6000, () => {
  console.log("server started on port 6000");
});
