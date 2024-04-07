import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchAppBar from "../Components/Navbar";
function Search() {
  const { search } = useParams();
  const [mangaList, setMangaList] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/manga/search/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setMangaList(data);
        setIsLoaded(true);
      });

    console.log(mangaList);
  }, [isLoaded]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <SearchAppBar></SearchAppBar>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {mangaList.data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <a href={`/chapters/${item.id}`}>
                <img
                  src={item.thumb}
                  alt={item.title}
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              </a>
              <h3 style={{ marginBottom: "5px", marginTop: "10px" }}>
                {item.title}
              </h3>
              <p>
                <strong>Status:</strong> {item.status}
              </p>
              <p>
                <strong>Type:</strong> {item.type}
              </p>
              <p>
                <strong>Total Chapters:</strong> {item.total_chapter}
              </p>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
