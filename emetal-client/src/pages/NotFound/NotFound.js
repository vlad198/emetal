import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found Page";
  }, []);
  return (
    <div>
      <title>Not Found</title>
      Error 404.Page not found.
    </div>
  );
}
