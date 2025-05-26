import { type FC, useState, type RefObject } from "react";
import styles from "./video.module.scss";
import Caption from "./caption/Caption";
import CaptionPicker from "./captionPicker/CaptionPicker";
import { captionStyles } from "../../definitions/definitions";

type VideoProps = {
  ref: RefObject<HTMLVideoElement | null>;
  src: string;
  caption?: string;
  onVideoTimeChange: (time: number) => void;
};

const Video: FC<VideoProps> = ({ ref, src, caption, onVideoTimeChange }) => {
  const [captionStyle, setCaptionStyle] = useState(captionStyles[0]);
  return (
    <div className={styles.container}>
      <video
        ref={ref}
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
