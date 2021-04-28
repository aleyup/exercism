export const isArmstrongNumber = (num) => {
  let arr = Array.from(String(num))
  let armstrongNum = arr.map(num => num ** arr.length).reduce((a, b) => a + b)
  return num === armstrongNum ? true : false

};

console.log(isArmstrongNumber(153)) //true
console.log(isArmstrongNumber(154)) //false
