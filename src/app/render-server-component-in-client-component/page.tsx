import Button from "@/components/button";
import ClientComp from "./ClientComp";
import Likes from "@/components/streamingComponents/Likes";

const ParallelDataFetching = () => {
  return (
    <div>
      Render-Server-Component-In-Client-Component
      <ClientComp serverComp={<Likes />} />
    </div>
  );
};

export default ParallelDataFetching;
