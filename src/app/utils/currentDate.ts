export const getCurrentData = () => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  });
  return date;
};
