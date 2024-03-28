import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        setIsLoaded(true);
      });

    console.log(backendData?.location?.country);
  }, [isLoaded]);
  return (
    <div>
      {typeof backendData?.current === null &&
      backendData?.locaition === null ? (
        <p>Loading...</p>
      ) : (
        <p>{backendData?.location?.country}</p>
      )}
    </div>
  );
}

export default App;
