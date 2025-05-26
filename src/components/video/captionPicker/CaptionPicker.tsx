import type { FC } from "react";
import styles from "./captionPicker.module.scss";
import { captionStyles } from "../../../definitions/definitions";
import classNames from "classnames";

type CaptionPickerProps = {
  selected: string;
  onSelected: (className: string) => void;
};

const CaptionPicker: FC<CaptionPickerProps> = ({ selected, onSelected }) => {
  return (
    <ul className={styles.picker}>
      {captionStyles.map((style) => (
        <li
          key={style}
          className={classNames(
            styles.item,
            styles[style],
            selected === style && styles.selected
          )}
          onClick={() => onSelected(style)}
          title={style}
        >
          C
        </li>
      ))}
    </ul>
  );
};

export default CaptionPicker;
