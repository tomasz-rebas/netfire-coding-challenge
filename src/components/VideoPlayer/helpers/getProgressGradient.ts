export const getProgressGradient = (
  current: number,
  duration: number,
  fillColor = "#CAE871",
  bgColor = "#252525"
): string => {
  const percentage = duration > 0 ? (current / duration) * 100 : 0;
  return `linear-gradient(to right, ${fillColor} ${percentage}%, ${bgColor} ${percentage}%)`;
};
