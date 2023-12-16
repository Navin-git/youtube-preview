import { PlayIcon } from "@/assets/icons";
import { useState } from "react";
import YoutubeVideoPlayer from "./YoutubeVideoPlayer";

type Props = {
  isPopOpen: boolean;
  thumbnail: string;
  id: string;
};

const YoutubePreview = ({ isPopOpen, id, thumbnail }: Props) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  return (
    <div className="youtube-preview">
      {isPlay && !isPopOpen ? (
        <YoutubeVideoPlayer id={id} autoplay={1} />
      ) : (
        <div className="full" onClick={() => setIsPlay(true)}>
          <img src={thumbnail} alt="" />
          <PlayIcon />
        </div>
      )}
    </div>
  );
};

export default YoutubePreview;
