import { type FC } from "react";
import styles from "./transcript.module.scss";
import TranscriptItem from "./transcriptItem/TranscriptItem";
import { formatTimeHIS } from "../../utils/utils";
import type { SRTItem } from "../../types/types";

type TranscriptProps = {
  transcript: SRTItem[];
  videoTime: number;
  onTranscriptItemSelected: (time: number) => void;
};

const Transcript: FC<TranscriptProps> = ({
  transcript,
  videoTime,
  onTranscriptItemSelected,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Transcript</h1>
      <ul className={styles.content}>
        {transcript?.map((item) => {
          const timeFormated = formatTimeHIS(item.startSeconds);
          const textFormated = item.text.replace(/(\r\n|\n|\r)/gm, " ");
          return (
            <TranscriptItem
              key={item.id}
              text={textFormated}
              time={timeFormated}
              isFocused={
                videoTime >= item.startSeconds && videoTime < item.endSeconds
              }
              onSelected={() => {
                onTranscriptItemSelected(item.startSeconds);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Transcript;
