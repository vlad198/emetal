import React, { useEffect } from "react";

export default function FrontPage() {
  useEffect(() => {
    document.title = "Front Page";
  }, []);

  return <div>Front Page</div>;
}
