export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const colorCode = (color) => COLORS.indexOf(color);

export const decodedValue = ([firstColor, secondColor]) =>
  colorCode(firstColor) * 10 + colorCode(secondColor);