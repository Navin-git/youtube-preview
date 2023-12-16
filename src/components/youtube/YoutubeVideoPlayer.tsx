type Props = {
  autoplay?: number;
  autohide?: number;
  modestbranding?: number;
  si?: string;
  showinfo?: number;
  mute?: number;
  controls?: number;
  rel?: number;
  id: string;
  loop?: number;
  title?: string;
  content?: string;
};

/**
 * The `YoutubeVideoPlayer` component is a React component that renders an iframe for playing YouTube
 * videos with customizable options.
 * @param {Props}  - - `autoplay`: Determines whether the video should automatically start playing.
 * Default value is 0 (disabled).
 * @returns The `YoutubeVideoPlayer` component is returning an `iframe` element.
 */
const YoutubeVideoPlayer = ({
  autoplay = 0,
  autohide = 0,
  modestbranding = 1,
  si = "",
  showinfo = 1,
  mute = 0,
  controls = 1,
  rel = 1,
  id,
  loop = 0,
  title = "",
  content = "",
}: Props) => {
  return (
    <iframe
      className="full"
      src={`https://www.youtube.com/embed/${id}?${`si=${si}&`}rel=${rel}&modestbranding=${modestbranding}&autohide=${autohide}&mute=${mute}&showinfo=${showinfo}&controls=${controls}&autoplay=${autoplay}&loop=${loop}`}
      title={title}
      content={content}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeVideoPlayer;
