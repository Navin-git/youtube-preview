import YoutubePreview from "./YoutubePreview";
import YoutubeModel from "./YoutubeModel";
import { useState } from "react";

type Props = {
  title: string;
  content: string;
  children?: React.ReactNode;
  thumbnail: string;
  id: string;
};

/**
 * YouTube banner that displays a title, content, thumbnail,
 * and YouTube video preview.
 * @property {string} title - The title of the YouTube banner.
 * @property {string} content - The `content` property is a string that represents the description or
 * content of the YouTube video.
 * @property children - The `children` property is used to pass any additional content or components to
 * the `YoutubeBanner` component.
 * @property {string} thumbnail - The `thumbnail` property is a string that represents the URL or path
 * to the thumbnail image of the YouTube video.
 * @property {string} id - The `id` property is a string that represents the unique identifier of the
 * YouTube video.
 */

const YoutubeBanner = ({
  title = "",
  content = "",
  children = <></>,
  thumbnail,
  id = "",
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="youtube-banner">
      <YoutubePreview isPopOpen={isOpen} thumbnail={thumbnail} id={id} />
      <div className="youtube-dec">
        <div className="youtube-dec-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-dec">{content}</p>
        </div>
        {id && (
          <YoutubeModel isOpen={isOpen} id={id} setIsOpen={setIsOpen}>
            {children}
          </YoutubeModel>
        )}
      </div>
    </section>
  );
};

export default YoutubeBanner;
