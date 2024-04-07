const express = require("express");
// const Product = require("../models/product.model");
const router = express.Router();
const {
  fetchManga,
  fetchLatest,
  searchManga,
  getManga,
  fetchChapters,
  fetchImages,
} = require("../controllers/manga.controller.check");

router.get("/", fetchManga);

router.get("/latest", fetchLatest);

router.get("/search/:search", searchManga);
router.get("/:id", getManga);
router.get("/:id/chapter", fetchChapters);
router.get("/:id/image", fetchImages);

module.exports = router;
