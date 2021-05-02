const colors = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9,
};

export const COLORS = Object.keys(colors).map((elem) =>elem.toLocaleLowerCase());

/*getting an Array of Objects "colors" properties and changing the case of colors keys
then iterating through that array with for..of loop and returning the colors corresponding numbers*/
export const colorCode = (color) => {
  for (let i of Object.entries(colors).map(elem => [elem[0].toLocaleLowerCase(), elem[1],])) {
    if (i.includes(color)) return i[1];
  }
};

/* Update 1. Below tried to replace For Loop and If Statement with a single function call that 
directly finds the index of a given input value. Using Map collection*/
export const colorCode = color => {
  let map = new Map(Object.entries(colors).map(([key, value]) => [key.toLowerCase(), value]));
  let code = map.get(color);
  return code;
};

/* Update 2. Just using the Array COLORS to get an element with corresponding index*/
export const colorCode = color => {return COLORS.indexOf(color)};

/* eventually was showed this optin below */
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

export const colorCode = color => COLORS.indexOf(color);