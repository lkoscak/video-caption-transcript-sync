import { type FC } from "react";

import styles from "./caption.module.scss";
import classNames from "classnames";

type CaptionProps = {
  text: string;
  style: string;
};

const Caption: FC<CaptionProps> = ({ text, style }) => {
  return (
    <div className={classNames(styles.caption, styles[style])}>{text}</div>
  );
};

export default Caption;
