import { useRef, type FC, useState } from "react";
import styles from "./video.module.scss";
import Caption from "./caption/Caption";
import CaptionPicker from "./captionPicker/CaptionPicker";
import { captionStyles } from "../../definitions/definitions";

type VideoProps = {
  src: string;
  time: number;
  caption?: string;
  onVideoTimeChange: (time: number) => void;
};

const Video: FC<VideoProps> = ({ src, time, caption, onVideoTimeChange }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [captionStyle, setCaptionStyle] = useState(captionStyles[0]);
  if (
    videoRef.current &&
    Math.floor(videoRef.current.currentTime) !== Math.floor(time)
  ) {
    videoRef.current.currentTime = time;
  }
  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        controls
        src={src}
        onTimeUpdate={(e) =>
          onVideoTimeChange((e.target as HTMLVideoElement).currentTime)
        }
      ></video>
      {caption && <Caption text={caption} style={captionStyle} />}
      <CaptionPicker selected={captionStyle} onSelected={setCaptionStyle} />
    </div>
  );
};

export default Video;
