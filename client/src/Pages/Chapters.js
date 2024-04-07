import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Chapters() {
  const { id } = useParams();
  const [mangaDetails, setMangaDetails] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/manga/${id}/chapter`)
      .then((response) => response.json())
      .then((data) => {
        setMangaDetails(data);
        setIsLoaded(true);
      });
  }, [id]);

  useEffect(() => {
    console.log("manga:", id, mangaDetails);
  }, [mangaDetails]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* <h2>{mangaDetails.title}</h2>
          <p>{mangaDetails.summary}</p> */}
          <ul>
            {mangaDetails.data.map((chapter) => (
              <li key={chapter.id}>
                <a href={`/chapter/${chapter.id}`}>{chapter.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Chapters;
