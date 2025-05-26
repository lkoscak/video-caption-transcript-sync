export type VideoSource = {
  id: string;
  name: string;
  path: string;
  captionsPath: string;
  srtData?: SRTItem[];
};

export type SRTItem = {
  id: string;
  startTime: string;
  startSeconds: number;
  endTime: string;
  endSeconds: number;
  text: string;
};
