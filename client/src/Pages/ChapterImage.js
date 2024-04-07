import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ChapterImage() {
  const { id } = useParams();
  console.log("manasdasdga:", id);
  const [chapterImages, setChapterImages] = useState([]);

  useEffect(() => {
    fetch(`/api/manga/${id}/image`)
      .then((response) => response.json())
      .then((data) => {
        setChapterImages(data);
      });
  }, [id]);

  useEffect(() => {
    console.log("manga:", id, chapterImages.data);
  }, [chapterImages.data]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "50%",
          margin: "0 auto",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {chapterImages.data &&
          chapterImages.data.map((image, index) => (
            <img
              key={index}
              src={image.link}
              alt={`Page ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                margin: "0",
                padding: "0",
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default ChapterImage;
