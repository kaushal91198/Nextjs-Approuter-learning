import React, { Suspense } from "react";
import Views from "@/components/streamingComponents/Views";
import Likes from "@/components/streamingComponents/Likes";
import Comments from "@/components/streamingComponents/Comments";

const Streaming = () => {
  return (
    <div>
      <span>Streaming</span>
      <br />
      <Suspense fallback="Loading Views">
        <Views />
      </Suspense>
      <Likes></Likes>
      <Comments></Comments>
    </div>
  );
};

export default Streaming;
