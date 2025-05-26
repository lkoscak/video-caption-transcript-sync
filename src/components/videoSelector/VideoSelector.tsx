import type { FC } from "react";
import type { VideoSource } from "../../types/types";
import styles from "./videoSelector.module.scss";
import VideoSelectorItem from "./videoSelectorItem/VideoSelectorItem";

type VideoSelectorProps = {
  videos: VideoSource[];
  onVideoSelected: (videoId: string) => void;
};

const VideoSelector: FC<VideoSelectorProps> = ({ videos, onVideoSelected }) => {
  return (
    <ul className={styles.container}>
      {videos.map((video) => (
        <VideoSelectorItem
          key={video.id}
          video={video}
          onSelected={() => onVideoSelected(video.id)}
        />
      ))}
    </ul>
  );
};

export default VideoSelector;
