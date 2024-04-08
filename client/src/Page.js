// AnotherPage.js
import React, { useEffect, useState } from "react";

function Page() {
  const [isLoaded, setIsLoaded] = useState(true);
  // useEffect(() => {
  //   window.location.reload();
  // }, [isLoaded]);
  return (
    <div>
      <h1>Another Page</h1>
      <p>This is another page in your application.</p>
    </div>
  );
}

export default Page;
