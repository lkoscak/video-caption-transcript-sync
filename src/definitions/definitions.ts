import type { VideoSource } from "../types/types";

export const videos: VideoSource[] = [
  {
    id: "v1",
    name: "Clip 1",
    path: "src/assets/videos/video_1/clip.mp4",
    captionsPath: "src/assets/videos/video_1/captions.srt",
  },
  {
    id: "v2",
    name: "Clip 2",
    path: "src/assets/videos/video_2/clip.mp4",
    captionsPath: "src/assets/videos/video_2/captions.srt",
  },
];

export const captionStyles = ["normal", "large", "small", "inverted"];
