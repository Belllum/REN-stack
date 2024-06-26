// const Product = require("../models/product.model");
const axios = require("axios");

require("dotenv").config();

const fetchManga = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/fetch",
    params: {
      page: "1",
      nsfw: "true",
      type: "all",
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

const fetchLatest = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/latest",
    params: {
      page: "1",
      genres: "Harem,Fantasy",
      nsfw: "true",
      type: "all",
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

const searchManga = async (req, res) => {
  const { search } = req.params;

  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/search",
    params: {
      text: search, //legendary
      nsfw: "true",
      type: "all",
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getManga = async (req, res) => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga",
    params: {
      id: id, //659524dd597f3b00281f06ff
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

const fetchChapters = async (req, res) => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/chapter",
    params: {
      id: id, //'659524dd597f3b00281f06ff'
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

const fetchImages = async (req, res) => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: "https://mangaverse-api.p.rapidapi.com/manga/image",
    params: {
      id: id, //'659524e9597f3b00281f070d'
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  fetchManga,
  fetchLatest,
  searchManga,
  getManga,
  fetchChapters,
  fetchImages,
};
