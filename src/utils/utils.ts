export const formatTimeHIS = (seconds: number) => {
  const pad = (num: number) => (num < 10 ? `0${num}` : num);

  const H = pad(Math.floor(seconds / 3600));
  const i = pad(Math.floor((seconds % 3600) / 60));
  const s = pad(Math.floor(seconds % 60));

  let result = "";
  if (+H > 0) result += `${+H}:`;
  result += `${+H > 0 ? i : +i}:${s}`;
  return result;
};
