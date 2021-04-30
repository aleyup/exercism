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
}
export const COLORS = Object.keys(colors).map(elem => elem.toLocaleLowerCase());

export const colorCode = (color) => {
  for (let i of Object.entries(colors).map(elem => [elem[0].toLocaleLowerCase(), elem[1]])) {
    if(i.includes(color)) return i[1]
  }
}; 

/*getting an Array of Objects "colors" properties and changing the case of colors keys
then iterating through that array with for..of loop and returning the colors corresponding numbers*/