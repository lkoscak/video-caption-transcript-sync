import { type FC } from "react";
import type { VideoSource } from "../../../types/types";
import styles from "./videoSelectorItem.module.scss";

type VideoSelectorItemProps = {
  video: VideoSource;
  onSelected: () => void;
};

const VideoSelectorItem: FC<VideoSelectorItemProps> = ({
  video,
  onSelected,
}) => {
  return (
    <li className={styles.item} onClick={onSelected}>
      {video.name}
    </li>
  );
};

export default VideoSelectorItem;
