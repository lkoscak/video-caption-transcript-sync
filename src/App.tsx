import { useState, type FC, useCallback, useRef, useEffect } from "react";
import styles from "./app.module.scss";
import Video from "./components/video/Video";
import { videos } from "./definitions/definitions";
import VideoSelector from "./components/videoSelector/VideoSelector";
import type { VideoSource } from "./types/types";
import Transcript from "./components/transcript/Transcript";
import srtParser2 from "srt-parser-2";

const App: FC = () => {
  // 3rd party parser for SRT files
  const srtParserRef = useRef(new srtParser2());
  // video elemnt ref
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoPlaying, setVideoPlaying] = useState<VideoSource | null>(
    videos?.[0] || null
  );
  const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);

  useEffect(() => {
    if (videoPlaying?.srtData || !videoPlaying?.captionsPath) return;
    fetch(videoPlaying.captionsPath)
      .then((res) => res.text())
      .then((srt) =>
        setVideoPlaying((current) =>
          current
            ? {
                ...current,
                srtData: srtParserRef.current.fromSrt(srt),
              }
            : null
        )
      );
  }, [videoPlaying]);

  const currentCaption = (videoPlaying?.srtData || []).find(
    (item) =>
      currentVideoTime >= item.startSeconds &&
      currentVideoTime < item.endSeconds
  )?.text;

  const videoSelectedHandler = useCallback(
    (videoId: string) => {
      setVideoPlaying(videos?.find((video) => video.id === videoId) || null);
    },
    [videos]
  );
  const updateVideoTimeHandler = useCallback((time: number) => {
    setCurrentVideoTime(time);
  }, []);
  const setVideoTimeHandler = useCallback(
    (time: number) => {
      if (!videoRef.current) return;
      videoRef.current.currentTime = time;
    },
    [videoRef]
  );

  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <Video
          ref={videoRef}
          src={videoPlaying?.path || ""}
          onVideoTimeChange={updateVideoTimeHandler}
          caption={currentCaption}
        />
        <VideoSelector
          videos={videos || []}
          onVideoSelected={videoSelectedHandler}
        />
      </section>
      <section className={styles.right}>
        <Transcript
          transcript={videoPlaying?.srtData || []}
          videoTime={currentVideoTime}
          onTranscriptItemSelected={setVideoTimeHandler}
        />
      </section>
    </main>
  );
};

export default App;
