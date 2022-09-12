export const getDecimalPart = (number) => {
  if (Number.isInteger(number)) return 0;
  console.log(number);
  const decimal = number.toString().split(".")[1];

  return decimal;
};
