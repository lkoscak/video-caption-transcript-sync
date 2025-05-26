import { useRef, type FC } from "react";
import styles from "./transcriptItem.module.scss";
import classNames from "classnames";

type TranscriptItemProps = {
  time: string;
  text: string;
  isFocused: boolean;
  onSelected: () => void;
};

const TranscriptItem: FC<TranscriptItemProps> = ({
  time,
  text,
  isFocused,
  onSelected,
}) => {
  const itemRef = useRef<HTMLLIElement | null>(null);
  if (isFocused && itemRef.current) {
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <li
      ref={itemRef}
      className={classNames(styles.item, isFocused && styles.focused)}
      onClick={onSelected}
    >
      <span>{time}</span>
      <span>{text}</span>
    </li>
  );
};

export default TranscriptItem;
