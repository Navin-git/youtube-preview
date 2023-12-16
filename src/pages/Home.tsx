import { MuteIcon } from "@/assets/icons";
import Button from "@/components/common/Button";
import YoutubeBanner from "@/components/youtube/YoutubeBanner";
import "@/styles/youtube/index.css";
import { videoList } from "@/utils/mock-data/youtube";

const Home = () => {
  return (
    <main className="wrapper center">
      <YoutubeBanner
        content={videoList[0]?.content}
        title={videoList[0]?.title}
        thumbnail={videoList[0]?.thumbnail}
        id={videoList[0]?.id}
      >
        <Button text="Open Video" icon={<MuteIcon />} />
      </YoutubeBanner>
    </main>
  );
};

export default Home;
