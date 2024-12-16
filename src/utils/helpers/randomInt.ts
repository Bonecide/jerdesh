export const getRandomInt = (min: number, max: number) => {
  if (min > max) {
    throw new Error("Минимальное значение не может быть больше максимального.");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
