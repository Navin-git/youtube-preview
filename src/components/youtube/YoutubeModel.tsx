import Model from "../common/Model";
import YoutubeVideoPlayer from "./YoutubeVideoPlayer";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const YoutubeModel = ({ children, isOpen, setIsOpen, id = "" }: Props) => {
  return (
    <Model
      modelClassName="youtube-model"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      button={children}
    >
      {isOpen ? <YoutubeVideoPlayer id={id} autoplay={1} /> : <></>}
    </Model>
  );
};

export default YoutubeModel;
