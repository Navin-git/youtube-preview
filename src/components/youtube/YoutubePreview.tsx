import { PlayIcon } from "@/assets/icons";
import { useState } from "react";
import YoutubeVideoPlayer from "./YoutubeVideoPlayer";
import { noThumbnail } from "@/assets/images";

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
        <div
          className="full"
          onClick={() => {
            id && setIsPlay(true);
          }}
        >
          <img
            src={
              thumbnail
                ? thumbnail
                : id
                ? `https://img.youtube.com/vi/${id}/0.jpg`
                : noThumbnail
            }
            alt=""
            style={{
              cursor: id ? "pointer" : "default",
            }}
          />
          {id && <PlayIcon />}
        </div>
      )}
    </div>
  );
};

export default YoutubePreview;
