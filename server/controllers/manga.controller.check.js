// const Product = require("../models/product.model");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const fetchManga = async (req, res) => {
  try {
    // Read the JSON file containing the response data
    const filePath = path.join(__dirname, "./json/mangas.json");
    const responseData = fs.readFileSync(filePath, "utf8");

    // Send the response data as JSON
    res.json(JSON.parse(responseData));
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch manga data");
  }
};
const fetchLatest = async (req, res) => {
  try {
    // Read the JSON file containing the response data
    const filePath = path.join(__dirname, "./json/latest.json");
    const responseData = fs.readFileSync(filePath, "utf8");

    // Send the response data as JSON
    res.json(JSON.parse(responseData));
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch manga data");
  }
};

const searchManga = async (req, res) => {
  const { search } = req.params;

  try {
    // Read the JSON file containing the response data
    const filePath = path.join(__dirname, "./json/search.json");
    const responseData = fs.readFileSync(filePath, "utf8");

    // Send the response data as JSON
    res.json(JSON.parse(responseData));
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch manga data");
  }
};

const getManga = async (req, res) => {
  const { id } = req.params;
  try {
    // Read the JSON file containing the response data
    const filePath = path.join(__dirname, "./json/getManga.json");
    const responseData = fs.readFileSync(filePath, "utf8");

    // Send the response data as JSON
    res.json(JSON.parse(responseData));
    console.log(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch manga data");
  }
};

const fetchChapters = async (req, res) => {
  const { id } = req.params;
  try {
    // Read the JSON file containing the response data
    const filePath = path.join(__dirname, "./json/getChapter.json");
    const responseData = fs.readFileSync(filePath, "utf8");
    console.log(responseData);
    // Send the response data as JSON
    res.json(JSON.parse(responseData));
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch manga data");
  }
};

const fetchImages = async (req, res) => {
  const { id } = req.params;
  try {
    // Read the JSON file containing the response data
    const filePath = path.join(__dirname, "./json/getImage.json");
    const responseData = fs.readFileSync(filePath, "utf8");

    // Send the response data as JSON
    res.json(JSON.parse(responseData));
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch manga data");
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
